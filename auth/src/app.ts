import express from 'express';
import 'express-async-errors';
import cookieSession from "cookie-session";
import passport from 'passport';
import cors from 'cors';

import { errorHandler, NotFoundError } from '@mega-messenger-dev/common';

import { currentUserRouter } from "./routes/auth/current-user";
import { authRouter } from './routes/auth/auth';
import { logoutRouter } from './routes/auth/logout';

const app = express();

app.set('trust proxy', true);
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(cookieSession({
    name: process.env.COOKIE_SESSION_NAME,
    keys: [process.env.COOKIE_KEY!],
    expires: new Date(Date.now() + (1000 * 60 * 60 * 24 * 30)), // one month
    sameSite: 'none'
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(authRouter);
app.use(currentUserRouter);
app.use(logoutRouter);

app.all('*', async () => {
    throw new NotFoundError();
});

app.use(errorHandler);

export { app };
