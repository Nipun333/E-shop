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
exports.SellerService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const seller_entity_1 = require("./seller.entity");
let SellerService = class SellerService {
    constructor(sellerRepo) {
        this.sellerRepo = sellerRepo;
    }
    getSeller() {
        return "Seller's Profile: ";
    }
    Sellerhistory() {
        return "Seller's Statistics: ";
    }
    findSellerByname(qry) {
        return this.sellerRepo.findOne({ where: { name: qry.name } });
    }
    findAll() {
        return this.sellerRepo.find();
    }
    register(mydto) {
        return this.sellerRepo.save(mydto);
    }
    async login(Uname, Upassword) {
        const ext = await this.sellerRepo.findOne({ where: { name: Uname, password: Upassword } });
        if (!ext) {
            return "Login Unsuccessfull";
        }
        else
            return "logged in";
    }
    updateProfile(id, name, email, password, address) {
        return this.sellerRepo.update(id, { name: name, email: email, password: password, address: address });
    }
    updateOne(id, mydto) {
        return this.sellerRepo.update(id, mydto);
    }
    deleteUser(Uid) {
        return this.sellerRepo.delete(Uid);
    }
};
SellerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(seller_entity_1.SellerEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SellerService);
exports.SellerService = SellerService;
//# sourceMappingURL=seller.service.js.map