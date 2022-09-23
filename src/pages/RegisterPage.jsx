import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import RegisterInput from "../components/RegisterInput/RegisterInput";
import LocaleContext from "../contexts/LocaleContext";
import { register } from "../utils/api";
import { registerContent } from "../utils/content";

const RegisterPage = () => {
  const { locale } = useContext(LocaleContext);
  const navigate = useNavigate();

  async function onRegisterHandler(user) {
    const { error } = await register(user);
    if (!error) {
      navigate("/");
    }
  }

  return (
    <section className="register-page">
      <h2>{registerContent[locale].header}</h2>
      <RegisterInput register={onRegisterHandler} />
      <p>
        {registerContent[locale].redirectText} <Link to="/">{registerContent[locale].redirectAnchor}</Link>
      </p>
    </section>
  );
};

export default RegisterPage;
