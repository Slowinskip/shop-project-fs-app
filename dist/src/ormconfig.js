"use strict";
const dotenv = require("dotenv");
dotenv.config();
module.exports = {
    type: 'mysql',
    host: 'sql.freedb.tech',
    port: 3306,
    username: 'freedb_fs_ShoesShop_user',
    password: 'Nfb3WA#BM*c885E',
    database: 'freedb_fs_ShoesShop_db',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
};
//# sourceMappingURL=ormconfig.js.map