"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
exports.pool = new pg_1.Pool({
    user: 'postgres',
    host: 'localhost',
    password: '216053099',
    database: 'tscapi',
    port: 5432
});
