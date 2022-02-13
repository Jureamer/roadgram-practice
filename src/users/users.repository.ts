import { NotAcceptableException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { Users } from "./users.entity";

@EntityRepository(Users)
export class UsersRepository extends Repository<Users> {
  async createUser(userInfo) {
    const result = await Users.save(userInfo);
    if(!result) {
      throw new NotAcceptableException(`email ${userInfo.email} is duplicated. Please change email`)
    }
    return result
  }

  async searchUserWithEmail(email) {
    const user = await Users.findOne({where: {email}});
    console.log("user", user);
    if(user) {
      throw new NotAcceptableException("Email you filled up is already existed");
    } else {
      return false;
    }
  }

  async searchUserWithId(id) {
    const user = await Users.findOne({where: {id}});
    console.log("user", user);
    if(!user) {
      throw new NotAcceptableException("user can't be deleted");
    } else {
      return true
    }
  }

  async deleteUser(id) {
    const result = await Users.delete(id);
    console.log(result);
  }
}
