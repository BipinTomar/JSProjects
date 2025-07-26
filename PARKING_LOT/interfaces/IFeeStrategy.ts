import { VehicleType } from "../models/Vehicle"


export interface IFeeStrategy{
    calculateFee(vehicleType : VehicleType, durationHours: number): number;
}