import express from 'express';
import {getUsers} from '../Controllers/users.js';

const router = express.Router();
router.get('/', getUsers);
export default router;