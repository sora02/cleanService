import { model } from "mongoose";
import { ProductSchema } from "../schema/product-schema";

const Product = model("products", ProductSchema);

export class ProductModel {
    async findByTitle(name) {
        const product = await Product.findOne({ name });
        return product;
      }
    async create(pruductInfo) {
      const product = await Product.create(pruductInfo);
      return product;
    }
    async updateById({ productId, updateInfo }) {
      const filter = { _id: productId };
      const option = { returnOriginal: false }; 
      const newProduct = await Product.findOneAndUpdate(filter, updateInfo, option);
      return newProduct;
    }
    async deleteById(productId) {
      const result = await Product.deleteOne({ _id: productId });
      return result;
    }
    async findById(productId) {
      const result = await Product.findOne({ _id: productId });
      return result;
    }
    async findAll() {
      const allProduct = await Product.find({});
      return allProduct;
    }
    async findByAllCategoryId(categoryId) {
      const result = await Product.find({ categoryId });
      return result;
    }
}

const productModel = new ProductModel();
  
export { productModel };
