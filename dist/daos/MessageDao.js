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
const MessageModel_1 = __importDefault(require("../mongoose/MessageModel"));
/**
 * @class MessageDao Implements Data Access Object managing data storage
 * of Messages
 */
class MessageDao {
    /**
     * Uses MessageModel to retrieve all message documents received by user from messages collection
     * @param {string} uid User's primary key
     * @returns Promise To be notified when messages are retrieved from the database
     */
    findAllReceivedMessages(uid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield MessageModel_1.default.find({ to: uid });
        });
    }
    /**
     * Uses MessageModel to retrieve all message documents sent by user from messages collection
     * @param {string} uid User's primary key
     * @returns Promise To be notified when messages are retrieved from the database
     */
    findAllSentMessages(uid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield MessageModel_1.default.find({ from: uid });
        });
    }
    /**
     * Inserts message instance into the database
     * @param {string} uidSender Primary key of user sending message
     * @param {string} uidReceiver Primary key of user receiving message
     * @param {string} message Message being sent
     * @returns Promise To be notified when message is inserted into the database
     */
    sendMessage(uidSender, uidReceiver, message) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield MessageModel_1.default.create({ from: uidSender, to: uidReceiver, message: message });
        });
    }
    /**
     * Removes message instance into the database
     * @param {string} uidSender Primary key of user deleting message
     * @param {string} uidReceiver Primary key of user receiving deleted message
     * @param {string} message Message being deleted
     * @returns Promise To be notified when message is removed from the database
     */
    deleteMessage(uidSender, uidReceiver, message) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield MessageModel_1.default.deleteOne({ from: uidSender, to: uidReceiver, message: message });
        });
    }
}
exports.default = MessageDao;
MessageDao.messageDao = null;
MessageDao.getInstance = () => {
    if (MessageDao.messageDao === null) {
        MessageDao.messageDao = new MessageDao();
    }
    return MessageDao.messageDao;
};
//# sourceMappingURL=MessageDao.js.map