import styled from 'styled-components';

export const Loader = styled.div`
  display: inline-block;
  width: 25px;
  height: 25px;
  border: 3px solid ${({ theme }) => theme.colors.secondaryLight};
  border-radius: 50%;
  border-top-color: ${({ theme }) => theme.colors.primaryLight};
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }

  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
