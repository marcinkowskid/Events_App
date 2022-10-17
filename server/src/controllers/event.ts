import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';

// Model
import Event from '../models/event';

// @desc    Add a user event
// @route   POST /api/v1/events
// @access  Public

export const createEvent = asyncHandler(async (req: Request, res: Response) => {
  try {
    const event = await Event.create(req.body);

    res.status(201).json({
      success: true,
      data: event,
    });
  } catch (error) {
    if (error instanceof Error && error.name === 'ValidationError') {
      res.status(400);
      throw new Error(error.message);
    } else {
      res.status(500);
      throw new Error('Server Error');
    }
  }
});
