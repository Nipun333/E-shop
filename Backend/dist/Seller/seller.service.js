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
const bcrypt = require("bcrypt");
const dist_1 = require("@nestjs-modules/mailer/dist");
let SellerService = class SellerService {
    constructor(sellerRepo, mailerService) {
        this.sellerRepo = sellerRepo;
        this.mailerService = mailerService;
    }
    Sellerhistory(session) {
        return "Seller's Stats: " + "\nEmail: " + session.email + "\nSession Id: " + session.id;
    }
    findSellerByname(qry) {
        return this.sellerRepo.findOne({ where: { name: qry.name } });
    }
    findAll() {
        return this.sellerRepo.find();
    }
    async register(mydto) {
        const salt = await bcrypt.genSalt();
        const hassedpassed = await bcrypt.hash(mydto.password, salt);
        mydto.password = hassedpassed;
        console.log(hassedpassed);
        return this.sellerRepo.save(mydto);
    }
    async login(email, password) {
        console.log(password);
        const mydata = await this.sellerRepo.findOneBy({ email: email });
        const isMatch = await bcrypt.compare(password, mydata.password);
        if (isMatch) {
            return 1;
        }
        else {
            return 0;
        }
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
    async sendEmail(mydata) {
        return await this.mailerService.sendMail({
            to: mydata.email,
            subject: mydata.subject,
            text: mydata.text
        });
    }
};
SellerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(seller_entity_1.SellerEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        dist_1.MailerService])
], SellerService);
exports.SellerService = SellerService;
//# sourceMappingURL=seller.service.js.map