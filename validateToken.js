import jwt from 'jsonwebtoken';

const authorization = (req, res, next) => {
    const token = req.body.token;
    console.log("🚀 ~ file: validateToken.js ~ line 5 ~ authorization ~ req.cookies.access_token", JSON.stringify(req.body.token))
    if (!token) {
      return res.sendStatus(403);
    }
    try {
      const data = jwt.verify(token, "YOUR_SECRET_ENCRYPTION_KEY");
      req.userId = data.id;
      req.userRole = data.role;
      return next();
    } catch {
      return res.sendStatus(403);
    }
  };
export default authorization;