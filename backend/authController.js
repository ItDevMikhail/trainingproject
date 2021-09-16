import Auth from './auth.js';
import bcrypt from 'bcryptjs';

class AuthController {
    async reg(req, res) {
        try {
            const { login, email, password } = req.body
            const reg = await Auth.create({ login, email, password })
            res.json(reg)
        } catch (e) {
            res.status(500).json({ success: false, msg: "Пользователь не был добавлен" })
        }
    }
    async create(req, res) {
        try {
            let newUser = {
                login: req.body.login,
                email: req.body.email,
                password: req.body.password,
            }
            bcrypt.genSalt(10, function (err, salt) {
                bcrypt.hash("B4c0/\/", salt, function (err, hash) {
                    newUser.password = hash;
                });
            })
            const req = await Auth.create();
            res.json(reg)
        } catch (e) {
            res.status(500).json({ success: false, msg: "Пользователь не был добавлен" })
        }
    }
    async getAll(req, res) {
        try {
            const auth = await Auth.find();
            return res.json(auth);
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getOne(req, res) {
        try {
            const { id } = req.params
            if (!id) {
                res.status(400).json({ message: 'Id не указан' })
            }
            const auth = await Auth.findById(id);
            return res.json(auth);
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async update(req, res) {
        try {
            const auth = req.body
            if (!auth._id) {
                res.status(400).json({ message: 'Id не указан' })
            }
            const updateauth = await Auth.findByIdAndUpdate(auth._id, auth, { new: true })
            return res.json(updateauth)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async detele(req, res) {
        try {
            const { id } = req.params
            if (!id) {
                res.status(400).json({ message: 'Id не указан' })
            }
            const deleteauth = await Auth.findByIdAndDelete(id)
            return res.json(deleteauth)

        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new AuthController();