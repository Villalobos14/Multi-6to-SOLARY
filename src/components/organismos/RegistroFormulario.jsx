import * as React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Notificacion from '../../components/organismos/Notification';
import LoginImage from "/cover.png"
import logo from "../../assets/LogoVenture.png";
import TransitionWrapper from "./TransitionWrapper";

// Componente para la sección de citas
function QuoteSection() {
  return (
    <section className="relative flex flex-col items-start justify-center min-h-screen w-full overflow-hidden">
      {/* Imagen de fondo que cubre toda la sección */}
      <img
        src={LoginImage}
        alt="login"
        className="absolute inset-0 object-cover w-full h-full"
      />
      {/* Contenido de la sección de citas */}
      <div className="relative z-10 p-6 sm:px-5 mt-80">
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

// Componente para el formulario de registro
function RegisterForm() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [notificaciones, setNotificaciones] = useState([]);
  const [serialNumber,setSerialNumber]=useState('')
  const [show, setShow] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword || !serialNumber) {
      setShow(true);
      setNotificaciones(prevNotificaciones => [...prevNotificaciones, {
        title: "Campos vacíos",
        subtitle: "Por favor, rellene todos los campos",
        icon: false
      }]);
      return;
    }

    if (password !== confirmPassword) {
      setShow(true);
      setNotificaciones(prevNotificaciones => [...prevNotificaciones, {
        title: "Contraseñas no coinciden",
        subtitle: "Las contraseñas no coinciden",
        icon: false
      }]);
      return;
    }

    try {
      const response = await axios.post(process.env.API+"api/auth/signup", {
        "name":name,
        "email":email,
        "password":password,
        "codigoproducto":serialNumber
      });
      
      
      if (response.data.success) {
        navigate('/login');
        setShow(true);
        setNotificaciones(prevNotificaciones => [...prevNotificaciones, {
          title: "Registro exitoso",
          subtitle: "Ha sido registrado exitosamente",
          icon: true
        }]);
      }
    } catch (error) {
      setShow(true);
      setNotificaciones(prevNotificaciones => [...prevNotificaciones, {
        title: "Ocurrió un error",
        subtitle: `${error}`,
        icon: false
      }]);
      console.error('Error al enviar la solicitud:', error);
    }
  };

  return (
    <form className="flex flex-col items-center justify-center px-10 py-6 w-full text-xs bg-[#101010] text-white sm:px-5" onSubmit={handleSubmit}>
      {/* Encabezado del formulario */}
      <header className="flex justify-between gap-0 text-lg leading-6 text-center ">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="shrink-0 w-4 border-0 aspect-square mr-2 mt-1"
          />
        </Link>
        <div className="font-light text-xl ">Venture</div>
      </header>
      {/* Sección principal del formulario */}
      <section className="flex flex-col items-center justify-center self-stretch px-5   sm:mt-5">
        <h2 className=" text-6xl font-medium text-center sm: sm:text-6xl bg-gradient-to-r from-white to-white text-transparent bg-clip-text">
          Create Account
        </h2>
        <p className="mt-5 font-light  text-xl text-center text-white">
          Regístrate para comenzar
        </p>
        {/* Campo de entrada para el nombre */}
        <label htmlFor="nameInput" className="self-start mt-5 text-base ml-20 ">
          Serial number
        </label>
        <input
          className="mt-1 px-3 py-2 rounded-md bg-slate-100 text-base border-none text-white w-3/4 bg-opacity-15"
          type="text"
          id="nameInput"
          placeholder="122JBJVO14"
          aria-label="122JBJVO14"
          onChange={(e) => setSerialNumber(e.target.value)}
        />
        {/* Campo de entrada para el nombre */}
        <label htmlFor="nameInput" className="self-start mt-5 text-base ml-20 ">
          Name
        </label>
        <input
          className="mt-1 px-3 py-2 rounded-md bg-slate-100 text-base border-none text-white w-3/4 bg-opacity-15"
          type="text"
          id="nameInput"
          placeholder="Alejandro Villalobos"
          aria-label="Alejandro Villalobos"
          onChange={(e) => setName(e.target.value)}
        />
        {/* Campo de entrada para el correo electrónico */}
        <label htmlFor="emailInput" className="self-start mt-5 text-base ml-20">
          Email
        </label>
        <input
          className="mt-1 px-3 py-2 rounded-md bg-slate-100 text-base border-none text-white w-3/4 bg-opacity-15"
          type="email"
          id="emailInput"
          placeholder="Alejandro@mgmail.com"
          aria-label="Alejandro@mgmail.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* Campo de entrada para la contraseña */}
        <label htmlFor="passwordInput" className="self-start mt-5 text-base ml-20">
          Password
        </label>
        <input
          className="mt-1 px-3 py-2 rounded-md bg-slate-100 text-base border-none text-white w-3/4 bg-opacity-15"
          type="password"
          id="passwordInput"
          placeholder="*******"
          aria-label="******"
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* Campo de entrada para confirmar la contraseña */}
        <label htmlFor="confirmPasswordInput" className="self-start mt-5 text-base ml-20">
          Confirm Password
        </label>
        <input
          className="mt-1 px-3 py-2 rounded-md bg-slate-100 text-base border-none text-white w-3/4 bg-opacity-15"
          type="password"
          id="confirmPasswordInput"
          placeholder="*******"
          aria-label="*******"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {/* Botón de registro */}
        <button
          className="mt-6 px-3 py-2 rounded-md bg-white text-black text-base w-3/4"
          type="submit"
        >
          Sign Up
        </button>
        {/* Enlace de inicio de sesión */}
        <div className="flex mt-5">
          <div className="text-sm">¿Ya tienes una cuenta?</div>
          <Link to="/login" className="ml-1 text-sm text-purple-400">Inicia sesión aquí</Link>
        </div>
      </section>
      {notificaciones.map((notificacion, index) => (
        <Notificacion
          key={index}
          isActive={show}
          title={notificacion.title}
          subtitle={notificacion.subtitle}
          icon={notificacion.icon}
        />
      ))}
    </form>
  );
}

// Componente principal que junta la sección de citas y el formulario de registro
function RegisterComponent() {
  return (
    <TransitionWrapper>
      <div className="flex min-h-screen overflow-hidden flex-col md:flex-row">
        {/* Contenedor de la sección de citas */}
        <div className="flex w-full md:w-6/12">
          <QuoteSection />
        </div>
        {/* Contenedor del formulario de registro */}
        <div className="flex w-full md:w-6/12">
          <RegisterForm />
        </div>
      </div>
    </TransitionWrapper>
  );
}

export default RegisterComponent;
