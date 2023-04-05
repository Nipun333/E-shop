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
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const product_dto_1 = require("./product.dto");
const product_guard_1 = require("./product.guard");
const product_service_1 = require("./product.service");
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    Addproduct(mydto, file) {
        mydto.filename = file.filename;
        return this.productService.add(mydto);
    }
    getAll() {
        return this.productService.getAll();
    }
    searchByName(ProductName) {
        return this.productService.searchByName(ProductName);
    }
    productAdd(Pname, price, quantity) {
        return this.productService.productAdd(Pname, price, quantity);
    }
    deleteModeratorById(id) {
        return this.productService.deleteProduct(id);
    }
    updateProduct(id, Productname, Price, Quantity, SoldQuantity) {
        return this.productService.updateProduct(id, Productname, Price, Quantity, SoldQuantity);
    }
    updateAddress(id, mydto) {
        return this.productService.updateOne(id, mydto);
    }
    findbyProductname(qry) {
        return this.productService.findbyProductname(qry);
    }
    findbySellername(seller) {
        return this.productService.findbySellername(seller);
    }
    signout(session) {
        if (session.destroy()) {
            session.cookie.destroy;
            return { message: "successfully logged out" };
        }
        else {
            throw new common_1.UnauthorizedException("invalid actions");
        }
    }
};
__decorate([
    (0, common_1.Post)('/add'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', { storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: function (req, file, cb) {
                cb(null, Date.now() + "-" + file.originalname);
            }
        })
    })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)(new common_1.ParseFilePipe({
        validators: [
            new common_1.MaxFileSizeValidator({ maxSize: 1500000 }),
            new common_1.FileTypeValidator({ fileType: 'png|jpg|jpeg|' }),
        ],
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_dto_1.ProductDTO, Object]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "Addproduct", null);
__decorate([
    (0, common_1.Get)('/getAll'),
    (0, common_1.UseGuards)(product_guard_1.SessionGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], ProductController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)("search/:ProductName"),
    (0, common_1.UseGuards)(product_guard_1.SessionGuard),
    __param(0, (0, common_1.Param)('ProductName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "searchByName", null);
__decorate([
    (0, common_1.Post)("/insertproduct"),
    (0, common_1.UseGuards)(product_guard_1.SessionGuard),
    __param(0, (0, common_1.Body)("Productname")),
    __param(1, (0, common_1.Body)("Price")),
    __param(2, (0, common_1.Body)("Quantity")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number]),
    __metadata("design:returntype", Object)
], ProductController.prototype, "productAdd", null);
__decorate([
    (0, common_1.Delete)('delete/:Id'),
    (0, common_1.UseGuards)(product_guard_1.SessionGuard),
    __param(0, (0, common_1.Param)('Id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], ProductController.prototype, "deleteModeratorById", null);
__decorate([
    (0, common_1.Put)("/updateProduct"),
    (0, common_1.UseGuards)(product_guard_1.SessionGuard),
    __param(0, (0, common_1.Body)("Id", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)("Productname")),
    __param(2, (0, common_1.Body)("Price")),
    __param(3, (0, common_1.Body)("Quantity")),
    __param(4, (0, common_1.Body)("SoldQuantity")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, Number, Number, Number]),
    __metadata("design:returntype", Object)
], ProductController.prototype, "updateProduct", null);
__decorate([
    (0, common_1.Patch)("/updateProduct/:Id"),
    (0, common_1.UseGuards)(product_guard_1.SessionGuard),
    __param(0, (0, common_1.Param)("Id", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, product_dto_1.ProductDTO]),
    __metadata("design:returntype", String)
], ProductController.prototype, "updateAddress", null);
__decorate([
    (0, common_1.Get)("search/findbyProductname"),
    (0, common_1.UseGuards)(product_guard_1.SessionGuard),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], ProductController.prototype, "findbyProductname", null);
__decorate([
    (0, common_1.Get)("/:Sellername"),
    (0, common_1.UseGuards)(product_guard_1.SessionGuard),
    __param(0, (0, common_1.Param)("Sellername")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], ProductController.prototype, "findbySellername", null);
__decorate([
    (0, common_1.Get)('/logout'),
    __param(0, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "signout", null);
ProductController = __decorate([
    (0, common_1.Controller)('/Product'),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map