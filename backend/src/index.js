/*eslint-env es6*/
const express = require('express');
const cookieSession = require('cookie-session');
const cors = require('cors');

const { signupRouter } = require('./routes/auth/signup');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(cookieSession({
    name: 'mega-messenger',
    keys: ['secret'],
    expires: new Date(Date.now() + (1000 * 60 * 60 * 24 * 30)), // one month
    sameSite: 'none'
}));

app.use(signupRouter);

app.all('*', async (req, res) => {
    res.send([{ message: 'Not Found'}])
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})

