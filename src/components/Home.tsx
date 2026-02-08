const Home = () => {
  return (
    <div className='px-10 h-screen relative bg-[url(/hero-image.jpg)] bg-center md:bg-cover'>
                    <div className='p-5 flex flex-col items-start pt-16 space-y-5 absolute top-[50%] md:top-14 right-3 bg-white md:h-100 md:w-95 w-85'>
                        <img src="/images/brand-logo.png" alt="" />
                        <h1 className='md:text-4xl text-[20px] text-gray-500 font-bold'>The best home entertainment <br /> system is here</h1>
                        <p className='text-gray-500'>Sit diam odio eget rhoncus volutpat est nibh velit posuere egestas.</p>
                        <button className='font-semibold text-blue-500'>Shop now</button>
                    </div>
                </div>

  );
};

export default Home;
