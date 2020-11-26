import express, { Request, Response } from 'express';
import client from '../../settings/client';

const router = express.Router();

router.get('/api/auth/logout', async (req: Request, res: Response ) => {
    await req.logOut();
    res.redirect(`${client.domain}/`);
});

export { router as logoutRouter };
