import mongoose, { Schema } from 'mongoose';
import { User } from 'types/user';

// Validators and validator's messages
import { emailValidator, emailValidatorMsg } from '../utils/validators';

const userSchema = new Schema<User>(
  {
    firstName: {
      type: String,
      description: 'First name of the user',
      required: [true, 'First name is required.'],
    },
    lastName: {
      type: String,
      description: 'Last name of the user',
      required: [true, 'Last name is required.'],
    },
    email: {
      type: String,
      description: 'Email of the user',
      required: [true, 'Email is required.'],
      validate: {
        validator: emailValidator,
        message: ({ value }: { value: string }) => emailValidatorMsg(value),
      },
    },
    password: {
      type: String,
      description: 'Password of the user',
      required: [true, 'Password is required.'],
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('User', userSchema);
