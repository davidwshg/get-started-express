import { Router } from 'express';
import { get, getById } from '../controllers/value';

const router = Router();

router.get('/', get);
router.get<{id: string}>('/:id', getById);

export default router;
