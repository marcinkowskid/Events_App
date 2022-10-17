import jwt from 'jsonwebtoken';
import { Types } from 'mongoose';

export const generateJWT = (userId: Types.ObjectId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET as string, {
    expiresIn: 3600,
  });
};
