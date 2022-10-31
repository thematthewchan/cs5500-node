/**
 * @file Declares API for Follow related data access object methods
 */
import Message from "../models/Message";

export default interface MessageDaoI {
  findAllReceivedMessages(uid: string): Promise<Message[]>;
  findAllSentMessages(uid: string): Promise<Message[]>;
  sendMessage(uidSender: string, uidReceiver: string, message: string): Promise<Message>;
  deleteMessage(uidSender: string, uidReceiver: string, message: string): Promise<any>;
}
