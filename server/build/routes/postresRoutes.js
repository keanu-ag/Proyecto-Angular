"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const postresController_1 = __importDefault(require("../controllers/postresController"));
class PostresRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', postresController_1.default.list);
        this.router.get('/:id', postresController_1.default.getOne);
        this.router.post('/', postresController_1.default.create);
        this.router.delete('/:id', postresController_1.default.delete);
        this.router.put('/:id', postresController_1.default.update);
    }
}
const postresRoutes = new PostresRoutes();
exports.default = postresRoutes.router;
