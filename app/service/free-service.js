import { FreeModel } from "../db/model/free-model";

class FreeService {
    constructor(FreeModel) {
        this.FreeModel = FreeModel;
    }

    async addFreeForm(formInfo) {
        const createdFreeForm = await this.FreeModel.create(formInfo);

        return createdFreeForm;
    }
}

const freeService = new FreeService(FreeModel);

export { freeService };