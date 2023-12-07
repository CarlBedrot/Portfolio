const jwt = require('jsonwebtoken');
const verifyToken = require('./verifyToken');

describe('verifyToken', () => {
  let req, res, next;

  beforeEach(() => {
    req = {
      headers: {
        authorization: 'Bearer <token>',
      },
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    next = jest.fn();
  });

  it('should call next if token is provided and valid', () => {
    const decodedToken = {
      userId: '123',
      username: 'testuser',
      email: 'test@example.com',
    };
    jwt.verify = jest.fn().mockReturnValue(decodedToken);

    verifyToken(req, res, next);

    expect(jwt.verify).toHaveBeenCalledWith('<token>', process.env.JWT_SECRET);
    expect(req.user).toEqual(decodedToken);
    expect(next).toHaveBeenCalled();
    expect(res.status).not.toHaveBeenCalled();
    expect(res.json).not.toHaveBeenCalled();
  });

it('should return 403 status and error message if token is not provided', () => {
    req.headers.authorization = 'Bearer ';

    verifyToken(req, res, next);

    expect(jwt.verify).not.toHaveBeenCalled();
    expect(req.user).toBeUndefined();
    expect(next).not.toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.json).toHaveBeenCalledWith({ message: 'A token is required for authentication' });
});
  it('should return 401 status and error message if token is invalid', () => {
    jwt.verify = jest.fn().mockImplementation(() => {
      throw new Error('Invalid token');
    });

    verifyToken(req, res, next);

    expect(jwt.verify).toHaveBeenCalledWith('<token>', process.env.JWT_SECRET);
    expect(req.user).toBeUndefined();
    expect(next).not.toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ message: 'Invalid Token' });
  });
});