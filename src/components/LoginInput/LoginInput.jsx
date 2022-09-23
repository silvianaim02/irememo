import React from "react";
import PropTypes from "prop-types";
import useInput from "../../hooks/useInput";

const LoginInput = ({ login }) => {
  const [email, onEmailChangeHandler] = useInput("");
  const [password, onPasswordChangeHandler] = useInput("");

  const onLoginSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };
  
  return (
    <form onSubmit={onLoginSubmit} className="login-input">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={onEmailChangeHandler}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={onPasswordChangeHandler}
      />
      <button>Masuk</button>
    </form>
  );
};

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
