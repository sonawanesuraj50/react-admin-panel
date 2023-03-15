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
import { useNavigate } from "react-router-dom";

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

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // userName: kminchelle
    // password: 0lelplR

    try {
      setIsLoading(true);

      await axios.post(
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

      setIsLoading(false);
      generateNotification("Login Success", MessageTypes.SUCCESS);
      navigate("/view-client");
    } catch {
      console.log("login api error");
      setIsLoading(false);
      generateNotification("Invalid Credentials", MessageTypes.ERROR);
    }
  };

  return (
    <>
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
              © Test 2022. All rights reserved
            </Styled.FooterText>
          </Styled.FooterTextContainer>
        </Styled.LoginFormWrap>
      </form>
    </>
  );
};

export default LoginForm;
