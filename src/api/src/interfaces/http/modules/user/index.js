import {Router} from 'express';

export default function createUserRouter() {
  const router = Router();

  /**
   * @swagger
   * definitions:
   *   user:
   *     properties:
   *       id:
   *         type: string
   *         format: uuid
   *       firstName:
   *         type: string
   *       lastName:
   *         type: string
   *       middleName:
   *         type: string
   *       email:
   *         type: string
   *       roleId:
   *         type: number
   *       isDeleted:
   *         type: number
   *       createdBy:
   *         type: string
   *         format: uuid
   */

  /**
   * @swagger
   * /users:
   *   get:
   *     tags:
   *       - Users
   *     description: Returns a list of users
   *     security:
   *       - JWT: []
   *     responses:
   *       200:
   *         description: An array of users
   *         schema:
   *           type: array
   *           items:
   *             $ref: '#/definitions/user'
   *       401:
   *        $ref: '#/responses/Unauthorized'
   */
  router.get('/', (request, response) => {
    response.json({
      message: 'User index goes here',
    });
  });

  return router;
}
