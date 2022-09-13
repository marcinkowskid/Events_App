import { Field } from 'formik';

// Styles
import * as Styled from './FormField.styled';
// Types
import { IFieldInput } from './types';

const FormField = ({
  label,
  type,
  name,
  placeholder,
  touched,
  error,
}: IFieldInput) => {
  return (
    <Styled.FieldWrapper>
      <Styled.Label htmlFor={name}>{label}</Styled.Label>
      <Field name={name}>
        {({ field }: any) => (
          <Styled.InputField
            id={name}
            type={type}
            name={field.name}
            placeholder={placeholder}
            value={field.value}
          />
        )}
      </Field>
      {touched && error && <Styled.Error>{error}</Styled.Error>}
    </Styled.FieldWrapper>
  );
};

export default FormField;
