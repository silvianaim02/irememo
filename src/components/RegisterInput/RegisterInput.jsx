import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

const RegisterInput = ({ register }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onRegisterSubmit = (e) => {
    e.preventDefault();
    register({ name, email, password });
  };
  
  return (
    <form onSubmit={onRegisterSubmit} className="register-input">
      <input
        type="text"
        placeholder="Nama"
        value={name}
        onChange={onNameChange}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={onEmailChange}
      />
      <input
        type="password"
        placeholder="Password"
        autoComplete="current-password"
        value={password}
        onChange={onPasswordChange}
      />
      <button>Register</button>
    </form>
  );
};

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
