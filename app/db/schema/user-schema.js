import { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    nickName: {
      type: String,
    },
    fullName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: false,
    },
    address: {
      type: new Schema(
        {
          addressinput: String,
          detailAddress: String,
        },
        {
          _id: false,
        }
      ),
      required: false,
    },
    role: {
      type: String,
      required: false,
      default: "basic-user",
    },
  },
  {
    collection: "users",
    timestamps: true,
  }
);

export { UserSchema };
