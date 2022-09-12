import { NextFunction, Request, Response } from 'express';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const statusCode: number = res.statusCode || 500;

  const { message, stack } = err;
  res.status(statusCode).json({
    message,
    ...(process.env.NODE_ENV !== 'production' && { stack }),
  });

  next();
};
