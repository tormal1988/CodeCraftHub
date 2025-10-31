// Import the jsonwebtoken library for JWT handling
const jwt = require('jsonwebtoken');

/**
 * Middleware function to authenticate requests using JWT.
 * This function checks for the presence of a valid JWT in the Authorization header.
 * If the token is valid, it attaches the decoded user information to the request object.
 * If the token is missing or invalid, it responds with an appropriate error message.
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @param {Function} next - The next middleware function
 */
const authMiddleware = (req, res, next) => {
    // Extract token from the Authorization header (Bearer token)
    const token = req.header('Authorization')?.split(' ')[1];

    // If no token is found, respond with 'Access denied' status
    if (!token) return res.status(401).json({ message: 'Access denied' });

    try {
        // Verify the token using the secret key stored in environment variables
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        // Attach the verified user data to the request object for further use
        req.user = verified;
        // Call the next middleware or route handler
        next();
    } catch (error) {
        // If token verification fails, respond with 'Invalid token' status
        res.status(400).json({ message: 'Invalid token' });
    }
};

// Export the middleware for use in other parts of the application
module.exports = authMiddleware;