"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IDGenerator = void 0;
var IDGenerator = /** @class */ (function () {
    function IDGenerator() {
    }
    IDGenerator.generate = function (licenseNumber) {
        return "".concat(licenseNumber, " - ").concat(Date.now);
    };
    return IDGenerator;
}());
exports.IDGenerator = IDGenerator;
