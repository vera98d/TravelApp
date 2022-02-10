import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../services/authService.js";
import { Container, DontHaveAccountText, Input, LoginButton } from "./style.js";
import { Header } from "../../components/Header/index.js";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="login">
      <Header
        title="Login and let's travel"
        subtitle="read entries, create your story and chat with antother travellers"
        isBackButtonVisible
      />
      <Container>
        <Input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Put your e-mail address"
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Put your password"
        />
        <LoginButton
          className="login__btn"
          onClick={() => {
            authService.logInWithEmailAndPassword(email, password).then(() => {
              navigate("/team-jo-project-2/provinces");
            });
          }}
        >
          Login
        </LoginButton>
        <DontHaveAccountText>
          Don't have an account?{" "}
          <Link to="/team-jo-project-2/register">Register</Link> now.
        </DontHaveAccountText>
      </Container>
    </div>
  );
}
export default Login;
