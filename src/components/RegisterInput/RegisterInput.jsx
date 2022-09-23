import React, { useContext } from "react";
import PropTypes from "prop-types";
import useInput from "../../hooks/useInput";
import LocaleContext from "../../contexts/LocaleContext";
import { registerContent } from "../../utils/content";

const RegisterInput = ({ register }) => {
  const { locale } = useContext(LocaleContext);
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
        placeholder={registerContent[locale].namePlaceholder}
        value={name}
        onChange={onNameChangeHandler}
      />
      <input
        type="email"
        placeholder={registerContent[locale].emailPlaceholder}
        value={email}
        onChange={onEmailChangeHandler}
      />
      <input
        type="password"
        placeholder={registerContent[locale].passwordPlaceholder}
        autoComplete="current-password"
        value={password}
        onChange={onPasswordChangeHandler}
      />
      <button>{locale === "id" ? "Daftar" : "Register"}</button>
    </form>
  );
};

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
