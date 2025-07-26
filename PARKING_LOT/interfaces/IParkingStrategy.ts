import { Slot } from "../models/Slot"
import { VehicleType } from "../models/Vehicle"


export interface IParkingStrategy {

    findSlots(slots : Slot[], type: VehicleType) : Slot | null;
}