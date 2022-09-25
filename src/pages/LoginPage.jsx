import React, { useContext } from "react";
import "../styles/FormStyle.css";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import LoginInput from "../components/LoginInput/LoginInput";
import { login } from "../utils/api";
import LocaleContext from "../contexts/LocaleContext";
import { loginContent } from "../utils/content";
import ThemeContext from "../contexts/ThemeContext";

const LoginPage = ({ loginSuccess }) => {
  const { locale } = useContext(LocaleContext);
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });
    if (!error) {
      loginSuccess(data);
      navigate("");
    }
  }

  return (
    <section className="login-page form-container forms">
      <div
        className={
          theme === "dark" ? "form mid-dark-theme" : "form light-theme"
        }
      >
        <div className="form-content">
          <h2>{loginContent[locale].header}</h2>
          <LoginInput login={onLogin} />
          <p>
            {loginContent[locale].redirectText}{" "}
            <Link to="/register">{loginContent[locale].redirectAnchor}</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
