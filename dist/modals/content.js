"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const textSchema = new mongoose_1.default.Schema({
    textContent: {
        type: [String],
        default: [],
    },
}, { timestamps: true });
const Content = mongoose_1.default.model('Content', textSchema);
exports.default = Content;
