import express from 'express';
import { JwtAuthentication } from '../../config/passport';
import { AuthController } from '../auth';

const router = express.Router();

router.post('/', AuthController.signIn);
router.get('/me', JwtAuthentication, AuthController.me);

export default router;
