"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParkingService = void 0;
var Ticket_1 = require("../models/Ticket");
var FeeCalculator_1 = require("./FeeCalculator");
var IDGenerator_1 = require("../utils/IDGenerator");
var ParkingService = /** @class */ (function () {
    function ParkingService(slots) {
        this.slots = slots;
        this.tickets = new Map();
        this.feeCalculator = new FeeCalculator_1.FeeCalculator();
    }
    ParkingService.prototype.parkVehicle = function (vehicle) {
        var slot = this.slots.find(function (s) { return s.canPark(vehicle.type); });
        if (!slot)
            return null;
        slot.park();
        var ticketId = IDGenerator_1.IDGenerator.generate(vehicle.licenseNumber);
        var ticket = new Ticket_1.Ticket(ticketId, vehicle.licenseNumber, slot.id);
        this.tickets.set(ticketId, ticket);
        return ticket;
    };
    ParkingService.prototype.unParkVehicle = function (ticketId, vehicleType) {
        var ticket = this.tickets.get(ticketId);
        if (!ticket)
            throw new Error("Invalid ticket.");
        var slot = this.slots.find(function (s) { return s.id === ticket.slotId; });
        if (!slot)
            throw new Error("Slot not found.");
        slot.unpark();
        this.tickets.delete(ticketId);
        var hours = ticket.getDurationInHours();
        return this.feeCalculator.calculateFee(vehicleType, hours);
    };
    ParkingService.prototype.getAvailableSlotCount = function () {
        return this.slots.filter(function (slot) { return slot.isAvailable; }).length;
    };
    return ParkingService;
}());
exports.ParkingService = ParkingService;
