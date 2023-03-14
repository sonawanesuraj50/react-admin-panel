import LoginForm from "./components";
import * as Styled from "./style";

const Login = () => {
  return (
    <Styled.LoginContainer>
      <LoginForm />
      <Styled.LoginBg>
        <Styled.BackgroundContainer>
          <Styled.TransparentBg />
          <Styled.WhiteBg />
        </Styled.BackgroundContainer>

        <Styled.LoginBgTextWrap>
          <Styled.LoginBgHeader>
            360° Solution for Asset Management
          </Styled.LoginBgHeader>
          <Styled.LoginBgSubHeader>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Styled.LoginBgSubHeader>
        </Styled.LoginBgTextWrap>
      </Styled.LoginBg>
    </Styled.LoginContainer>
  );
};

export default Login;
