import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/api/auth/currentuser', async (req: Request, res: Response) => {
    if (req.user) {
        return res.send(req.user);
    }

    res.send({});
});

export { router as currentUserRouter };
