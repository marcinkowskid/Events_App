import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import asyncHandler from 'express-async-handler';
import { Types } from 'mongoose';

// Request interface
interface RequestWithUser extends Request {
  user?: {
    id?: Types.ObjectId;
    email?: string;
  } | null;
}

interface Decoded {
  id: string;
}

// Model
import User from '../models/user';

// Auth middleware
export const auth = asyncHandler(
  async (req: RequestWithUser, res: Response, next: NextFunction) => {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      try {
        // Get token from header
        token = req.headers.authorization.split(' ')[1];

        // Verify token
        const decoded = jwt.verify(
          token,
          process.env.JWT_SECRET as string,
        ) as Decoded;

        // Get user from database
        const user = await User.findById(decoded.id).select('-password');
        req.user = user;

        console.log('User: ', req.user);

        next();
      } catch (error) {
        res.status(401).json({
          success: false,
          error: 'Not authorized, token failed.',
        });
      }
    }

    if (!token) {
      res.status(401).json({
        success: false,
        error: 'Not authorized, no token provided.',
      });
    }
  },
);
