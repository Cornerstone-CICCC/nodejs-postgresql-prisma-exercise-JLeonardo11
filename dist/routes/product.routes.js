"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = __importDefault(require("../controllers/product.controller"));
const ProductRouter = (0, express_1.Router)();
ProductRouter.get('/', product_controller_1.default.getAllProducts);
ProductRouter.get('/:id', product_controller_1.default.getProductById);
ProductRouter.post('/', product_controller_1.default.addProduct);
ProductRouter.put('/:id', product_controller_1.default.updateProductById);
ProductRouter.delete('/:id', product_controller_1.default.deleteProductById);
exports.default = ProductRouter;
