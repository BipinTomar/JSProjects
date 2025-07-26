const car = new Vehicle("UP80AS1465", VehicleType.CAR);
console.log(car.getDetails());

import { Vehicle, VehicleType } from "./models/Vehicle";
import { Slot } from "./models/Slot";
import { ParkingService } from "./services/ParkingService";

const slots : Slot[] = [];

for ( let i =1; i<=20;i++)
{
    const types = (i<=8) ? [VehicleType.CAR, VehicleType.BIKE] : [VehicleType.TRUCK];
    slots.push(new Slot(i,types));

    //intializing parking service

    const parkingService  = new ParkingService(slots);

    const myCar = new Vehicle("KA01AB1234", VehicleType.CAR);
    const ticket = parkingService.parkVehicle(myCar);
    if (ticket) {
        console.log("Parked:", ticket);
      
        // Simulate fee after some time
        const fee = parkingService.unParkVehicle(ticket.ticketId, myCar.type);
        console.log("Unparked. Fee:", fee);
      } else {
        console.log("No available slot.");
      }
    
}
