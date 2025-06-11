// Auth Middleware
const authMiddleware = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  const validApiKey = 'your_valid_api_key'; // Replace with your actual API key

  if (!apiKey || apiKey !== validApiKey) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  next();
};

module.exports = authMiddleware;
