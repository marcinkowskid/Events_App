import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Import component to test
import { App } from '../components';

// Mock the store
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('Testing the EventForm component', () => {
  // Mock the store
  const mockStore = configureStore([]);
  const store = mockStore({
    events: {
      loading: false,
      events: [],
      error: null,
    },
  });

  beforeEach(() => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
  });

  test('Should render the component', () => {
    expect(screen.getByText('Events App')).toBeInTheDocument();
    expect(screen.getByText('Create a new event')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent('Create event');
  });

  test('Should render the form fields', () => {
    expect(screen.getByLabelText('First Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Last Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Event Date')).toBeInTheDocument();
  });

  test('Should render the form fields with the correct placeholder', () => {
    expect(
      screen.getByPlaceholderText('Enter first name...'),
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('Enter last name...'),
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter email...')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('Choose an event date...'),
    ).toBeInTheDocument();
  });

  test('Should render the form fields with the correct type', () => {
    expect(screen.getByLabelText('First Name')).toHaveAttribute('type', 'text');
    expect(screen.getByLabelText('Last Name')).toHaveAttribute('type', 'text');
    expect(screen.getByLabelText('Email')).toHaveAttribute('type', 'email');
    expect(screen.getByLabelText('Event Date')).toHaveAttribute('type', 'date');
  });

  test('Should display the error messages when the form is submitted with empty fields', async () => {
    await userEvent.dblClick(screen.getByRole('button'));

    expect(screen.getByText('First name is required')).toBeInTheDocument();
    expect(screen.getByText('Last name is required')).toBeInTheDocument();
    expect(screen.getByText('Email is required')).toBeInTheDocument();
    expect(screen.getByText('Event date is required')).toBeInTheDocument();
  });

  test('Should display the error message when the email field is not valid', async () => {
    // Fill the form fields with invalid email
    await userEvent.type(screen.getByLabelText('First Name'), 'John');
    await userEvent.type(screen.getByLabelText('Last Name'), 'Doe');
    await userEvent.type(screen.getByLabelText('Email'), 'john@doe');
    await userEvent.type(screen.getByLabelText('Event Date'), '2021-11-11');

    await userEvent.dblClick(screen.getByRole('button'));

    expect(screen.getByText('Entered email is not valid')).toBeInTheDocument();
  });

  test('Should create an event when the form is submitted with valid data', async () => {
    // Submit the empty form and check if the error messages are displayed
    await userEvent.dblClick(screen.getByText('Create event'));

    expect(screen.queryByText('First name is required')).not.toBeNull();
    expect(screen.queryByText('Last name is required')).not.toBeNull();
    expect(screen.queryByText('Email is required')).not.toBeNull();
    expect(screen.queryByText('Event date is required')).not.toBeNull();

    // Fill the form fields with valid data
    await userEvent.type(screen.getByLabelText('First Name'), 'John');
    await userEvent.type(screen.getByLabelText('Last Name'), 'Doe');
    await userEvent.type(screen.getByLabelText('Email'), 'johndoe@email.com');
    await userEvent.type(screen.getByLabelText('Event Date'), '2021-11-11');

    await userEvent.dblClick(screen.getByRole('button'));

    // Check if the error messages are not displayed
    expect(screen.queryByText('First name is required')).toBeNull();
    expect(screen.queryByText('Last name is required')).toBeNull();
    expect(screen.queryByText('Email is required')).toBeNull();
    expect(screen.queryByText('Event date is required')).toBeNull();
  });
});
