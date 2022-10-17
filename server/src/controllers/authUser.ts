import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import { generateJWT } from '../utils/createJWT';

// Model
import User from '../models/user';

// @desc    Register a user
// @route   POST /api/v1/users/register
// @access  Public

export const registerUser = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      const { firstName, lastName, email, password } = req.body;

      // Check if user passed all fields
      if (!firstName || !lastName || !email || !password) {
        throw new Error('All required fields are not filled.');
      }

      // Check if user already exists
      const userExisting = await User.findOne({ email });

      if (userExisting) {
        res.status(400).json({
          success: false,
          error: 'User already exists',
        });
      }

      // Otherwise, create a new user
      // Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const user = await User.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
      });

      // Create JWT
      const token = generateJWT(user._id);

      res.status(201).json({
        success: true,
        data: {
          user,
          token,
        },
      });
    } catch (error) {
      if (error instanceof Error && error.name === 'ValidationError') {
        res.status(400).json({
          success: false,
          error: error.message,
        });
      } else {
        res.status(500);
        throw new Error(`Server Error: ${error}`);
      }
    }
  },
);

// @desc    Login a user
// @route   POST /api/v1/users/login
// @access  Public

export const loginUser = asyncHandler(async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });

    if (!user) {
      res.status(400);
      throw new Error('Invalid credentials');
    }

    // Check if password matches
    const passMatches = await bcrypt.compare(password, user.password);

    if (!passMatches) {
      res.status(400);
      throw new Error('Invalid credentials');
    }

    // Create JWT
    const token = generateJWT(user._id);

    res.status(200).json({
      success: true,
      data: {
        user,
        token,
      },
    });
  } catch (error) {
    if (error instanceof Error && error.name === 'ValidationError') {
      res.status(400);
      throw new Error(error.message);
    } else {
      res.status(500);
      throw new Error(`Server Error: ${error}`);
    }
  }
});
