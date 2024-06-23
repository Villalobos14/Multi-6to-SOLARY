//hero section principal

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-24">
      <h1 className="text-4xl sm:text-6xl lg:text-[5rem] text-center font-semibold">
        Solary Performance your 
        <span className="bg-gradient-to-r from-[#4a1fd6] to-[#ff4bff] text-transparent bg-clip-text">
          {" "}
          Statictics
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-300 max-w-3xl ">
      Solar Intelligence Pioneering Precision, Powering Progress.
      Advanced Fault Detection and Predictive
       Maintenance. With Our Cutting-Edge Technology, We Ensure Your Solar Investment 
       Thrives
      </p>
      <div className="flex justify-center my-10">
        <a
          href="/login"
          className="bg-[#7b29a4] py-3 px-4 mx-3 rounded-md"
        >
          Start for free
        </a>
        <a href="/dashboard" className="py-3 px-4 mx-3 rounded-md border bg-white bg-opacity-10 backdrop-blur">
          Documentation
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        
        
        
      </div>
    </div>
  );
};

export default HeroSection;
