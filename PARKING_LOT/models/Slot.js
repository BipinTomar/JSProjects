"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slot = void 0;
var Slot = /** @class */ (function () {
    function Slot(id, allowedTypes, _isAvailable) {
        if (_isAvailable === void 0) { _isAvailable = true; }
        this.id = id;
        this.allowedTypes = allowedTypes;
        this._isAvailable = this._isAvailable;
    }
    Object.defineProperty(Slot.prototype, "isAvailable", {
        get: function () {
            return this._isAvailable;
        },
        enumerable: false,
        configurable: true
    });
    Slot.prototype.park = function () {
        if (!this._isAvailable) {
            throw new Error("Slots Are Occupied");
        }
        this._isAvailable = false;
    };
    Slot.prototype.unpark = function () {
        this._isAvailable = true;
    };
    Slot.prototype.canPark = function (type) {
        return this._isAvailable && this.allowedTypes.includes(type);
    };
    return Slot;
}());
exports.Slot = Slot;
