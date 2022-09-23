import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import LoginInput from "../components/LoginInput/LoginInput";
import { login } from "../utils/api";
import LocaleContext from "../contexts/LocaleContext";
import { loginContent } from "../utils/content";

const LoginPage = ({ loginSuccess }) => {
  const { locale } = useContext(LocaleContext);
  const navigate = useNavigate();

  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });
    if (!error) {
      loginSuccess(data);
      navigate("");
    }
  }

  return (
    <section className="login-page">
      <h2>{loginContent[locale].header}</h2>
      <LoginInput login={onLogin} />
      <p>
        {loginContent[locale].redirectText} <Link to="/register">{loginContent[locale].redirectAnchor}</Link>
      </p>
    </section>
  );
};

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
