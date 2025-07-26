export enum VehicleType {
    CAR = 'CAR',
    BIKE = 'BIKE',
    TRUCK = 'TRUCK'
}
export interface IVehicle{
    licenseNumber: string;
    type: VehicleType;
    entryTime: Date;
    getDetails() : string;
}
export class Vehicle implements IVehicle{
    public licenseNumber: string;
    public type: VehicleType;
    public entryTime: Date;
    constructor( licenseNumber: string , type: VehicleType)
    {
        if(!licenseNumber){
            throw new console.error("License number is required for Vehicle");
        }
        if(!type){
            throw new console.error("Vehicle Type is required for Vehicle");
        }
        this.licenseNumber = licenseNumber;
        this.type = type;
        this.entryTime = new Date();
    }
    public getDetails(): string {
        return `${this.type} vehicle with license : ${this.licenseNumber}`;
    }
}