"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllContent = exports.createContent = void 0;
const content_1 = __importDefault(require("../modals/content")); // Adjust the path as needed
// Create a new content document
const createContent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { textContent } = req.body;
        let textArray = yield content_1.default.findOne();
        if (!textArray) {
            const newContent = new content_1.default({ textContent: [textContent] });
            const data = yield newContent.save();
            res.status(201).json({ success: true, message: "Text Added", textArray: data });
        }
        else {
            textArray.textContent.push(textContent);
            const data = yield textArray.save();
            res.status(200).json({ success: true, message: "Text Added", textArray: data });
        }
    }
    catch (error) {
        res.status(500).json({ success: false, message: 'Error creating content', error });
    }
});
exports.createContent = createContent;
// Get all content documents
const getAllContent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const contents = yield content_1.default.findOne();
        res.status(200).json({ success: true, textArray: contents });
    }
    catch (error) {
        res.status(500).json({ success: false, message: 'Error retrieving contents', error });
    }
});
exports.getAllContent = getAllContent;
