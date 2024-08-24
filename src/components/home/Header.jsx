import { Link } from "react-router-dom";
import { Icons } from "../../assets/icons";
// import { IoClose } from "react-icons/io5";
// import { MdMenu } from "react-icons/md";
import { useState } from "react";

const Header = ({onChange, onSubmit}) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);


  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <header className="text-white flex flex-col relative">
      <div className="max-w-[1320px] px-4 flex items-center justify-between py-[30px] mx-auto w-full relative">
        <div className="flex items-center gap-x-9">
          <a href=""
            className="max-w-[120px] lg:max-w-[160px] md:max-w-[140px]"
          >
            <img src={Icons.logo} alt="site logo" />
          </a>
          <nav
            className={`lg:relative lg:right-auto lg:top-auto lg:bg-transparent lg:p-0 fixed right-0 top-0 bg-errie-black h-full z-50 p-5 sm:w-[300px] w-full translate-alls ease-in-out duration-300 shadow-navbar lg:shadow-none lg:translate-x-0 ${
              isNavbarOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-end mb-10 lg:hidden hover:opacity-80 transition-all duration-300 ease-in-out">
              <button type="button" onClick={toggleNavbar}>
                {/* <IoClose size={32} /> */}
              </button>
            </div>
            <ul
              className={`flex lg:flex-row lg:items-center xl:gap-x-12 lg:gap-x-10 gap-x-8 flex-col gap-y-5 text-center`}
            >
            </ul>
            <div className="flex flex-col gap-y-5 items-center lg:hidden mt-6">
              <a href=""
                className="text-base font-semibold text-white hover:text-risd-blue transition-all duration-300 ease-in-out"
              >
                About
              </a>
            </div>
          </nav>
        </div>
        <button
          type="button"
          className="lg:hidden hover:opacity-80 duration-300 ease-in-out translate-all"
          onClick={toggleNavbar}
        >
          {/* <MdMenu size={32} /> */}
        </button>
      </div>

      <div className="flex flex-col items-center justify-center max-w-[1020px] mx-auto text-center font-montserrat flex-1 relative z-10 mt-[100px] px-4">
        <h1 className="text-white font-bold xl:text-[64px] lg:text-5xl text-4xl leading-[1.25]">
          Bringing TikToks your{" "}
          <span className="gradi-theme-text">local storage</span>
        </h1>
        <p className="lg:text-xl md:text-lg text-base my-[46px]">
          Download Tiktok Music and Videos without watermark for free.
        </p>
        <form className="w-full">
          <div className="flex flex-col md:flex-row items-stretch gap-[14px] md:max-w-[610px] mx-auto">
            <input
              type="text"
              placeholder="Enter the tiktok url"
              // value={inputUrl}
              onChange={onChange}
              className="lg:min-h-[56px] min-h-[50px] px-4 rounded-lg bg-transparent border-[1px] border-white w-full placeholder:text-cadet-gray outline-0 font-source-sans lg:text-base text-sm"
            />
            {/* <button onClick={onSubmit} type="submit" className="bg-risd-blue rounded-lg lg:min-h-[56px] min-h-[50px] text-nowrap text-base px-5 font-semibold hover:scale-105 transition-all ease-in-out duration-300">
              Download
            </button> */}
          </div>
        </form>
      </div>
    </header>
  );
};

export default Header;
