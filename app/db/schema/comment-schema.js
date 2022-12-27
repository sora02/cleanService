import { Schema } from "mongoose";

const CommentSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "user"
          },
        comment: {
            type: String,
        },
        imageKey: {
            type: String,
        }
    },
    {
        collection:'comment',
        timestamps: true,
    }
);

export { CommentSchema };