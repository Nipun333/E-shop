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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const seller_entity_1 = require("../Seller/seller.entity");
const typeorm_2 = require("typeorm");
const product_entity_1 = require("./product.entity");
let ProductService = class ProductService {
    constructor(sellerRepo, productRepo) {
        this.sellerRepo = sellerRepo;
        this.productRepo = productRepo;
    }
    async add(mydto) {
        const existSeller = await this.sellerRepo.findOneBy({ name: mydto.Sellername });
        if (existSeller) {
            const product = new product_entity_1.ProductEntity();
            product.seller = existSeller;
            product.ProductName = mydto.ProductName;
            product.Price = mydto.Price;
            product.Description = mydto.Description;
            product.Sellername = mydto.Sellername;
            product.Quantity = mydto.Quantity;
            product.SoldQuantity = mydto.SoldQuantity;
            product.filename = mydto.filename;
            return this.productRepo.save(product);
        }
        else {
            return "seller not found";
        }
    }
    getAll() {
        return this.productRepo.find();
    }
    async searchByName(ProductName) {
        var ext = this.productRepo.find({ where: { ProductName: ProductName } });
        if (ext) {
            return ext;
        }
        else
            return "No matches found for this product name!";
    }
    productAdd(Pname, price, quantity) {
        return "Product name: " + Pname + " price: " + price + " quantity: " + quantity;
    }
    deleteProduct(id) {
        return this.productRepo.delete(id);
    }
    updateProduct(id, Productname, Price, Quantity, SoldQuantity) {
        return this.productRepo.update(id, { ProductName: Productname, Price: Price, Quantity: Quantity, SoldQuantity: SoldQuantity });
    }
    updateOne(id, mydto) {
        return this.productRepo.update(id, mydto);
    }
    findbyProductname(qry) {
        return this.productRepo.find({ where: { ProductName: qry } });
    }
    findbySellername(seller) {
        return this.productRepo.find({ where: { Sellername: seller } });
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(seller_entity_1.SellerEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(product_entity_1.ProductEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map