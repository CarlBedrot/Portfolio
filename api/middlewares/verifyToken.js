const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Extract the token from the Authorization header

    if (!token) {
        return res.status(403).json({ message: "A token is required for authentication" });
    }

    try {
        /**
         * Decoded token object.
         * @typedef {Object} DecodedToken
         * @property {string} userId - The ID of the user.
         * @property {string} username - The username of the user.
         * @property {string} email - The email of the user.
         */
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
    } catch (err) {
        return res.status(401).json({ message: "Invalid Token" });
    }
    return next();
};

module.exports = verifyToken;
