import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 950px) {
    grid-template-columns: 1fr;
  }
`;

export const LoginBg = styled.div`
  background: #1334b3;

  @media (max-width: 950px) {
    display: none;
  }
`;

export const BackgroundContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 100px 0 0 110px;
  position: relative;
`;

export const TransparentBg = styled.div`
  width: 35vw;
  height: 43vh;
  background: #ffffff;
  opacity: 0.05;
  border-radius: 8px;
  transform: perspective(630px) rotateY(-11deg);
  position: absolute;
  left: 0;
`;

export const WhiteBg = styled.div`
  width: 30vw;
  height: 43vh;
  background: #ffffff;
  box-shadow: 0px 12px 48px rgba(3, 0, 55, 0.15);
  border-radius: 20px;
  transform: perspective(400px) rotateY(25deg);
`;

export const LoginBgTextWrap = styled.div`
  text-align: center;
  margin-top: 100px;
`;

export const LoginBgHeader = styled.div`
  font-family: "Inter-Bold";
  font-size: 32px;
  line-height: 44px;
  color: #ffffff;

  @media (max-width: 1200px) {
    font-size: 28px;
  }
`;

export const LoginBgSubHeader = styled.div`
  width: 90%;
  margin: 0 auto;
  font-family: "Inter-Regular";
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.005em;
  color: #f8f9fd;

  @media (max-width: 1200px) {
    font-size: 14px;
  }
`;
