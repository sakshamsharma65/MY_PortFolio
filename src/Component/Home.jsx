import React, { useEffect, useRef } from 'react';

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    // Load the Typed.js script from CDN
    const script = document.createElement('script');
    script.src = "https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js";
    script.onload = () => {
      new window.Typed(typedRef.current, {
        strings: ['Hi, I am Saksham'],
        typeSpeed: 70,
        showCursor: true,
      });
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className='text-white flex w-full justify-between items-start p-10 md:p-20'>
      <div className='md:w-2/4 md-pt-10'>
        <h1 className='text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter'>
          <span ref={typedRef} />
        </h1>

        <p className='text-sm md:text-2xl tracking-tight mt-2'>
          "Passionate developer exploring the world of Frontend Development with React, JavaScript, HTML, and CSS! 🚀 Focused on building dynamic, user-friendly web applications with clean and responsive designs."
        </p>
        <button className="mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-gray-600">
        <a href="https://www.linkedin.com/in/saksham-sharma-94615825a/" target="_blank">Let`s Connect</a>  
        </button>
      </div>
      <div>
      <img
  className="w-80 rounded-full  transform transition duration-300 hover:scale-105" style={{ boxShadow: '0 10px 25px rgba(0, 140, 255, 0.4)' }}
  src="https://media.licdn.com/dms/image/v2/D5603AQFg4V5JToS51Q/profile-displayphoto-shrink_400_400/B56ZSDGuQzGsAk-/0/1737366366411?e=1749081600&v=beta&t=br_G713gPqsyW5AIJkjAaZJxU76OydfwKia3XpgcVqM"
  alt="Saksham Profile"
/>

      </div>
    </div>
  );
};

export default Home;
