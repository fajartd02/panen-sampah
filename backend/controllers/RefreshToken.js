import jwt from 'jsonwebtoken';
import { Users } from '../models/UserModel.js';

export const refreshToken = async(req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        if(!refreshToken) res.sendStatus(401);

        const user = await Users.findOne({
            where: {
                refresh_token: refreshToken
            }
        });

        if(!user) {
            return res.sendStatus(403);
        }
        const { id: userId, name, email } = user;

        const accessToken = jwt.sign({ userId, name, email }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '30s'
        });

        res.json({accessToken});
    } catch(err) {
        console.log(err);
    }
}