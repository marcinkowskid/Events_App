import request from 'supertest';
import mongoose from 'mongoose';

import app from '../index';
import Event from '../models/event';
const mongoURI = process.env.MONGO_URI_TEST;

describe('Event API tests: POST /api/v1/events', () => {
  beforeEach((done) => {
    if (mongoURI) {
      mongoose.connect(mongoURI, {}, () => done());
    }
  });

  afterEach((done) => {
    mongoose.connection.db.dropDatabase(() => {
      mongoose.connection.close(() => done());
    });
  });

  it('Should create an event with valid data', async () => {
    const eventData = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@gmail.com',
      eventDate: new Date(),
    };

    const response = await request(app).post('/api/v1/events').send(eventData);

    // Checking the response
    expect(response.status).toBe(201);
    expect(response.headers['content-type']).toEqual(
      expect.stringContaining('json'),
    );
    expect(response.body).toEqual(expect.objectContaining({ success: true }));

    const { data: responseData } = response.body;

    // Checking the database
    const event = await Event.findOne({ _id: responseData._id });

    expect(event).toBeTruthy();
    expect(event?.firstName).toEqual(eventData.firstName);
    expect(event?.lastName).toEqual(eventData.lastName);
    expect(event?.email).toEqual(eventData.email);
    expect(event?.eventDate).toEqual(eventData.eventDate);
  });

  it('Should not create an event without a valid firstName', async () => {
    const eventData = {
      firstName: '',
      lastName: 'Doe',
      email: 'johndoe@gmail.com',
      eventDate: new Date(),
    };

    const response = await request(app).post('/api/v1/events').send(eventData);

    // Checking the response
    expect(response.status).toBe(400);
    expect(response.body.error).toEqual(
      'Event validation failed: firstName: First name field is required',
    );

    // Checking the database
    const event = await Event.findOne({ _id: response.body?.data?._id });
    expect(event).toBeFalsy();
  });

  it('Should not create an event without a valid lastName', async () => {
    const eventData = {
      firstName: 'John',
      lastName: '',
      email: 'johndoe@gmail.com',
      eventDate: new Date(),
    };

    const response = await request(app).post('/api/v1/events').send(eventData);

    // Checking the response
    expect(response.status).toBe(400);
    expect(response.body.error).toEqual(
      'Event validation failed: lastName: Last name field is required',
    );

    // Checking the database
    const event = await Event.findOne({ _id: response.body?.data?._id });
    expect(event).toBeFalsy();
  });

  it('Should not create an event without a valid email', async () => {
    const eventData = {
      firstName: 'John',
      lastName: 'Doe',
      email: '',
      eventDate: new Date(),
    };

    const response = await request(app).post('/api/v1/events').send(eventData);

    // Checking the response
    expect(response.status).toBe(400);
    expect(response.body.error).toEqual(
      'Event validation failed: email: Email field is required',
    );

    // Checking the database
    const event = await Event.findOne({ _id: response.body?.data?._id });
    expect(event).toBeFalsy();
  });

  it('Should not create an event without a valid eventDate', async () => {
    const eventData = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@gmail.com',
      eventDate: '',
    };

    const response = await request(app).post('/api/v1/events').send(eventData);

    // Checking the response
    expect(response.status).toBe(400);
    expect(response.body.error).toEqual(
      'Event validation failed: eventDate: Event date field is required',
    );

    // Checking the database
    const event = await Event.findOne({ _id: response.body?.data?._id });
    expect(event).toBeFalsy();
  });

  it('Should not create an event without a valid data', async () => {
    const eventData = {
      firstName: '',
      lastName: 'Doe',
      email: 'johndoe@gmail.com',
      eventDate: '',
    };

    const response = await request(app).post('/api/v1/events').send(eventData);

    // Checking the response
    expect(response.status).toBe(400);
    expect(response.body.error).toEqual(
      'Event validation failed: firstName: First name field is required, eventDate: Event date field is required',
    );

    // Checking the database
    const event = await Event.findOne({ _id: response.body?.data?._id });
    expect(event).toBeFalsy();
  });
});
