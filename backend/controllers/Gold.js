import { Users } from "../models/UserModel.js";


export const changeGold = async(req, res) => {
    try{
        const { total } = req.body;
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
        let { id: userId, emas } = user;

        if(emas === null) emas = 0;

        let totalChange = (total * 0.025);
        totalChange += parseFloat(emas);

        await Users.update({emas: totalChange}, {
            where: {
                id: userId
            }
        });
        res.json({msg: "Berhasil tukar!"});

    } catch(err) {
        console.log(err);
    }
    
}