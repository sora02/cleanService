import { userModel } from "../db/model/user-model";
import bcrypt from "bcrypt";

class UserService {
    constructor(userModel) {
        this.userModel = userModel;
      }

    async addUser(userInfo) {
        const { email, nickName, fullName, password } = userInfo;

        const user = await this.userModel.findByEmail(email);
        if(user) {
            throw new Error(
                "이 이메일은 이미 사용 중입니다. 다른 이메일을 입력하세요."
            )
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUserInfo = { email, nickName, fullName, password: hashedPassword };

        const createdNewUser = await this.userModel.create(newUserInfo);

        return createdNewUser;
    }
    
}