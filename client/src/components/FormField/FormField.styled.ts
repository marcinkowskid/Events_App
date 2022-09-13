import styled from 'styled-components';
import { Field } from 'formik';

export const FieldWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  width: 100%;
  height: auto;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin: 10px 0;
  padding: 0 10px;
  letter-spacing: 1px;
`;

export const InputField = styled(Field)`
  width: 100%;
  height: auto;
  min-height: 56px;
  border: none;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-family: 'Lato', sans-serif;
  background: ${({ theme }) => theme.colors.white};
  padding: 0px 20px;
  outline: none;
  letter-spacing: 1px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
    font-size: ${({ theme }) => theme.fontSize.l};
    letter-spacing: 1px;
  }
`;

export const Error = styled.span`
  width: 100%;
  height: auto;
  color: ${({ theme }) => theme.colors.red};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-top: 10px;
  padding: 0 10px;
  text-align: right;
  letter-spacing: 1px;
`;
