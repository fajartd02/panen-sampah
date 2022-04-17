import { Users } from "../models/UserModel.js";
import bcrypt from 'bcrypt';

export class Auth {
    async register(req, res) {
        const { name, email, password, confPassword } = req.body;
        if(password !== confPassword) {
            return res.status(400)
                      .json({msg: "Password dan Confirm Password tidak match."});
        }

        const valid = await Users.findOne({ where: {email} });
        if(valid !== null) {
            return res.status(400)
                      .json({msg: "Email sudah tersedia"});
        }

        const saltRound = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(password, saltRound);

        try { 
            await Users.create({
                name: name,
                password: hashPassword,
                email: email
            });
            res.status(200).json({msg: "Berhasil mendaftar akun"});

        } catch(err) {
            console.log(err);
            res.send({msg: "Error internal db"});
        }
    }
    
    async login(req, res) {
        res.send({
            "msg": "login"
        });
    }

    async logout(req, res) {
        res.send({
            "msg": "logout"
        });
    }
}