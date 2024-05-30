//register

import * as React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { ShowAlertAssistance } from '../../assets/assistances/AlertAssistance';


// Componente para la sección de citas
function QuoteSection() {
  return (
    <section className="relative flex flex-col items-start overflow-hidden min-h-screen w-full">
      {/* Imagen de fondo que cubre toda la sección */}
      <img
        loading="lazy"
        src="RUTA_DE_TU_IMAGEN_LOCAL"
        className="absolute inset-0 w-full h-full object-cover"
        alt=""
      />
      {/* Contenido de la sección de citas */}
      <div className="relative p-6 text-black sm:px-5 sm:mt-3.5">
        <h2 className="text-xs font-bold tracking-widest leading-3 text-opacity-80">
          A WISE QUOTE
        </h2>
        <h1 className="text-8xl leading-3 mt-[508px] sm:mt-10 sm:text-4xl">
          Get in to it
        </h1>
        <p className="mt-14 ml-2.5 text-sm leading-5 text-opacity-90 w-[263px] sm:mt-10">
          You can get everything you want if you work hard, trust the process, and stick to the plan.
        </p>
      </div>
    </section>
  );
}

// Componente para el formulario de registro
function RegisterForm() {
  const navigate = useNavigate();
  const [dictionary, setDictionary] = useState({
    email: "",
    password: "",
    name: "",
    lastname: "",
  });
  const [remember, setRemember] = useState(false);
  const [secondPart, setSecondPart] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!dictionary.email || !dictionary.password || !dictionary.name || !dictionary.lastname) {
      return ShowAlertAssistance({
        title: "<strong>Campos vacíos</strong>",
        message: "<strong>MÁS DETALLES:</strong><br>Por favor, rellene todos los campos",
        status: "error",
      });
    }
    try {
      const response = await axios.post('http://34.197.57.0/users/register', {
        email: dictionary.email,
        password: dictionary.password,
        name: dictionary.name,
        lastname: dictionary.lastname,
      });
      console.log('Respuesta del servidor:', response.data);
      if (response.data.status === 200 || response.data.status === 201) {
        navigate('/dashboard');
      }
    } catch (error) {
      ShowAlertAssistance({
        title: "<strong>Ocurrió un error</strong>",
        message: `<strong>MÁS DETALLES:</strong><br>${error}`,
        status: "error",
      });
      console.error('Error al enviar la solicitud:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center px-10 py-6 w-full text-xs bg-white text-neutral-900 sm:px-5">
      {/* Encabezado del formulario */}
      <header className="flex justify-between gap-0 text-lg leading-6 text-center">
        <Link to="/">
          <img
            loading="lazy"
            src="RUTA_DE_TU_IMAGEN_LOCAL"
            className="shrink-0 w-4 border-0 aspect-square"
            alt=""
          />
        </Link>
        <div>Venture</div>
      </header>
      {/* Sección principal del formulario */}
      <section className="flex flex-col items-center justify-center self-stretch px-5 py-10 mt-10 sm:mt-5">
        <h2 className="mt-14 text-6xl font-medium text-center sm:mt-10 sm:text-4xl">
          Create an Account
        </h2>
        <p className="mt-5 text-sm text-center text-neutral-700">
          Enter your details to create your account
        </p>
        {/* Campo de entrada para el nombre */}
        <label htmlFor="firstNameInput" className="self-start mt-10 text-base sm:mt-5">
          First Name
        </label>
        <input
          className="mt-1 px-3 py-2 rounded-md bg-slate-100 text-base text-neutral-900 w-full"
          type="text"
          id="firstNameInput"
          placeholder="Enter your first name"
          aria-label="Enter your first name"
          onChange={(e) => {
            setDictionary((prevState) => ({
              ...prevState,
              name: e.target.value,
            }));
          }}
        />
        {/* Campo de entrada para los apellidos */}
        <label htmlFor="lastNameInput" className="self-start mt-5 text-base">
          Last Name
        </label>
        <input
          className="mt-1 px-3 py-2 rounded-md bg-slate-100 text-base text-neutral-900 w-full"
          type="text"
          id="lastNameInput"
          placeholder="Enter your last name"
          aria-label="Enter your last name"
          onChange={(e) => {
            setDictionary((prevState) => ({
              ...prevState,
              lastname: e.target.value,
            }));
          }}
        />
        {/* Campo de entrada para el correo electrónico */}
        <label htmlFor="emailInput" className="self-start mt-5 text-base">
          Email
        </label>
        <input
          className="mt-1 px-3 py-2 rounded-md bg-slate-100 text-base text-neutral-900 w-full"
          type="email"
          id="emailInput"
          placeholder="Enter your email"
          aria-label="Enter your email"
          onChange={(e) => {
            setDictionary((prevState) => ({
              ...prevState,
              email: e.target.value,
            }));
          }}
        />
        {/* Campo de entrada para la contraseña */}
        <label htmlFor="passwordInput" className="self-start mt-5 text-base">
          Password
        </label>
        <input
          className="mt-1 px-3 py-2 rounded-md bg-slate-100 text-base text-neutral-900 w-full"
          type="password"
          id="passwordInput"
          placeholder="Enter your password"
          aria-label="Enter your password"
          onChange={(e) => {
            setDictionary((prevState) => ({
              ...prevState,
              password: e.target.value,
            }));
          }}
        />
        {/* Recordarme */}
        <div className="flex items-center mt-5">
          <input
            type="checkbox"
            id="rememberMe"
            className="mr-2"
            checked={remember}
            onChange={() => setRemember((prevState) => !prevState)}
          />
          <label htmlFor="rememberMe" className="text-sm cursor-pointer">Remember me</label>
        </div>
        {/* Botón de registro */}
        <button
          className="mt-6 px-3 py-2 rounded-md bg-neutral-900 text-white text-base w-full"
          type="submit"
        >
          Sign Up
        </button>
        <div className="mt-5 text-sm">
          <Link to="/login" className="text-neutral-900 hover:underline">Already have an account? Sign in here</Link>
        </div>
      </section>
    </form>
  );
}

// Componente principal que junta la sección de citas y el formulario de registro
function MyComponent() {
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

export default MyComponent;
