import { model } from "mongoose";
import { OrderSchema } from "../schema/order-schema";

const Order = model("orders", OrderSchema);

export class OrderModel {
    async create(orderInfo) {
        const order = await Order.create(orderInfo);
        return order;
    }
    async findAll() {
        const All = await Order.find({});
        return All;
    }
    async findById(orderId) {
        const result = await Order.findOne({ _id: orderId });
        return result;
    }
    async delete(orderId) {
        const result = await Order.deleteOne({ _id: orderId });
        return result;
    }
    async update({ orderId, update }) {
        const filter = { _id: orderId };
        const option = { returnOriginal: false }; 
        const result = await Order.findOneAndUpdate(filter, update, option);
        return result;
    }
}

const orderModel = new OrderModel();
export { orderModel };