import Router from "express";
import AuthController from "./authController.js";

const router = new Router()

router.post('/reg', AuthController.reg)
router.get('/api/:id', AuthController.getOne)
router.put('/api', AuthController.update)
router.delete('/api/:id', AuthController.detele)

export default router;