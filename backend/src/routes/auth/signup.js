/*eslint-env es6*/
const express = require('express');

const router = express.Router();

router.post('/api/auth/signup', async (req, res) => {
    res.send({ signup: false });
});

module.exports = {
    signupRouter: router,
}
