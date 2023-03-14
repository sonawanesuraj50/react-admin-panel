import styled from "styled-components";

export const LoginFormWrap = styled.div`
  width: 567px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 48px;

  @media (max-width: 1200px) {
    width: 90%;
  }
`;

export const LoginForm = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Header = styled.div`
  font-family: "Inter-Bold";
  font-size: 32px;
  line-height: 44px;
  color: #030037;
`;

export const SubHeader = styled.div`
  font-family: "Inter-Regular";
  font-size: 14px;
  line-height: 20px;
  color: #686687;
`;

export const ForgotText = styled.div`
  font-family: "Inter-Bold";
  font-size: 14px;
  line-height: 19px;
  color: #686687;
  margin-top: 15px;
  cursor: pointer;
`;

export const FooterTextContainer = styled.div``;

export const FooterTextWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FooterText = styled.div`
  font-family: "Inter-Regular";
  font-size: 14px;
  line-height: 20px;
  color: #233244;
`;
