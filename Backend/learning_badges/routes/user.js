import express from 'express';
import { JwtAuthentication } from '../../config/passport';
import { UserController } from '../user';

const router = express.Router();

/**
 * @api {post} /users/login
 * @apiDescription Request an User (NAP) Register
 *
 * Process request:
 *
 * @apiParam {String} param [description]
 *
 * @apiSuccessExmple {json} Success-Response:
 * HTTP/1.1 201 Created
 * Response
 *
 * @apiError error [description]
 * @apiErrorExample {json} Error
 * HTTP/1.1 [code] [code_message]
 * Response
 *
 * @apiName Users
 * @apiGroup Users
 *
 * @apiVersion 0.0.1
 *
 */
router.post('/', UserController.signUp);

router.get('/', JwtAuthentication, UserController.get);

router.get('/:userId', JwtAuthentication, UserController.getById);

router.put('/:userId', JwtAuthentication, UserController.update);

router.patch('/:userId', JwtAuthentication, UserController.update);

export default router;
