import * as React from "react";

// Componente para la sección de citas
function QuoteSection() {
  return (
    <section className="relative flex flex-col items-start overflow-hidden min-h-screen w-full">
      {/* Imagen de fondo que cubre toda la sección */}
      {/* Cambia la ruta de src para usar tu propia imagen local */}
      <img
        loading="lazy"
        src="RUTA_DE_TU_IMAGEN_LOCAL"
        className="absolute inset-0 w-full h-full object-cover"
        alt=""
      />
      {/* Contenido de la sección de citas */}
      <div className="relative p-6 max-md:px-5 max-md:mt-3.5">
        <h2 className="text-xs font-bold tracking-widest leading-3 text-white text-opacity-80">
          A WISE QUOTE
        </h2>
        <h1 className="text-8xl leading-3 text-white mt-[508px] max-md:mt-10 max-md:text-4xl">
          Get in to it
        </h1>
        <p className="mt-14 ml-2.5 text-sm leading-5 text-white text-opacity-90 w-[263px] max-md:mt-10">
          You can get everything you want if you work hard, trust the process, and stick to the plan.
        </p>
      </div>
    </section>
  );
}

// Componente para el formulario de inicio de sesión
function LoginForm() {
  return (
    <form className="flex flex-col items-center justify-center px-10 py-6 w-full text-xs bg-white text-neutral-900 max-md:px-5">
      {/* Encabezado del formulario */}
      <header className="flex justify-between gap-0 text-lg leading-6 text-center">
        {/* Cambia la ruta de src para usar tu propia imagen local */}
        <img
          loading="lazy"
          src="RUTA_DE_TU_IMAGEN_LOCAL"
          className="shrink-0 w-4 border-0 aspect-square"
          alt=""
        />
        <div>Venture</div>
      </header>
      {/* Sección principal del formulario */}
      <section className="flex flex-col items-center justify-center self-stretch px-5 py-20 mt-20 max-md:mt-10">
        <h2 className="mt-14 text-6xl font-medium text-center max-md:mt-10 max-md:text-4xl">
          Welcome Back
        </h2>
        <p className="mt-5 text-sm text-center text-neutral-700">
          Enter your email and password to access your account
        </p>
        {/* Campo de entrada para el correo electrónico */}
        <label htmlFor="emailInput" className="self-start mt-16 text-base max-md:mt-10">
          Email
        </label>
        <input
          className="mt-1 px-3 py-2 rounded-md bg-slate-100 text-base text-neutral-900 w-full"
          type="email"
          id="emailInput"
          placeholder="Enter your email"
          aria-label="Enter your email"
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
        />
        {/* Opciones adicionales debajo de los campos de entrada */}
        <div className="flex justify-between gap-1.5 mt-6 text-neutral-700 w-full">
          <label htmlFor="rememberMe" className="flex gap-1 items-center text-base">
            <input
              type="checkbox"
              id="rememberMe"
              className="shrink-0 h-4 w-4 rounded-sm border border-stone-300"
            />
            Remember me
          </label>
          <button className="text-button" type="button">
            Forgot Password
          </button>
        </div>
        {/* Botón de inicio de sesión */}
        <button
          className="mt-6 px-3 py-2 rounded-md bg-neutral-900 text-white text-base w-full"
          type="submit"
        >
          Sign In
        </button>
        {/* Enlace para registrarse */}
        <a href="/sign-up" className="mt-4 font-medium text-center w-full block text-neutral-900">
          <span className="text-neutral-700">Don’t have an account?</span>{" "}
          Sign Up
        </a>
      </section>
    </form>
  );
}

// Componente principal que junta la sección de citas y el formulario de inicio de sesión
function MyComponent() {
  return (
    <div className="flex min-h-screen overflow-hidden">
      {/* Contenedor de la sección de citas */}
      <div className="flex w-6/12 max-md:w-full">
        <QuoteSection />
      </div>
      {/* Contenedor del formulario de inicio de sesión */}
      <div className="flex w-6/12 max-md:w-full">
        <LoginForm />
      </div>
    </div>
  );
}

export default MyComponent;



{/*  */}
































