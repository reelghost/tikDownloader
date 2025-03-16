import { Link } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"
import { Icons } from "../../assets/icons";
import { IoClose } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import { useState } from "react";

const Header = ({onChange, onSubmit}) => {
  return (
    <header className="text-white flex flex-col">
      <div className="max-w-[1320px] px-4 flex items-center justify-center py-2 md:py-[6px] mx-auto w-full relative">
        <div className="flex items-center gap-x-9">
          <a href="https://github.com/reelghost"
            target="_blank"
            rel="noopener noreferrer"
            className="max-w-[120px] lg:max-w-[160px] md:max-w-[140px]"
          >
            <img src={Icons.logo} alt="site logo" />
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center max-w-[1020px] mx-auto text-center font-montserrat flex-1 relative z-10 mt-[30px] px-4">
        <h1 className="text-white font-bold xl:text-[64px] lg:text-5xl text-4xl leading-[1.25]">
          Bringing TikToks to your{" "}
          <span className="gradi-theme-text">local storage</span>
        </h1>
        <p className="lg:text-xl md:text-lg text-base my-[46px]">
          Download Tiktok Music and Videos without watermark for free.
        </p>
        <form className="w-full">
          <div className="flex flex-col md:flex-row items-stretch gap-[14px] md:max-w-[610px] mx-auto">
            <input
              type="text"
              placeholder="Paste the Tiktok link"
              // value={inputUrl}
              onChange={onChange}
              className="lg:min-h-[56px] min-h-[50px] px-4 rounded-lg bg-transparent border-[1px] border-white w-full placeholder:text-cadet-gray outline-0 font-source-sans lg:text-base text-sm"
            />
          </div>
        </form>
      </div>
    </header>
  );
};

export default Header;
