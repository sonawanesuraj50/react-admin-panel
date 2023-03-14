import React from "react";
import { Button, IconButton, OutlinedInput } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import { styled } from "@mui/material/styles";
import { Visibility, VisibilityOff,AccountCircle } from "@mui/icons-material";
import LockIcon from "@mui/icons-material/Lock";
import * as Styled from "./style";

const LoginButton = styled(Button)({
  width: "100%",
  height: "54px",
  backgroundColor: "#1334B3",
  marginTop: "16px",
});

const LoginForm = styled(FormControl)({
  width: "100%",
  marginTop: "24px",
  display: "flex",
  gap: "12px",
});

const FormInput = styled(OutlinedInput)({
  height: "48px",
  background: "#FFFFFF",
  border: "1px solid #E6E6E6",
  borderRadius: "8px",
  input: {
    "&:-webkit-autofill": {
      transitionDelay: "9999s",
      transitionProperty: "background-color, color",
    },
  },
});

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Styled.LoginContainer>
      <Styled.LoginForm>
        <Styled.Header>Welcome</Styled.Header>
        <Styled.SubHeader>Enter your Username and Password</Styled.SubHeader>

        <LoginForm variant="standard">
          <FormInput
            id="userName"
            placeholder="userName"
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
          />

          <FormInput
            id="Password"
            type={showPassword ? "text" : "password"}
            placeholder="password"
            startAdornment={
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </LoginForm>

        <LoginButton variant="contained">Login</LoginButton>
        <Styled.ForgotText>Forgot Password?</Styled.ForgotText>

        <Styled.FooterTextContainer>
          <Styled.FooterTextWrap>
            <Styled.FooterText>Terms of Use</Styled.FooterText>
            <Styled.FooterText>Privacy Policy</Styled.FooterText>
          </Styled.FooterTextWrap>
          <Styled.FooterText>
            © Punctualiti 2022. All rights reserved
          </Styled.FooterText>
        </Styled.FooterTextContainer>
      </Styled.LoginForm>

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
