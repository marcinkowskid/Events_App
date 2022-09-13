export const container = () => `
  height: 100%;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;

  @media (max-width: 575px) {
    max-width: 90%;
  }

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 740px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }

  @media (min-width: 1400px) {
    max-width: 1320px;
  }
`;
