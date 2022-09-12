import mongoose, { Schema } from 'mongoose';
import { Event } from '../types/event';

// Validators and validator's messages
import { emailValidator, emailValidatorMsg } from '../utils/validators';

const eventSchema = new Schema<Event>({
  firstName: {
    type: String,
    description: 'First name of the user',
    required: [true, 'First name field is required'],
  },
  lastName: {
    type: String,
    description: 'Last name of the user',
    required: [true, 'Last name field is required'],
  },
  email: {
    type: String,
    description: 'Email of the user',
    required: [true, 'Email field is required'],
    validate: {
      validator: emailValidator,
      message: ({ value }: { value: string }) => emailValidatorMsg(value),
    },
  },
  eventDate: {
    type: Date,
    description: 'Date of the event',
    required: [true, 'Event date field is required'],
  },
});

export default mongoose.model('Event', eventSchema);
