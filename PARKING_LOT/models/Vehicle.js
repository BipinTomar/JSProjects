"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = exports.VehicleType = void 0;
var VehicleType;
(function (VehicleType) {
    VehicleType["CAR"] = "CAR";
    VehicleType["BIKE"] = "BIKE";
    VehicleType["TRUCK"] = "TRUCK";
})(VehicleType || (exports.VehicleType = VehicleType = {}));
var Vehicle = /** @class */ (function () {
    function Vehicle(licenseNumber, type) {
        if (!licenseNumber) {
            throw new console.error("License number is required for Vehicle");
        }
        if (!type) {
            throw new console.error("Vehicle Type is required for Vehicle");
        }
        this.licenseNumber = licenseNumber;
        this.type = type;
        this.entryTime = new Date();
    }
    Vehicle.prototype.getDetails = function () {
        return "".concat(this.type, " vehicle with license : ").concat(this.licenseNumber);
    };
    return Vehicle;
}());
exports.Vehicle = Vehicle;
