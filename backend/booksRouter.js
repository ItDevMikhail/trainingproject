import Router from "express";
import BooksController from "./booksController.js";

const booksRouter = new Router()

booksRouter.post('/detail', BooksController.create)
booksRouter.get('/all', BooksController.getAll)
booksRouter.get('/detail/:id', BooksController.getOne)
booksRouter.put('/detail/:id', BooksController.update)
booksRouter.delete('/detail/:id', BooksController.detele)

export default booksRouter;