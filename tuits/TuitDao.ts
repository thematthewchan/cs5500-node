import TuitDaoI from "./TuitDaoI";
import Tuit from "./Tuit";
import tuitModel from "./TuitModel";
import User from "../users/User";

export default class TuitDao implements TuitDaoI {
    private static tuitDao: TuitDao | null = null;
    public static getInstance = (): TuitDao => {
        if (TuitDao.tuitDao === null) {
            TuitDao.tuitDao = new TuitDao();
        }
        return TuitDao.tuitDao;
    }
    private constructor() {}
    public async findTuitById(id: string):
        Promise<Tuit> {
        const tuitMongooseModel: any = await tuitModel
            .findById(id)
            .populate('postedBy').exec();
        console.log(tuitMongooseModel.postedBy)
        const author = new User(
            tuitMongooseModel.postedBy?._id??'',
            tuitMongooseModel.postedBy?.username??'',
            tuitMongooseModel.postedBy?.password??''
        );
        const tuit = new Tuit(
            tuitMongooseModel?._id.toString() ?? '',
            tuitMongooseModel?.tuit ?? '',
            new Date(tuitMongooseModel?.postedOn ?? (new Date())))
        tuit.author = author;
        return tuit;
    }
    public async findAllTuits(): Promise<Tuit[]> {
        const tuitMongooseModels =
            await tuitModel.find();
        const tuitModels = tuitMongooseModels
            .map((tuitMongooseModel) => {
                return new Tuit(
                    tuitMongooseModel?._id.toString() ?? '',
                    tuitMongooseModel?.tuit ?? '',
                    new Date(tuitMongooseModel?.postedOn ?? (new Date())))
            });
        return tuitModels;
    }
    public async findTuitsByAuthor(authorId: string):
        Promise<Tuit[]> {
        const tuitMongooseModels = await tuitModel
            .find({postedBy: authorId});
        const tuitModels = tuitMongooseModels
            .map((tuitMongooseModel) => {
                return new Tuit(
                    tuitMongooseModel?._id.toString() ?? '',
                    tuitMongooseModel?.tuit ?? '',
                    new Date(tuitMongooseModel?.postedOn ?? (new Date())))
            });
        return tuitModels;
    }
    public async createTuit(tuit: Tuit): Promise<Tuit> {
        const tuitMongooseModel = await tuitModel.create(tuit);
        return new Tuit(
            tuitMongooseModel?._id.toString() ?? '',
            tuitMongooseModel.tuit,
            new Date(tuitMongooseModel?.postedOn ?? (new Date()))
        )
    }
    public async deleteTuit(tuitId: string): Promise<any> {
        return await tuitModel.deleteOne({_id: tuitId});
    }
    public async updateTuit(tuitId: string, tuit: Tuit): Promise<any> {
        return tuitModel.updateOne(
            {_id: tuitId},
            {$set: {tuit: tuit.post}})
    }
}
