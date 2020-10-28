import styled from 'styled-components';

export const Container = styled.div`
  main {
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 86px;

    img {
      width: 287px;
    }

    > div {
      h1 {
        color: #333333;
        font-size: 48px;
        line-height: 45px;
        letter-spacing: -0.035em;
      }

      p {
        color: #4f4f4f;
        margin-top: 29px;
        font-weight: 400;
        font-size: 18px;
      }

      button {
        width: 216px;
        height: 68px;
        background: #333333;
        color: #ffffff;
        font-size: 14px;
        letter-spacing: -0.035em;
        text-transform: uppercase;
        margin-top: 90px;
      }
    }

    @media (min-width: 1100px) {
      flex-direction: row;
      padding: 15px;
      justify-content: space-between;
      img {
        width: 540px;
      }

      > div {
        h1 {
          font-size: 64px;
          max-width: 586px;
          line-height: 95px;
        }

        p {
          width: 381px;
        }
      }
    }
  }
`;

export const Header = styled.header`
  width: 100%;
  padding: 15px;

  h1 {
    font-family: Inconsolata;
    font-weight: bold;
    font-size: 24px;
    letter-spacing: -0.08em;
    text-transform: uppercase;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  text-align: center;
  position: absolute;
  font-family: 'Montserrat', sans-serif;
  bottom: 0;
`;
