var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import MessageModel from "../mongoose/MessageModel";
/**
 * @class MessageDao Implements Data Access Object managing data storage
 * of Messages
 */
export default class MessageDao {
    /**
     * Uses MessageModel to retrieve all message documents received by user from messages collection
     * @param {string} uid User's primary key
     * @returns Promise To be notified when messages are retrieved from the database
     */
    findAllReceivedMessages(uid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield MessageModel.find({ to: uid });
        });
    }
    /**
     * Uses MessageModel to retrieve all message documents sent by user from messages collection
     * @param {string} uid User's primary key
     * @returns Promise To be notified when messages are retrieved from the database
     */
    findAllSentMessages(uid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield MessageModel.find({ from: uid });
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
            return yield MessageModel.create({ from: uidSender, to: uidReceiver, message: message });
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
            return yield MessageModel.deleteOne({ from: uidSender, to: uidReceiver, message: message });
        });
    }
}
MessageDao.messageDao = null;
MessageDao.getInstance = () => {
    if (MessageDao.messageDao === null) {
        MessageDao.messageDao = new MessageDao();
    }
    return MessageDao.messageDao;
};
