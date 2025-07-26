import { VehicleType } from "../models/Vehicle";
import { IFeeStrategy } from "../interfaces/IFeeStrategy";


export class FeeCalculator  implements IFeeStrategy{

    public calculateFee(vehicleType: VehicleType, durationHours: number): number {
        switch(vehicleType){
            case VehicleType.CAR : return durationHours*10;
            case VehicleType.BIKE : return durationHours*5;
            case VehicleType.TRUCK : return durationHours*20;
            default : throw new Error("Unknown Vehicle Type ")
        }
    }
}