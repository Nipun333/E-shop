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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellerController = void 0;
const common_1 = require("@nestjs/common");
const seller_dto_1 = require("./seller.dto");
const seller_service_1 = require("./seller.service");
let SellerController = class SellerController {
    constructor(sellerService) {
        this.sellerService = sellerService;
    }
    getSeller() {
        return this.sellerService.getSeller();
    }
    Sellerhistory() {
        return this.sellerService.Sellerhistory();
    }
    findSellerByname(qry) {
        return this.sellerService.findSellerByname(qry);
    }
    findAll() {
        return this.sellerService.findAll();
    }
    register(mydto) {
        return this.sellerService.register(mydto);
    }
    login(name, password) {
        return this.sellerService.login(name, password);
    }
    updateProfile(id, name, email, password, address) {
        return this.sellerService.updateProfile(id, name, email, password, address);
    }
    updateAddress(id, mydto) {
        return this.sellerService.updateOne(id, mydto);
    }
    deleteUser(Uid) {
        return this.sellerService.deleteUser(Uid);
    }
};
__decorate([
    (0, common_1.Get)("/dashboard"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], SellerController.prototype, "getSeller", null);
__decorate([
    (0, common_1.Get)("/sellerhistory"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], SellerController.prototype, "Sellerhistory", null);
__decorate([
    (0, common_1.Get)("/findbyname"),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], SellerController.prototype, "findSellerByname", null);
__decorate([
    (0, common_1.Get)("/findall"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], SellerController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)("/registration"),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [seller_dto_1.Seller]),
    __metadata("design:returntype", Object)
], SellerController.prototype, "register", null);
__decorate([
    (0, common_1.Post)("/login"),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)("name")),
    __param(1, (0, common_1.Body)('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Object)
], SellerController.prototype, "login", null);
__decorate([
    (0, common_1.Put)("/updateProfile/"),
    __param(0, (0, common_1.Body)("id", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)("name")),
    __param(2, (0, common_1.Body)("email")),
    __param(3, (0, common_1.Body)("password")),
    __param(4, (0, common_1.Body)("address")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String, String, String]),
    __metadata("design:returntype", Object)
], SellerController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Patch)("/updateAddress/:id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, seller_dto_1.Seller]),
    __metadata("design:returntype", String)
], SellerController.prototype, "updateAddress", null);
__decorate([
    (0, common_1.Delete)("/deleteUser/:id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], SellerController.prototype, "deleteUser", null);
SellerController = __decorate([
    (0, common_1.Controller)("/Seller"),
    __metadata("design:paramtypes", [seller_service_1.SellerService])
], SellerController);
exports.SellerController = SellerController;
//# sourceMappingURL=seller.controller.js.map