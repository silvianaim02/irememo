import React from "react";
import PropTypes from "prop-types";
import useInput from "../../hooks/useInput";

const RegisterInput = ({ register }) => {
  const [name, onNameChangeHandler] = useInput("");
  const [email, onEmailChangeHandler] = useInput("");
  const [password, onPasswordChangeHandler] = useInput("");

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
        onChange={onNameChangeHandler}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={onEmailChangeHandler}
      />
      <input
        type="password"
        placeholder="Password"
        autoComplete="current-password"
        value={password}
        onChange={onPasswordChangeHandler}
      />
      <button>Register</button>
    </form>
  );
};

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
