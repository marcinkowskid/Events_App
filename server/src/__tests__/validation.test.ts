import { emailValidator } from '../utils/validators';

describe('Email validation', () => {
  it('Should return true for valid email', () => {
    const validEmail = 'test@email.com';

    expect(emailValidator(validEmail)).toBe(true);
  });

  it('Should return false for invalid emails', () => {
    const invalidEmail = 'testemail.com';
    const invalidEmail2 = 'testemail@';

    expect(emailValidator(invalidEmail)).toBe(false);
    expect(emailValidator(invalidEmail2)).toBe(false);
  });
});
