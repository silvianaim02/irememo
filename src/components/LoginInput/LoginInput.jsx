import React, { useContext } from "react";
import PropTypes from "prop-types";
import useInput from "../../hooks/useInput";
import LocaleContext from "../../contexts/LocaleContext";
import { loginContent } from "../../utils/content";

const LoginInput = ({ login }) => {
  const { locale } = useContext(LocaleContext);
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
        placeholder={loginContent[locale].emailPlaceholder}
        value={email}
        onChange={onEmailChangeHandler}
      />
      <input
        type="password"
        placeholder={loginContent[locale].passwordPlaceholder}
        value={password}
        onChange={onPasswordChangeHandler}
      />
      <button>{locale === "id" ? "Masuk" : "Login"}</button>
    </form>
  );
};

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
