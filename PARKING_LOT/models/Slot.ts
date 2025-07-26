import { VehicleType } from "./Vehicle";

export class Slot {
    public id : number;
    public allowedTypes : VehicleType[];
    private _isAvailable : boolean;

    constructor(id : number, allowedTypes: VehicleType[],  _isAvailable: boolean = true ){
        this.id = id;
        this.allowedTypes = allowedTypes;
        this._isAvailable = this._isAvailable;

    }
    get isAvailable(): boolean {
        return this._isAvailable;
      }
    park() : void
    {
        if(!this._isAvailable){
            throw new Error("Slots Are Occupied"); 
        }
        this._isAvailable = false;
    }
    unpark() : void{
        this._isAvailable = true;
    }
    canPark(type: VehicleType): boolean {
        return this._isAvailable && this.allowedTypes.includes(type);
      }
    
}