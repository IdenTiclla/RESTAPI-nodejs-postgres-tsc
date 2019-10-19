"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database");
exports.getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield database_1.pool.query('SELECT * FROM users');
        return res.status(200).json(response.rows);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error');
    }
});
exports.getUserbyId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.params.id);
    const id = parseInt(req.params.id);
    const response = yield database_1.pool.query('SELECT * FROM users WHERE id = $1', [id]);
    return res.json(response.rows);
});
exports.createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email } = req.body;
    const response = yield database_1.pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email]);
    return res.json({
        message: "User created Successfully",
        body: {
            user: {
                name,
                email
            }
        }
    });
});
exports.updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const { name, email } = req.body;
    const response = yield database_1.pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [name, email, id]);
    return res.json(`user ${id} updated successfully`);
});
exports.deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const response = yield database_1.pool.query('DELETE FROM users WHERE id = $1', [id]);
    return res.json(`user ${id} deleted successfully`);
});
