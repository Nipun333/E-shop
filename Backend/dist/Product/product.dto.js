"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductDTO = void 0;
const class_validator_1 = require("class-validator");
class ProductDTO {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Product name can't be empty" }),
    __metadata("design:type", String)
], ProductDTO.prototype, "ProductName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Ammount can't be empty" }),
    __metadata("design:type", Number)
], ProductDTO.prototype, "Price", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Disctiption can't be empty" }),
    __metadata("design:type", String)
], ProductDTO.prototype, "Description", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Sellername can't be empty" }),
    __metadata("design:type", String)
], ProductDTO.prototype, "Sellername", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Quantity can't be empty" }),
    __metadata("design:type", Number)
], ProductDTO.prototype, "Quantity", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ProductDTO.prototype, "filename", void 0);
exports.ProductDTO = ProductDTO;
//# sourceMappingURL=product.dto.js.map