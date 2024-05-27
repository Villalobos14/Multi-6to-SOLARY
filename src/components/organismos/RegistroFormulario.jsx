import React from "react";

const Navbar = () => {
  const navItems = ["first dscs", "Second wdwd", "third dwd", "fourth", "fivth dsdsd"];
  return (
    <header className="flex gap-5 justify-between items-center self-stretch w-full max-md:flex-wrap max-md:max-w-full">
      <h1 className="self-stretch text-2xl font-medium">Solary</h1>
      <nav className="flex gap-5 self-stretch py-1 my-auto text-lg max-md:flex-wrap">
        {navItems.map((item, index) => (
          <a key={index} href="#" className="grow">
            {item}
          </a>
        ))}
      </nav>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1888bcc1e8459e918fcfe749f0441b35e7cf37d0bc32ac10efb2d77453e0d63b?apiKey=3e2df49d66f0474aaecc98292f644ee5&"
        alt="Serendale Logo"
        className="shrink-0 self-stretch my-auto w-32 max-w-full aspect-[6.25]"
      />
    </header>
  );
};

const MainContent = () => (
  <main className="flex flex-col items-center w-full max-w-[1024px] max-md:max-w-full mt-10">
    <section className="mt-24 text-6xl font-medium tracking-widest text-center max-md:mt-10 max-md:max-w-full max-md:text-4xl">
      <h2 className="text-6xl font-medium tracking-widest max-md:text-4xl">the best way to keep it</h2>
      <h2 className="text-6xl font-medium tracking-widest max-md:text-4xl">on eye.</h2>
    </section>
    <section className="mt-6 text-lg tracking-wider leading-8 text-center w-[723px] max-md:max-w-full">
      <p>
        Our technology performs fas and guarantees data security. Proof of Stake, its
        consensus algorithm enables unlimited speeds make it happnd now and come to try it.
      </p>
    </section>
    <section className="flex gap-3 mt-10 text-lg text-center">
      <button className="justify-center px-8 py-2 bg-black border-2 border-white border-solid rounded-full max-md:px-5">
        Get started
      </button>
      <button className="justify-center px-8 py-2whitespace-nowrap bg-black border-2 border-white border-solid rounded-full max-md:px-5">
        Ecosystems
      </button>
    </section>
  </main>
);

const MyComponent = () => (
  <div className="min-h-screen flex flex-col items-center px-16 pt-12 pb-20 text-white bg-black max-md:px-5">
    <Navbar />
    <MainContent />
  </div>
);

export default MyComponent;