"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @file Implements mongoose model to CRUD
 * documents in the Tuit2User collection
 */
const mongoose_1 = __importDefault(require("mongoose"));
const Tuit2UserSchema_1 = __importDefault(require("./Tuit2UserSchema"));
const Tuit2UserModel = mongoose_1.default.model('Tuit2UserModel', Tuit2UserSchema_1.default);
exports.default = Tuit2UserModel;
//# sourceMappingURL=Tuit2UserModel.js.map