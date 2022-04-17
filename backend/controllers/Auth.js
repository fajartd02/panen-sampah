export class Auth {
    async register(req, res) {
        res.send({
            "msg": "register"
        });
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