import Books from './books.js';

class BooksController{
    async create(req, res){
        try {
            const { id, name, description } = req.body
            const book = await Books.create({ id, name, description })
            res.json(book)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getAll(req,res){
        try{
            const book = await Books.find();
            return res.json(book);
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
            const book = await Books.findById(id);
            return res.json(book);
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async update(req,res){
        try{
            const book = req.body
            if(!book._id){
                res.status(400).json({message: 'Id не указан'})
            }
            const updatebook = await Books.findByIdAndUpdate(book._id, book, { new: true})
            return res.json(book)
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
            const deletebook = await Books.findByIdAndDelete(id)
            return res.json(deletebook)

        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new BooksController();