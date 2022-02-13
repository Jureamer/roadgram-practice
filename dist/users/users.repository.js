"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const users_entity_1 = require("./users.entity");
let UsersRepository = class UsersRepository extends typeorm_1.Repository {
    async createUser(userInfo) {
        const result = await users_entity_1.Users.save(userInfo);
        if (!result) {
            throw new common_1.NotAcceptableException(`email ${userInfo.email} is duplicated. Please change email`);
        }
        return result;
    }
    async searchUserWithEmail(email) {
        const user = await users_entity_1.Users.findOne({ where: { email } });
        console.log("user", user);
        if (user) {
            throw new common_1.NotAcceptableException("Email you filled up is already existed");
        }
        else {
            return false;
        }
    }
    async searchUserWithId(id) {
        const user = await users_entity_1.Users.findOne({ where: { id } });
        console.log("user", user);
        if (!user) {
            throw new common_1.NotAcceptableException("user can't be deleted");
        }
        else {
            return true;
        }
    }
    async deleteUser(id) {
        const result = await users_entity_1.Users.delete(id);
        console.log(result);
    }
};
UsersRepository = __decorate([
    (0, typeorm_1.EntityRepository)(users_entity_1.Users)
], UsersRepository);
exports.UsersRepository = UsersRepository;
//# sourceMappingURL=users.repository.js.map