import { model } from "mongoose";
import { CommentSchema } from "../schema/comment-schema";

const Comment = model("comments", CommentSchema);

export class CommentModel {
    async create(commentInfo) {
        const comment = await Comment.create(commentInfo);
        return comment;
    }
    async findAll() {
        const All = await Comment.find({});
        return All;
    }
    async findById(orderId) {
        const result = await Comment.findOne({ _id: orderId });
        return result;
    }
    async delete(orderId) {
        const result = await Comment.deleteOne({ _id: orderId });
        return result;
    }
    async update({ orderId, update }) {
        const filter = { _id: orderId };
        const option = { returnOriginal: false }; 
        const result = await Comment.findOneAndUpdate(filter, update, option);
        return result;
    }

}

const commentModel = new CommentModel();
export { commentModel };