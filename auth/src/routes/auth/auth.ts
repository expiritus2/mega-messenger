import express, { Request, Response, NextFunction} from 'express';
import { passport } from '../../passport';
import client from '../../settings/client';
import { User } from "../../models/user";

const router = express.Router();

router.post('/api/auth/login', (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate('local', async (err, user, info) => {
        console.log(err, user, info);
        if (err) {
            return next(err);
        }

        if (!user) {
            const { username, password } = req.body;
            console.log(username, password);
            const user = new User({ username, password });
            await user.save();
            return res.send({ user });
        }

        req.logIn(user, (error) => {
            if (error) {
                return next(err);
            }

            return res.send({ user });
        })
    })(req, res, next);
});

export { router as authRouter };
