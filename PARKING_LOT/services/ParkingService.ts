import { Vehicle, VehicleType } from "../models/Vehicle";
import { Slot } from "../models/Slot";
import { Ticket} from "../models/Ticket";
import { FeeCalculator } from "./FeeCalculator";
import { IDGenerator } from "../utils/IDGenerator";

export class ParkingService {

    private slots : Slot[];
    private tickets : Map<string,Ticket>;
    private feeCalculator : FeeCalculator;
    constructor(slots : Slot[])
    {
        this.slots = slots;
        this.tickets = new Map();
        this.feeCalculator = new FeeCalculator();
    }

    parkVehicle(vehicle : Vehicle): Ticket | null
    {
        const slot = this.slots.find( s => s.canPark(vehicle.type));
        if(!slot) return null;

        slot.park();
        const ticketId = IDGenerator.generate(vehicle.licenseNumber);
        const ticket = new Ticket(ticketId, vehicle.licenseNumber,slot.id);
        this.tickets.set(ticketId,ticket);
        return ticket;
    }

    unParkVehicle(ticketId : string, vehicleType : VehicleType) : number
    {
        const ticket = this.tickets.get(ticketId);
        if (!ticket) throw new Error("Invalid ticket.");

        const slot = this.slots.find(s => s.id === ticket.slotId);
        if (!slot) throw new Error("Slot not found.");

        slot.unpark();
        this.tickets.delete(ticketId);

        const hours = ticket.getDurationInHours();
        return this.feeCalculator.calculateFee(vehicleType,hours);
    }

    getAvailableSlotCount()
    {
        return this.slots.filter((slot) => slot.isAvailable).length;
    }

}
