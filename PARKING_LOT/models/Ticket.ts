import { Slot } from "./Slot";


export class Ticket {

    public ticketId : string;
    public vehicleNumber: string;
    public slotId: number;
    public issuedAt: Date;

    constructor(ticketId: string,
        vehicleNumber: string,
        slotId: number){
            this.ticketId = ticketId;
            this.vehicleNumber = vehicleNumber;
            this.slotId = slotId;
            this.issuedAt = new Date();

            console.log(`TICKET CREATED: ${this.ticketId} FOR VEHICLE ${this.vehicleNumber} AT SLOT ${this.slotId}`);
    }
    public getDurationInHours(): number
    {
        const now: Date = new Date();
        const diff: number = now.getTime() - (this.issuedAt).getTime() ;
        return Math.ceil(diff / (1000 * 60 * 60));
    }

}