import { categoryModel, productModel } from "../db";

class CategoryService {
  constructor(categoryModel, productModel) {
    this.categoryModel = categoryModel;
    this.productModel = productModel;
  }

  async addCategory(categoryInfo) {
    const { title } = categoryInfo;

    const category = await this.categoryModel.findByTitle(title);
    if (category) {
      throw new Error(
        "이 이름은 현재 사용중입니다. 다른 이름을 입력해 주세요."
      );
    }

    const createdNewCategory = await this.categoryModel.create(categoryInfo);

    return createdNewCategory;
  }

  async getCategorys() {
    const categorys = await this.categoryModel.findAll();
    return categorys;
  }

  async setCategory(categoryId, toUpdate) {
    const updatedCategory = await this.categoryModel.update({
      categoryId,
      update: toUpdate,
    });

    return updatedCategory;
  }

  async getCategoryDataById(categoryId) {
    const category = await this.categoryModel.findById(categoryId);

    if (!category) {
      throw new Error(
        "해당 id의 카테고리는 없습니다. 다시 한 번 확인해 주세요."
      );
    }

    return category;
  }

  async getCategoryDataByTitle(categoryTitle) {
    const category = await this.categoryModel.findByTitle(categoryTitle);

    if (!category) {
      throw new Error(
        "해당 이름의 카테고리는 없습니다. 다시 한 번 확인해 주세요."
      );
    }

    return category;
  }

  async deleteCategoryData(categoryId) {
    const product = await this.productModel.findOneByCategoryId(categoryId);

    if (product) {
      throw new Error(
        `${categoryId} 카테고리에 등록된 제품이 있습니다. 등록된 제품이 없어야 카테고리 삭제가 가능합니다. `
      );
    }

    const { deletedCount } = await this.categoryModel.deleteById(categoryId);

    if (deletedCount === 0) {
      throw new Error(`${categoryId} 카테고리의 삭제에 실패하였습니다`);
    }

    return { result: "success" };
  }
}

const categoryService = new CategoryService(categoryModel, productModel);

export { categoryService };
