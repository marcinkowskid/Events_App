import jwt from 'jsonwebtoken';
import { Types } from 'mongoose';

export const generateJWT = (userId: Types.ObjectId) =>
  jwt.sign(
    { id: userId },
    process.env.JWT_SECRET as string,
    {
      expiresIn: 3600,
    },
    (err, token) => {
      if (err) {
        throw new Error('Error while generating JWT');
      }
      return token;
    },
  );
