import React, { useState } from "react";
import { login } from "../../services/users";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import {
    ContainerFormLogin,
    ContainerInputsForm,
    InputForm,
    ContainerInfoLogin,
    ButtonLogin
} from "./Styles";
import logo from "../../_assets/logo.png";
import Loading from '../Loading/Loading';

export const LoginForm = () => {
  const [form, onChange, clear] = useForm({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmitLogin = async (event) => {
    event.preventDefault();
  
    console.log("Antes de setIsLoading(true)");
    setIsLoading(true);
  
    try {
      await login(form, navigate);
    } catch (error) {
      console.error(error);
    } finally {
      console.log("Após setIsLoading(false)");
      setIsLoading(false);
    }
  };
  

  return (
    <ContainerFormLogin>
      {isLoading && <Loading />}
      <ContainerInputsForm>
        <InputForm>
          <label>Email</label>
          <input
            type="text"
            id="email"
            value={form.email}
            onChange={(e) => onChange(e, "email")}
            name="email"
          />
        </InputForm>
        <InputForm>
          <label>Password</label>
          <input
            type="password"
            id="password"
            value={form.password}
            onChange={(e) => onChange(e, "password")}
            name="password"
          />
        </InputForm>
        <ButtonLogin onClick={onSubmitLogin}>Login</ButtonLogin>
      </ContainerInputsForm>

      <ContainerInfoLogin>
        <h1>Faça seu Login</h1>
        <p>Desfrute das funcionalidades incríveis para ter uma experiência surreal ao escutar suas músicas favoritas</p>
        <img src={logo} alt="logo-login"/>
      </ContainerInfoLogin>
    </ContainerFormLogin>
  );
};