{/*  



import * as React from "react";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

// Componente para la sección de citas
function QuoteSection() {
  return (
    <section className="relative flex flex-col items-start overflow-hidden min-h-screen w-full">
      <img
        loading="lazy"
        src="path/to/your/local/image.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        alt=""
      />
      <div className="relative p-6 max-md:px-5 max-md:mt-3.5">
        <h2 className="text-xs font-bold tracking-widest leading-3 text-white text-opacity-80">
          A WISE QUOTE
        </h2>
        <h1 className="text-8xl leading-3 text-white mt-[508px] max-md:mt-10 max-md:text-4xl">
          Get in to it
        </h1>
        <p className="mt-14 ml-2.5 text-sm leading-5 text-white text-opacity-90 w-[263px] max-md:mt-10">
          You can get everything you want if you work hard, trust the process, and stick to the plan.
        </p>
      </div>
    </section>
  );
}

// Componente para el formulario de inicio de sesión
function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Por favor, rellene todos los campos");
      return;
    }
    try {
      const response = await axios.post('http://34.197.57.0/auth/login', {
        email: email,
        password: password,
      });
      const token = response.data.token;
      if (remember) localStorage.setItem('token', JSON.stringify(token));
      else sessionStorage.setItem('token', JSON.stringify(token));
      if (response.data.status === 'success') navigate('/dashboard');
    } catch (error) {
      setError("Ocurrió un error: " + error.message);
      console.error('Error al enviar la solicitud:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center px-10 py-6 w-full text-xs bg-white text-neutral-900 max-md:px-5">
      <header className="flex justify-between gap-0 text-lg leading-6 text-center">
        <img
          loading="lazy"
          src="path/to/your/local/logo.png"
          className="shrink-0 w-4 border-0 aspect-square"
          alt=""
        />
        <div>Venture</div>
      </header>
      <section className="flex flex-col items-center justify-center self-stretch px-5 py-20 mt-20 max-md:mt-10">
        <h2 className="mt-14 text-6xl font-medium text-center max-md:mt-10 max-md:text-4xl">
          Welcome Back
        </h2>
        <p className="mt-5 text-sm text-center text-neutral-700">
          Enter your email and password to access your account
        </p>
        <label htmlFor="emailInput" className="self-start mt-16 text-base max-md:mt-10">
          Email
        </label>
        <input
          className="mt-1 px-3 py-2 rounded-md bg-slate-100 text-base text-neutral-900 w-full"
          type="email"
          id="emailInput"
          placeholder="Enter your email"
          aria-label="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="passwordInput" className="self-start mt-5 text-base">
          Password
        </label>
        <input
          className="mt-1 px-3 py-2 rounded-md bg-slate-100 text-base text-neutral-900 w-full"
          type="password"
          id="passwordInput"
          placeholder="Enter your password"
          aria-label="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="mt-3 text-red-500">{error}</p>}
        <div className="flex justify-between gap-1.5 mt-6 text-neutral-700 w-full">
          <label htmlFor="rememberMe" className="flex gap-1 items-center text-base">
            <input
              type="checkbox"
              id="rememberMe"
              className="shrink-0 h-4 w-4 rounded-sm border border-stone-300"
              checked={remember}
              onChange={() => setRemember(!remember)}
            />
            Remember me
          </label>
          <button className="text-button" type="button">
            Forgot Password
          </button>
        </div>
        <button
          className="mt-6 px-3 py-2 rounded-md bg-neutral-900 text-white text-base w-full"
          type="submit"
        >
          Sign In
        </button>
        <Link to="/register" className="mt-4 font-medium text-center w-full block text-neutral-900">
          <span className="text-neutral-700">Don’t have an account?</span>{" "}
          Sign Up
        </Link>
      </section>
    </form>
  );
}

// Componente principal que junta la sección de citas y el formulario de inicio de sesión
function MyComponent() {
  return (
    <div className="flex min-h-screen overflow-hidden">
      <div className="flex w-6/12 max-md:w-full">
        <QuoteSection />
      </div>
      <div className="flex w-6/12 max-md:w-full">
        <LoginForm />
      </div>
    </div>
  );
}

export default MyComponent;
En este código:

LoginForm: He añadido la lógica de inicio de sesión con axios y useNavigate de react-router-dom.
handleSubmit: Valida los campos del formulario y realiza una solicitud POST a la URL de inicio de sesión.
Estado: Utiliza useState para manejar el estado de los campos de entrada y el checkbox "Remember me".
Navegación: Utiliza useNavigate para redirigir al usuario después de un inicio de sesión exitoso.
Manejo de errores: Muestra un mensaje de error si hay problemas con el inicio de sesión.
Reemplaza "path/to/your/local/image.jpg" y "path/to/your/local/logo.png" con las rutas a tus imágenes locales. Ahora tienes un componente de inicio de sesión completamente funcional y listo para implementar la lógica de autenticación.
*/}