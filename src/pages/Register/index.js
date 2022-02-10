import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../../components/Header/index.js";
import authService from "../../services/authService.js";
import { Container, HaveAccountText, Input, RegisterButton } from "./style.js";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const register = async () => {
    if (!name) alert("Please enter name");
    await authService.registerWithEmailAndPassword(name, email, password);
    navigate("login");
  };
  return (
    <div className="register">
      <Header
        title="Register and let's travel"
        subtitle="read entries, create your story and chat with other travellers"
        isBackButtonVisible
      />
      <Container>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Put your user name"
        />
        <Input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Put your e-mail adress"
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Put your password"
        />
        <RegisterButton onClick={register}>Register</RegisterButton>
        <HaveAccountText>
          Already have an account?{" "}
          <Link to="/team-jo-project-2/login">Login</Link> now.
        </HaveAccountText>
      </Container>
    </div>
  );
}
export default Register;
