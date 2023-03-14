import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  IconButton,
  OutlinedInput,
  FormControl,
  InputAdornment,
  styled,
  CircularProgress,
} from "@mui/material";
import { Visibility, VisibilityOff, AccountCircle } from "@mui/icons-material";
import LockIcon from "@mui/icons-material/Lock";
import { generateNotification, MessageTypes } from "shared";
import * as Styled from "./style";

const LoginButton = styled(Button)({
  width: "100%",
  height: "54px",
  backgroundColor: "#1334B3",
  marginTop: "16px",
});

const Form = styled(FormControl)({
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
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      const res = await axios.post(
        "https://dummyjson.com/auth/login",
        {
          username: userName,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(res);
      setIsLoading(false);
      generateNotification("Login Success", MessageTypes.SUCCESS);
    } catch {
      console.log("login api error");
      setIsLoading(false);
      generateNotification("Invalid Credentials", MessageTypes.ERROR);
    }
  };

  return (
    <Styled.LoginContainer>
      <form onSubmit={handleSubmit}>
        <Styled.LoginFormWrap>
          <Styled.LoginForm>
            <Styled.Header>Welcome</Styled.Header>
            <Styled.SubHeader>
              Enter your Username and Password
            </Styled.SubHeader>

            <Form variant="standard">
              <FormInput
                id="outlined-start-adornment"
                error={userName === ""}
                value={userName}
                required
                placeholder="UserName"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setUserName(e.target.value)
                }
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                }
              />
            </Form>

            <Form variant="standard">
              <FormInput
                id="outlined-adornment-password"
                required
                type={showPassword ? "text" : "password"}
                error={password === ""}
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
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
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </Form>
            <LoginButton variant="contained" type="submit">
              {isLoading ? <CircularProgress /> : "Login"}
            </LoginButton>

            <Styled.ForgotText>Forgot Password?</Styled.ForgotText>
          </Styled.LoginForm>
          <Styled.FooterTextContainer>
            <Styled.FooterTextWrap>
              <Styled.FooterText>Terms of Use</Styled.FooterText>
              <Styled.FooterText>Privacy Policy</Styled.FooterText>
            </Styled.FooterTextWrap>
            <Styled.FooterText>
              © Punctualiti 2022. All rights reserved
            </Styled.FooterText>
          </Styled.FooterTextContainer>
        </Styled.LoginFormWrap>
      </form>

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
