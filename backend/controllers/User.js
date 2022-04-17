import { Users } from "../models/UserModel.js";

export class User {
    async getUsers(req, res) {
        try {
            const users = await Users.findAll({
                attributes: ['id', 'name', 'email']
            })

            res.json(users);
        } catch(err) {
            console.log(err);
            res.status(500).json({msg: "Internal server error"});
        }
    }
}