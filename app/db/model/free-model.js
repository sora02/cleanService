import { model } from "mongoose";
import { FreeSchema } from "../schema/free-schema";

const Free = model("frees", FreeSchema);

export class FreeModel {
    async create(freeInfo) {
        const free = await Free.create(freeInfo);
        return free;
    }
    async findAll() {
        const All = await Free.find({});
        return All;
    }
    async findById(orderId) {
        const result = await Free.findOne({ _id: orderId });
        return result;
    }
    async delete(orderId) {
        const result = await Free.deleteOne({ _id: orderId });
        return result;
    }
    async update({ orderId, update }) {
        const filter = { _id: orderId };
        const option = { returnOriginal: false }; 
        const result = await Free.findOneAndUpdate(filter, update, option);
        return result;
    }
}

const freeModel = new FreeModel();
export { freeModel };