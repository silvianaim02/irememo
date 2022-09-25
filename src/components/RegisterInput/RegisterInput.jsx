import React, { useContext } from "react";
import "../../styles/FormStyle.css";
import PropTypes from "prop-types";
import useInput from "../../hooks/useInput";
import LocaleContext from "../../contexts/LocaleContext";
import { registerContent } from "../../utils/content";
import ThemeContext from "../../contexts/ThemeContext";
import { toast } from "react-toastify";

const RegisterInput = ({ register }) => {
  const { locale } = useContext(LocaleContext);
  const { theme } = useContext(ThemeContext);
  const [name, onNameChangeHandler] = useInput("");
  const [email, onEmailChangeHandler] = useInput("");
  const [password, onPasswordChangeHandler] = useInput("");
  const [confirmPassword, onConfirmPasswordChangeHandler] = useInput("");
  const inputTheme =
    theme === "dark" ? "mid-dark-theme light-text" : "light-theme dark-text";

  const onRegisterSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.warning("please make sure your password match", {
        theme: "colored",
      });
    } else {
      register({ name, email, password });
    }
  };

  return (
    <>
      <form onSubmit={onRegisterSubmit} className="register-input">
        <div className="field input-field">
          <input
            className={inputTheme}
            type="text"
            placeholder={registerContent[locale].namePlaceholder}
            value={name}
            onChange={onNameChangeHandler}
          />
        </div>
        <div className="field input-field">
          <input
            className={inputTheme}
            type="email"
            placeholder={registerContent[locale].emailPlaceholder}
            value={email}
            onChange={onEmailChangeHandler}
          />
        </div>
        <div className="field input-field">
          <input
            className={inputTheme}
            type="password"
            placeholder={registerContent[locale].passwordPlaceholder}
            autoComplete="current-password"
            value={password}
            onChange={onPasswordChangeHandler}
          />
        </div>
        <div className="field input-field">
          <input
            className={inputTheme}
            type="password"
            placeholder={registerContent[locale].passwordConfirmPlaceholder}
            autoComplete="current-password"
            value={confirmPassword}
            onChange={onConfirmPasswordChangeHandler}
          />
        </div>
        <div className="field button-field">
          <button>{locale === "id" ? "Daftar" : "Register"}</button>
        </div>
      </form>
    </>
  );
};

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
