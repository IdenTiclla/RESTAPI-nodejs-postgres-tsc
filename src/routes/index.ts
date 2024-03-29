import { Router } from 'express';

const router = Router();

import { getUsers, getUserbyId, createUser, deleteUser, updateUser } from '../controllers/index.controller'

router.get('/users', getUsers);
router.get('/users/:id', getUserbyId);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;