import React, { useContext } from "react";
import "../styles/FormStyle.css";
import { Link, useNavigate } from "react-router-dom";
import RegisterInput from "../components/RegisterInput/RegisterInput";
import LocaleContext from "../contexts/LocaleContext";
import { register } from "../utils/api";
import { registerContent } from "../utils/content";
import ThemeContext from "../contexts/ThemeContext";

const RegisterPage = () => {
  const { locale } = useContext(LocaleContext);
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  async function onRegisterHandler(user) {
    const { error } = await register(user);
    if (!error) {
      navigate("/");
    }
  }

  return (
    <section className="register-page form-container forms">
      <div
        className={
          theme === "dark" ? "form mid-dark-theme" : "form light-theme"
        }
      >
        <div className="form-content">
          <h2>{registerContent[locale].header}</h2>
          <RegisterInput register={onRegisterHandler} />
          <p>
            {registerContent[locale].redirectText}{" "}
            <Link to="/">{registerContent[locale].redirectAnchor}</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
