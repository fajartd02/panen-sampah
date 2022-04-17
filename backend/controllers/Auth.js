export class Auth {
    async login(req, res) {
        res.send({
            "msg": "login"
        });
    }

    async register(req, res) {
        res.send({
            "msg": "register"
        });
    }

    async logout(req, res) {
        res.send({
            "msg": "logout"
        });
    }
}