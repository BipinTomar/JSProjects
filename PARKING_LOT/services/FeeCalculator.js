"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeeCalculator = void 0;
var Vehicle_1 = require("../models/Vehicle");
var FeeCalculator = /** @class */ (function () {
    function FeeCalculator() {
    }
    FeeCalculator.prototype.calculateFee = function (vehicleType, durationHours) {
        switch (vehicleType) {
            case Vehicle_1.VehicleType.CAR: return durationHours * 10;
            case Vehicle_1.VehicleType.BIKE: return durationHours * 5;
            case Vehicle_1.VehicleType.TRUCK: return durationHours * 20;
            default: throw new Error("Unknown Vehicle Type ");
        }
    };
    return FeeCalculator;
}());
exports.FeeCalculator = FeeCalculator;
