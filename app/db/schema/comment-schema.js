import { Schema } from "mongoose";

const CommentSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "user"
          },
        title: {
            type: String,
        },
        content: {
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