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

    async getUsersInfo(req, res) {
        try {
            const { id } = req.params;
            const user = await Users.findOne({
                where:{
                    id: id
                }
            });
            res.json(user);
        } catch(err) {
            console.log(err);
            res.status(500).json({msg: "error internal"});
        }
    }
}