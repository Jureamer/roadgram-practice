"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
const config = require("config");
const dbConfig = config.get('db');
exports.typeOrmConfig = {
    type: 'mysql',
    host: process.env.DATABASE_HOST || dbConfig.host,
    port: parseInt(process.env.DATABASE_PORT || dbConfig.port),
    username: process.env.DATABASE_USERNAME || dbConfig.user,
    password: process.env.DATABASE_PASSWORD || dbConfig.password,
    database: 'roadgram',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true,
};
//# sourceMappingURL=typeorm.config.js.map