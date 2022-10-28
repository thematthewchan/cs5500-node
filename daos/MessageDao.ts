/**
 * @file Implements DAO managing data storage of messages. Uses mongoose MessageModel
 * to integrate with MongoDB
 */
import Message from "../models/Message";
import MessageModel from "../mongoose/MessageModel";
import MessageDaoI from "../interfaces/MessageDaoI";

/**
 * @class MessageDao Implements Data Access Object managing data storage
 * of Messages
 */
export default class MessageDao implements MessageDaoI {
    private static messageDao: MessageDao | null = null
    public static getInstance = (): MessageDao => {
        if (MessageDao.messageDao === null) {
            MessageDao.messageDao = new MessageDao()
        }
        return MessageDao.messageDao
    }

    /**
     * Uses MessageModel to retrieve all message documents received by user from messages collection
     * @param {string} uid User's primary key
     * @returns Promise To be notified when messages are retrieved from the database
     */
    async findAllReceivedMessages(uid: string): Promise<Message[]> {
        return await MessageModel.find({ to: uid })
    }

    /**
     * Uses MessageModel to retrieve all message documents sent by user from messages collection
     * @param {string} uid User's primary key
     * @returns Promise To be notified when messages are retrieved from the database
     */
    async findAllSentMessages(uid: string): Promise<Message[]> {
        return await MessageModel.find({ from: uid })
    }

    /**
     * Inserts message instance into the database
     * @param {string} uidSender Primary key of user sending message
     * @param {string} uidReceiver Primary key of user receiving message
     * @param {string} message Message being sent
     * @returns Promise To be notified when message is inserted into the database
     */
    async sendMessage(uidSender: string, uidReceiver: string, message: string): Promise<Message> {
        return await MessageModel.create({ from: uidSender, to: uidReceiver, message: message })
    }

    /**
     * Removes message instance into the database
     * @param {string} uidSender Primary key of user deleting message
     * @param {string} uidReceiver Primary key of user receiving deleted message
     * @param {string} message Message being deleted
     * @returns Promise To be notified when message is removed from the database
     */
    async deleteMessage(uidSender: string, uidReceiver: string, message: string): Promise<any> {
        return await MessageModel.deleteOne({ from: uidSender, to: uidReceiver, message: message })
    }
}
