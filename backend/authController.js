import Auth from './auth.js';

class AuthController{
    async create(req, res){
        try {
            const { login, password } = req.body
            const auth = await Auth.create({ login, password })
            res.json(auth)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getAll(req,res){
        try{
            const auth = await Auth.find();
            return res.json(auth);
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getOne(req,res){
        try{
            const {id} = req.params
            if(!id){
                res.status(400).json({message: 'Id не указан'})
            }
            const auth = await Auth.findById(id);
            return res.json(auth);
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async update(req,res){
        try{
            const auth = req.body
            if(!auth._id){
                res.status(400).json({message: 'Id не указан'})
            }
            const updateauth = await Auth.findByIdAndUpdate(auth._id, auth, { new: true})
            return res.json(updateauth)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async detele(req,res){
        try{
            const {id} = req.params
            if(!id){
                res.status(400).json({message: 'Id не указан'})
            }
            const deleteauth = await Auth.findByIdAndDelete(id)
            return res.json(deleteauth)

        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new AuthController();