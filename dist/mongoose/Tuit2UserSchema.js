"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @file Implements mongoose schema to CRUD
 * documents in the Tuit2User collection
 */
const mongoose_1 = __importDefault(require("mongoose"));
const tuit2UserSchema = new mongoose_1.default.Schema({
    tuit: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'TuitModel'
    },
    user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'UserModel'
    },
}, { collection: 'tuit2user' });
exports.default = tuit2UserSchema;
//# sourceMappingURL=Tuit2UserSchema.js.map