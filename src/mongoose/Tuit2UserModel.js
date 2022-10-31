/**
 * @file Implements mongoose model to CRUD
 * documents in the Tuit2User collection
 */
import mongoose from "mongoose";
import Tuit2UserSchema from "./Tuit2UserSchema";
const Tuit2UserModel = mongoose.model('Tuit2UserModel', Tuit2UserSchema);
export default Tuit2UserModel;
