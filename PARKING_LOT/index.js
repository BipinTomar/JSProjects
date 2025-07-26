"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var car = new Vehicle_1.Vehicle("UP80AS1465", Vehicle_1.VehicleType.CAR);
console.log(car.getDetails());
var Vehicle_1 = require("./models/Vehicle");
var Slot_1 = require("./models/Slot");
var ParkingService_1 = require("./services/ParkingService");
var slots = [];
for (var i = 1; i <= 20; i++) {
    var types = (i <= 8) ? [Vehicle_1.VehicleType.CAR, Vehicle_1.VehicleType.BIKE] : [Vehicle_1.VehicleType.TRUCK];
    slots.push(new Slot_1.Slot(i, types));
    //intializing parking service
    var parkingService = new ParkingService_1.ParkingService(slots);
    var myCar = new Vehicle_1.Vehicle("KA01AB1234", Vehicle_1.VehicleType.CAR);
    var ticket = parkingService.parkVehicle(myCar);
    if (ticket) {
        console.log("Parked:", ticket);
        // Simulate fee after some time
        var fee = parkingService.unParkVehicle(ticket.ticketId, myCar.type);
        console.log("Unparked. Fee:", fee);
    }
    else {
        console.log("No available slot.");
    }
}
