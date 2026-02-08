 
import {  Link  } from "react-router-dom"

 

const Footer = () => { 
  return (
     <footer className='h-[30vw] '>
                    <div className='px-10 flex flex-col md:flex-row md:items-center md:justify-between border-t-2 md:h-[20vw] bg-white'>
                        <div className='mb-4 md:mt-0 mt-5 md:mb-0'>
                            <img className='bg-gray-500' src="/logo.svg" alt="Logo" />
                        </div>
                        <div className='mb-4 md:mb-0'>
                            <h2 className='font-bold text-2xl pb-10'>Shop</h2>
                            <div className='flex font-semibold text-blue-500 flex-col'>
                                <Link to={'#'}>Hot deals</Link>
                                <Link to={'#'}>Categories</Link>
                                <Link to={'#'}>Brands</Link>
                                <Link to={'#'}>Rebates</Link>
                                <Link to={'#'}>Weekly discount</Link>
                            </div>
                        </div>
                        <div className='mb-4 md:mb-0'>
                            <h2 className='font-bold text-2xl pb-10'>Need help?</h2>
                            <div className='flex font-semibold text-blue-500 flex-col'>
                                <Link to={'#'}>Contact</Link>
                                <Link to={'#'}>Order tracking</Link>
                                <Link to={'#'}>FAQs</Link>
                                <Link to={'#'}>Return policy</Link>
                                <Link to={'#'}>Privacy policy</Link>
                            </div>
                        </div>
                        <div className='mb-4 md:mb-0'>
                            <h2 className='font-bold text-2xl pb-10'>Contact</h2>
                            <div className='flex font-semibold text-blue-500 flex-col'>
                                <Link to={'#'}>123 Fifth Avenue, Kathmandu, New</Link>
                                <Link to={'#'}>Road</Link>
                                <Link to={'#'}>support@info.com</Link>
                                <Link to={'#'}>9874563210</Link>
                            </div>
                        </div>
                    </div>
                    <div className={`px-10 md:h-[7vw] mt-10 h-[35vw] text-gray-300 flex justify-between items-center`}>
                        <span className='md:text-sm text-white text-[10px]'>© 2024 Electronic Store. Powered by Electronic Store</span>
                        <div className='flex items-center gap-5'>
                            <img className='h-[3vw]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkh_LDiTlmPFGl7wxdEyJVTXTSg6ni6nUDCa91XOJ3jjfvG3mrTcGKYzI7tkAw5Xv0uvY&usqp=CAU" alt="Visa" />
                            <img className='h-[3vw]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7Hs5PTz2c6EnHlTimU7la4SKSZ3xKMhWZBA&s" alt="Visa" />
                            <img className='h-[3vw]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAIOu8V2wUmLzF7cUIq0MO0caYT1lyusHXcg&s" alt="Visa" />
                        </div>
                    </div>
                </footer>
  );
};

export default Footer;
