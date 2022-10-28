import Message from "../models/Message";
import MessageModel from "../mongoose/MessageModel";
import MessageDaoI from "../interfaces/MessageDaoI";

export default class MessageDao implements MessageDaoI {
    private static messageDao: MessageDao | null = null
    public static getInstance = (): MessageDao => {
        if (MessageDao.messageDao === null) {
            MessageDao.messageDao = new MessageDao()
        }
        return MessageDao.messageDao
    }

    async findAllReceivedMessages(uid: string): Promise<Message[]> {
        return await MessageModel.find({ to: uid })
    }
    async findAllSentMessages(uid: string): Promise<Message[]> {
        return await MessageModel.find({ from: uid })
    }
    async sendMessage(uidSender: string, uidReceiver: string, message: string): Promise<Message> {
        return await MessageModel.create({ from: uidSender, to: uidReceiver, message: message })
    }
    async deleteMessage(uidSender: string, uidReceiver: string, message: string): Promise<any> {
        return await MessageModel.deleteOne({ from: uidSender, to: uidReceiver, message: message })
    }
}
