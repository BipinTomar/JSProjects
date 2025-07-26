"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ticket = void 0;
var Ticket = /** @class */ (function () {
    function Ticket(ticketId, vehicleNumber, slotId) {
        this.ticketId = ticketId;
        this.vehicleNumber = vehicleNumber;
        this.slotId = slotId;
        this.issuedAt = new Date();
        console.log("TICKET CREATED: ".concat(this.ticketId, " FOR VEHICLE ").concat(this.vehicleNumber, " AT SLOT ").concat(this.slotId));
    }
    Ticket.prototype.getDurationInHours = function () {
        var now = new Date();
        var diff = now.getTime() - (this.issuedAt).getTime();
        return Math.ceil(diff / (1000 * 60 * 60));
    };
    return Ticket;
}());
exports.Ticket = Ticket;
