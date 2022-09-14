import { Formik, Form, FormikProps, FormikState } from 'formik';
import * as Yup from 'yup';

// Styles
import * as Styled from './EventForm.styled';
// Types
import { EventFormProps } from './types';
// Utils, hooks and actions
import { emailValidator } from '../../utils/validation';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addEvent } from '../../store/eventsSlice';
// Components
import { FormField, Loader } from '../';

const EventForm = () => {
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.events);

  const initialValues: EventFormProps = {
    firstName: '',
    lastName: '',
    email: '',
    eventDate: '',
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string()
      .required('Email is required')
      .test('email', 'Entered email is not valid', emailValidator),
    eventDate: Yup.date().required('Event date is required'),
  });

  const handleSubmitForm = (values: EventFormProps) => {
    const newEvent = {
      ...values,
      eventDate: new Date(values.eventDate),
    };
    dispatch(addEvent(newEvent));
  };

  return (
    <Styled.EventFormWrapper>
      <Styled.Title>Events App</Styled.Title>
      <Styled.FormContainer>
        <Styled.Header>Create a new event</Styled.Header>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            handleSubmitForm(values);
            resetForm();
          }}
        >
          {({ errors, touched }: FormikProps<EventFormProps>) => (
            <Form>
              <FormField
                label="First Name"
                type="text"
                name="firstName"
                placeholder="Enter first name..."
                touched={touched.firstName}
                error={errors.firstName}
              />
              <FormField
                label="Last Name"
                type="text"
                name="lastName"
                placeholder="Enter last name..."
                touched={touched.lastName}
                error={errors.lastName}
              />
              <FormField
                label="Email"
                type="email"
                name="email"
                placeholder="Enter email..."
                touched={touched.email}
                error={errors.email}
              />
              <FormField
                label="Event date"
                type="date"
                name="eventDate"
                placeholder="Choose an event date..."
                touched={touched.eventDate}
                error={errors.eventDate}
              />
              <Styled.Button type="submit" disabled={loading}>
                {loading ? <Loader /> : 'Create event'}
              </Styled.Button>
              {error && (
                <Styled.Error>Failed to create a new event</Styled.Error>
              )}
            </Form>
          )}
        </Formik>
      </Styled.FormContainer>
    </Styled.EventFormWrapper>
  );
};

export default EventForm;
