import { Slot } from "./Slot";

export class Floor {

    public  id: number;
    public  slots: Slot[];
    constructor (id: number , slots: Slot[])
    {
        this.id = id;
        this.slots= slots;
    }

    getAvailableSlots(): Slot[]{
        return  this.slots.filter((slot) => slot.isAvailable );
    }
}