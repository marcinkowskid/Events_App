import styled from 'styled-components';

export const EventFormWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: ${({ theme }) => theme.fontWeight.black};
  color: ${({ theme }) => theme.colors.secondaryLight};
  margin-bottom: 30px;
  letter-spacing: 1px;
`;

export const FormContainer = styled.div`
  ${({ theme }) => theme.container};
  width: 700px;
  height: 85vh;
  max-height: 95vh;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 10px;
  margin: 0 10px;
  padding: 40px 30px;
  overflow-y: auto;
`;

export const Header = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.black};
  color: ${({ theme }) => theme.colors.primaryLight};
  text-align: center;
  margin-bottom: 20px;
  letter-spacing: 1px;
`;

export const Button = styled.button`
  width: 100%;
  height: 55px;
  max-height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  font-family: 'Lato', sans-serif;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  letter-spacing: 1px;
  text-decoration: none;
  padding: 15px 20px;
  margin-top: 30px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryLight};
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const Error = styled.span`
  display: block;
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
