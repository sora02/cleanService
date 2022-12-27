import { Schema } from "mongoose";

const ProductSchema = new Schema(
  {
    name: {
        type: String,
    },
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: "categories",
    },
    price: {
        type: Number,
    },
    shortDesc: {
        type: String,
    },
    longDesc: {
        type: String,
    },
    imageKey: {
        tyep: String,
    }
  },
  {
    collection: "products",
    timestamps: true,
  }
);

export { ProductSchema };