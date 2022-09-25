import React, { useContext } from "react";
import "../../styles/FormStyle.css";
import PropTypes from "prop-types";
import useInput from "../../hooks/useInput";
import LocaleContext from "../../contexts/LocaleContext";
import { loginContent } from "../../utils/content";
import ThemeContext from "../../contexts/ThemeContext";

const LoginInput = ({ login }) => {
  const { locale } = useContext(LocaleContext);
  const { theme } = useContext(ThemeContext);
  const [email, onEmailChangeHandler] = useInput("");
  const [password, onPasswordChangeHandler] = useInput("");
  const inputTheme =
    theme === "dark" ? "mid-dark-theme light-text" : "light-theme dark-text";

  const onLoginSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <form onSubmit={onLoginSubmit} className="login-input">
      <div className="field input-field">
        <input
          className={inputTheme}
          type="email"
          placeholder={loginContent[locale].emailPlaceholder}
          value={email}
          onChange={onEmailChangeHandler}
        />
      </div>
      <div className="field input-field">
        <input
          className={inputTheme}
          type="password"
          placeholder={loginContent[locale].passwordPlaceholder}
          value={password}
          onChange={onPasswordChangeHandler}
        />
      </div>
      <div className="field button-field">
        <button>{locale === "id" ? "Masuk" : "Login"}</button>
      </div>
    </form>
  );
};

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
