import * as React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { ShowAlertAssistance } from '../../assets/assistances/AlertAssistance';
import LoginImage from "../../assets/login.jpg"
import logo from "../../assets/LogoVenture.png";

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
        <h2 className="text-xs font-bold tracking-widest leading-3 text-white text-opacity-100">
          A WISE QUOTE
        </h2>
        <h1 className="text-8xl leading-3 text-white mt-[508px] sm:mt-10 sm:text-8xl">
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      return ShowAlertAssistance({ title: "<strong>Campos vacíos</strong>", message: "<strong>MÁS DETALLES:</strong><br>Por favor, rellene todos los campos", status: "error", });
    }

    if (password !== confirmPassword) {
      return ShowAlertAssistance({ title: "<strong>Contraseñas no coinciden</strong>", message: "<strong>MÁS DETALLES:</strong><br>Las contraseñas no coinciden", status: "error", });
    }

    try {
      const response = await axios.post('', {
        "name": name,
        "email": email,
        "password": password,
      });
      const token = response.data.token;
      localStorage.setItem('token', JSON.stringify(token));
      if (response.data.status === 'success') navigate('/dashboard');
    } catch (error) {
      ShowAlertAssistance({ title: "<strong>Ocurrió un error</strong>", message: `<strong>MÁS DETALLES:</strong><br>${error}`, status: "error", });
      console.error('Error al enviar la solicitud:', error);
    }
  };

  return (
    <form className="flex flex-col items-center justify-center px-10 py-6 w-full text-xs bg-gradient-to-tl from-yellow-950 from-10% via-red-950 via-30% to-black to-100% text-white sm:px-5" onSubmit={handleSubmit}>
      {/* Encabezado del formulario */}
      <header className="flex justify-between gap-0 text-lg leading-6 text-center ">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="shrink-0 w-4 border-0 aspect-square mr-2 mt-1"
          />
        </Link>
        <div>Venture</div>
      </header>
      {/* Sección principal del formulario */}
      <section className="flex flex-col items-center justify-center self-stretch px-5 py-10 mt-10 sm:mt-5">
        <h2 className="mt-14 text-6xl font-medium text-center sm:mt-10 sm:text-6xl bg-gradient-to-r from-white to-yellow-600 text-transparent bg-clip-text">
          Create Account
        </h2>
        <p className="mt-5 text-sm text-center text-white">
          Regístrate para comenzar
        </p>
        {/* Campo de entrada para el nombre */}
        <label htmlFor="nameInput" className="self-start mt-5 text-base">
          Name
        </label>
        <input
          className="mt-1 px-3 py-2 rounded-md bg-slate-100 text-base text-white w-full bg-opacity-5"
          type="text"
          id="nameInput"
          placeholder="Enter your name"
          aria-label="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />
        {/* Campo de entrada para el correo electrónico */}
        <label htmlFor="emailInput" className="self-start mt-5 text-base">
          Email
        </label>
        <input
          className="mt-1 px-3 py-2 rounded-md bg-slate-100 text-base text-white w-full bg-opacity-5"
          type="email"
          id="emailInput"
          placeholder="Enter your email"
          aria-label="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* Campo de entrada para la contraseña */}
        <label htmlFor="passwordInput" className="self-start mt-5 text-base">
          Password
        </label>
        <input
          className="mt-1 px-3 py-2 rounded-md bg-slate-100 text-base text-white w-full bg-opacity-5"
          type="password"
          id="passwordInput"
          placeholder="Enter your password"
          aria-label="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* Campo de entrada para confirmar la contraseña */}
        <label htmlFor="confirmPasswordInput" className="self-start mt-5 text-base">
          Confirm Password
        </label>
        <input
          className="mt-1 px-3 py-2 rounded-md bg-slate-100 text-base text-white w-full bg-opacity-5"
          type="password"
          id="confirmPasswordInput"
          placeholder="Confirm your password"
          aria-label="Confirm your password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {/* Botón de registro */}
        <button
          className="mt-6 px-3 py-2 rounded-md bg-white text-black text-base w-full"
          type="submit"
        >
          Sign Up
        </button>
        {/* Enlace de inicio de sesión */}
        <div className="flex mt-5">
          <div className="text-sm">¿Ya tienes una cuenta?</div>
          <Link to="/login" className="ml-1 text-sm text-red-400">Inicia sesión aquí</Link>
        </div>
      </section>
    </form>
  );
}

// Componente principal que junta la sección de citas y el formulario de registro
function RegisterComponent() {
  return (
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
  );
}

export default RegisterComponent;
