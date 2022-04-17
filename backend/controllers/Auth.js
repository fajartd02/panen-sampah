import { Users } from "../models/UserModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

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
        try {
            const user = await Users.findOne({ where:{ email: req.body.email } });
            const match = bcrypt.compare(req.body.password, user.password);
            if(!match) res.status(500).json({msg: "Password tidak sesuai!"});

            const { id: userId, name, email } = user;
            const accessToken = jwt.sign({userId, name, email}, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: '30s'
            });
            const refreshToken = jwt.sign({userId, name, email}, process.env.REFRESH_TOKEN_SECRET, {
                expiresIn: '1d'
            });

            await Users.update({refresh_token: refreshToken}, {
                where: {
                    id: userId
                }
            });

            res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
                maxAge: 24 * 3600 * 1000 // this mean 1 day
            });

            res.json({ accessToken });
        } catch(err) {
            res.status(404).json({msg: "Email tidak ditemukan!"});
        }
    }

    async logout(req, res) {
        res.send({
            "msg": "logout"
        });
    }
}