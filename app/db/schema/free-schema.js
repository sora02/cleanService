import { Schema } from "mongoose";

const FreeSchema = new Schema(
    {
        date: {
            type: String,
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
        },
        name: {
            type: String,
        },
        space: {
            type: String,
        },
        typeOfLiving: {
            type: String,
        },
        phoneNum: {
            type: String,
        }
    }, 
    {
        collection: 'free',
        timestamps: true,
    }
);

export { FreeSchema };