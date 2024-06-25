import  { useState } from 'react';
import Logo from '../../../src/assets/svg/Group 211.svg';
import { IoSearch } from 'react-icons/io5';
import { TbWorld } from 'react-icons/tb';
import Zoom from 'react-reveal/Zoom';

function Navbar() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className="absolute top-0 left-0 w-full bg-transparent mt-2" dir="ltr">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li><a className="text-secondary transform  hover:text-secondary hover:scale-150 transition-all duration-300" href="#"> Home </a></li>
                <li><a className="text-primary transform  hover:text-secondary hover:scale-150 transition-all duration-300" href="#"> About Us </a></li>
                <li><a className="text-primary transform  hover:text-secondary hover:scale-125 transition-all duration-300" href="#"> Admissions </a></li>
                <li><a className="text-primary transform  hover:text-secondary hover:scale-125 transition-all duration-300" href="#"> Academics </a></li>
                <li><a className="text-primary transform  hover:text-secondary hover:scale-125 transition-all duration-300" href="#"> News </a></li>
                <li><a className="text-primary transform  hover:text-secondary hover:scale-125 transition-all duration-300" href="#"> Contact Us </a></li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center gap-6">
            <div className="sm:flex flex justify-center items-center sm:gap-4">
              <IoSearch size={18} color="white" className="mr-7 cursor-pointer hover:scale-125 transition-all duration-300" />
              <div className="border rounded-full flex justify-center items-center px-2 p-2 gap-2 bg-white cursor-pointer">
                <TbWorld color="black" size={18} className='hover:scale-125 transition-all duration-300' />
                <span className="text-title text-xs font-semibold">AR</span>
              </div>
            </div>
            <div className="block md:hidden">
              <button onClick={toggleDrawer} className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Drawer Menu */}
      {isDrawerOpen && (
        <div className="fixed lg:hidden md:hidden inset-0 z-40 bg-slate-500 bg-opacity-50" onClick={toggleDrawer}>
          <div className="absolute top-0 right-0 w-64 bg-secondary-900 h-full shadow-lg flex flex-col p-6 space-y-4" onClick={(e) => e.stopPropagation()}>
            <button onClick={toggleDrawer} className="self-end p-2 text-white transition hover:text-secondary-800 hover:rotate-180">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <nav>
              <ul className="flex flex-col gap-4 text-sm">
                <Zoom right >
                <li><a className="text-primary transition hover:text-secondary" href="#"> Home </a></li>
                <li><a className="text-primary transition hover:text-secondary" href="#"> About Us </a></li>
                <li><a className="text-primary transition hover:text-secondary" href="#"> Admissions </a></li>
                <li><a className="text-primary transition hover:text-secondary" href="#"> Academics </a></li>
                <li><a className="text-primary transition hover:text-secondary" href="#"> News </a></li>
                <li><a className="text-primary transition hover:text-secondary" href="#"> Contact Us </a></li>
                </Zoom>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
