import * as React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import LoginImage from "/cover.png"
import logo from "../../assets/LogoVenture.png";
import TransitionWrapper from "./TransitionWrapper";
import Notificacion from '../../components/organismos/Notification';

// Componente para la sección de citas
function QuoteSection() {
  console.log(process.env.API); // Salida: 'https://api.miproyecto.com'

  return (
    <section className="relative flex flex-col items-start justify-center min-h-screen w-full overflow-hidden">
      <img
        src={LoginImage}
        alt="login"
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="relative z-10 sm:px-5 mt-80">
        <h2 className="pl-2 text-xs font-bold tracking-widest leading-3 text-white text-opacity-100">
          A WISE QUOTE
        </h2>
        <h1 className="text-8xl font-medium leading-3 text-white mt-[508px] sm:mt-10 sm:text-8xl">
          Get in to it
        </h1>
        <p className="mt-14 ml-2.5 text-sm leading-5 text-white text-opacity-90 w-[263px] sm:mt-10">
          You can get everything you want if you work hard, trust the process, and stick to the plan.
        </p>
      </div>
    </section>
  );
}

// Componente para el formulario de login
function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [notificaciones, setNotificaciones] = useState([]);
  const [show, setShow] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setShow(true);
      setNotificaciones(prevNotificaciones => [...prevNotificaciones, {
        title: "Campos vacíos",
        subtitle: "Por favor, rellene todos los campos",
        icon: false
      }]);
      return;
    }

    try {
      const response = await axios.post(process.env.API+"api/auth/login", {
        "email": email,
        "password": password,
      });
      const token = response.data.token;
      if (remember) localStorage.setItem('token', token);
      else sessionStorage.setItem('token', token);
      if (response.data.success) {
        navigate('/dashboard');
        setShow(true);
        setNotificaciones(prevNotificaciones => [...prevNotificaciones, {
          title: "Login exitoso",
          subtitle: "Ha ingresado correctamente",
          icon: true
        }]);
      }
    } catch (error) {
      setShow(true);
      setNotificaciones(prevNotificaciones => [...prevNotificaciones, {
        title: "Ocurrió un error",
        subtitle: `${error.response.data.message}`,
        icon: false
      }]);
      console.error('Error al enviar la solicitud:', error);
    }
  };

  return (
    <>
      <form className="flex flex-col items-center justify-center px-10 py-6 w-full text-xs bg-[#101010] text-white sm:px-5" onSubmit={handleSubmit}>
        <header className="flex justify-between gap-0 text-lg leading-6 text-center ">
          <Link to="/">
            <img
              src={logo}
              alt="login"
              className="shrink-0 w-4 border-0 aspect-square mr-2 mt-1"
            />
          </Link>
          <div className="font-light text-xl pb-2">Venture</div>
        </header>
        <section className="flex flex-col items-center  self-stretch px-5 py-5 mt-10 sm:mt-5">
          <h2 className=" pt-10 pb-5 mt-14 text-6xl font-medium text-center sm:mt-10 sm:text-6xl bg-gradient-to-r from-[#fefefe] to-white text-transparent bg-clip-text">
            Welcome back
          </h2>
          <p className="mt-5 font-light  text-xl text-center text-white pb-10 ">
            Inicia sesión para poder ingresar
          </p>
          <label htmlFor="emailInput" className="w-full pl-20 mt-5 text-base">
            Email
          </label>
          <input
            className="mt-1 px-3 py-2 rounded-md bg-slate-100 border-none text-base text-white w-3/4 bg-opacity-15  "
            type="email"
            id="emailInput"
            placeholder="Enter your email"
            aria-label="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="passwordInput" className=" w-full pl-20 self-start mt-5 text-base">
            Password
          </label>
          <input
            className="mt-1 px-3 py-2 rounded-md bg-slate-100 border-none text-base text-white w-3/4 bg-opacity-15  "
            type="password"
            id="passwordInput"
            placeholder="Enter your password"
            aria-label="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="justify-items-start flex justify-start w-3/4 ">
            <div className="mt-5 ">
              <input 
                type="checkbox"
                checked={remember}
                onChange={() => setRemember(prevState => !prevState)}
                className="cursor-pointer  "
              />
              <label htmlFor="rememberMe" className="ml-2 cursor-pointer" onClick={() => setRemember(prevState => !prevState)}>Remember me</label>
            </div>
          </div>
          <button
            className="mt-6 px-3 py-2  rounded-md bg-white text-black text-base w-3/4"
            type="submit"
          >
            Log in
          </button>
          <div className="flex mt-5 ">
            <div className="text-sm">¿No tienes una cuenta?</div>
            <Link to="/register" className="ml-1 text-sm text-purple-400">Regístrate aquí</Link>
          </div>
        </section>
      </form>
      {notificaciones.map((notificacion, index) => (
        <Notificacion
          key={index}
          isActive={show}
          title={notificacion.title}
          subtitle={notificacion.subtitle}
          icon={notificacion.icon}
        />
      ))}
    </>
  );
}

// Componente principal que junta la sección de citas y el formulario de login
function MyComponent() {
  return (
    <TransitionWrapper>
      <div className="flex min-h-screen overflow-hidden flex-col md:flex-row">
        <div className="flex w-full md:w-6/12">
          <QuoteSection />
        </div>
        <div className="flex w-full md:w-6/12">
          <LoginForm />
        </div>
      </div>
    </TransitionWrapper>
  );
}

export default MyComponent;
