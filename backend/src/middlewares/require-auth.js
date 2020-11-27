const requireAuth = (req, res, next) => {
    if (!req.user) {
        const error = new Error('Not authorized');
        error.statusCode = 401;
        throw error;
    }

    next();
}

module.exports = {
    requireAuth,
}
