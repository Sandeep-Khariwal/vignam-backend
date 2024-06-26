"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const content_1 = require("../controller/content");
const router = express_1.default.Router();
router.route("/addContent").post(content_1.createContent);
router.route("/getContent").get(content_1.getAllContent);
exports.default = router;
