import jwt from 'jsonwebtoken';
import { Carts } from '../models/CartModel.js';
import { Users } from '../models/UserModel.js';

export const addCarts = async (req, res) => {
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
        const { id: userId, name } = user;
        const { plastic, skincare, kaca } = req.body;

        const stats = "unsolved";
        await Carts.create({
            buyer_id: userId,
            buyer_name: name,
            plastic: plastic,
            skincare: skincare,
            kaca: kaca,
            status: stats
        });
        res.status(200).json({msg: "Berhasil checkout barang!"});


    } catch(err) {
        console.log(err);
    }
}

export const solvedCarts = async (req, res) => {
    try {
        // kaca = 10000
        // plastik = 5000
        // skincare = 15000
        const { id } = req.params;
        const cart = await Carts.findOne({where: {id: id}});
        const { buyer_id, kaca, plastic, skincare, status } = cart;

        if(status === 'solved') return res.sendStatus(200).json({msg: "Sudah pernah disolved"});

        const user = await Users.findOne({ where: {id: buyer_id} });
        let totalMoney = 0;
        if(kaca !== 0) {
            totalMoney = totalMoney + (kaca * 10000);
        }

        if(plastic !== 0) {
            totalMoney = totalMoney + (plastic * 5000);
        }

        if(skincare !== 0) {
            totalMoney = totalMoney + (skincare * 15000);
        }

        const { money } = user;
        const total = totalMoney + parseFloat(money); 
        await Users.update({ money: total }, {
            where:{
                id: buyer_id
            }
        });

        await Carts.update({status: "solved"}, {
            where: {
                id: id
            }
        })

        res.status(200).json({msg: "Berhasil menukar dengan uang!"});

    } catch(err) {
        console.log(err);
    }
}

export const viewCarts = async (req, res) => {
    try {

        const carts = await Carts.findAll({
            attributes: ['id', 'buyer_id', 'kaca', 'plastic', 'skincare', 'status']
        });


        res.json(carts);

    } catch(err) {
        console.log(err);
    }
}