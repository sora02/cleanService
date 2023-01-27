import { model } from "mongoose";
import { FreeSchema } from "../schema/free-schema";

const Free = model("frees", FreeSchema);

export class FreeModel {
    async create(freeInfo) {
        const free = await Free.create(freeInfo);
        return free;
    }
}

const freeModel = new FreeModel();
export { freeModel };