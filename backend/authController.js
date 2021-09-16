import Auth from './auth.js';
import Hashing from './hash.js';
import generateJWT from './token.js';
import * as jwt from 'jsonwebtoken'

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
            newUser.password = Hashing(newUser.password)
            const reg = await Auth.create(newUser);
            res.json(reg.login)
        } catch (e) {
            res.status(500).json({ success: false, msg: "Пользователь не был добавлен" })
        }
    }
    async getOne(req, res) {
        try {
            let authUser = {
                login: req.body.login,
                password: req.body.password
            }            
            const auth = await Auth.findOne({login: authUser.login})
            const pass = Hashing(authUser.password)
            if(!auth){
                res.status(400).json({ message: 'пользователь не найден' })
            } else {
                if(pass === auth.password){
                    const token = generateJWT(authUser);
                    res.json({ login: auth.login, token: token}); 
                } else{
                res.status(400).json({ message: 'Не верный пароль' })
                }
            }
        } catch (e) {
            res.status(500).json(e)
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