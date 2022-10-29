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
const TuitModel_1 = __importDefault(require("../mongoose/TuitModel"));
/**
 * @class TuitDao Implements Data Access Object managing data storage
 * of Tuits
 */
class TuitDao {
    /**
     * Uses TuitModel to retrieve all tuit documents from tuits collection
     * @returns Promise To be notified when the tuits are retrieved from
     * database
     */
    findAllTuits() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield TuitModel_1.default.find();
        });
    }
    /**
     * Uses TuitModel to retrieve single tuit document from tuits collection
     * @param {string} uid User's primary key
     * @returns Promise To be notified when tuit is retrieved from the database
     */
    findTuitsByUser(uid) {
        return __awaiter(this, void 0, void 0, function* () {
            // return await TuitModel.findByUser(uid);
            // return await Tuit2UserModel.find(
            //     {tuit: 1},
            //     {user: uid,
            //     _id: 0}
            // )
            // .populate('tuits')
            return yield TuitModel_1.default.find({ postedBy: uid });
        });
    }
    /**
     * Uses TuitModel to retrieve single tuit document from tuits collection
     * @param {string} tid Tuit's primary key
     * @returns Promise To be notified when tuit is retrieved from the database
     */
    findTuitById(tid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield TuitModel_1.default.findById(tid);
        });
    }
    /**
     * Inserts tuit instance into the database
     * @param {Tuit} tuit Instance to be inserted into the database
     * @returns Promise To be notified when tuit is inserted into the database
     */
    createTuit(tuit) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield TuitModel_1.default.create(tuit);
        });
    }
    /**
     * Removes tuit from the database.
     * @param {string} tid Primary key of tuit to be removed
     * @returns Promise To be notified when tuit is removed from the database
     */
    deleteTuit(tid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield TuitModel_1.default.deleteOne({ _id: tid });
        });
    }
    /**
     * Updates tuit with new values in database
     * @param {string} tid Primary key of tuit to be modified
     * @param {Tuit} tuit Tuit object containing properties and their new values
     * @returns Promise To be notified when tuit is updated in the database
     */
    updateTuit(tid, tuit) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield TuitModel_1.default.updateOne({ _id: tid, $set: tuit });
        });
    }
}
exports.default = TuitDao;
//# sourceMappingURL=TuitDao.js.map