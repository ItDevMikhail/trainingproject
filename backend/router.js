import Router from "express";
import AuthController from "./authController.js";

const router = new Router()

router.post('/reg', AuthController.create)
router.post('/auth', AuthController.getOne)
router.put('/api', AuthController.update)
router.delete('/api/:id', AuthController.detele)

export default router;