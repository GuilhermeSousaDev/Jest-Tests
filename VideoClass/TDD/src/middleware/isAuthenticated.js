const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: 'Token not found' });
    }

    const [, token] = authHeader.split('');

    try {
        const decoded = jwt.verify(token, 'odklskjdoajreasd');

        req.userId = decoded.id;
        
    } catch (error) {
        return res.status(401).json({ message: 'Invalid Token' });
    }

    return next();
}