import { Icons } from "../../assets/icons";

const Footer = () => {
  return (
    <footer className="flex items-center relative mt-auto">
      <div className="px-4 max-w-[1320px] mx-auto lg:py-8 md:py-6 py-4 flex flex-col items-center w-full">
        <img src={Icons.logo} className="lg:max-w-[140px] max-w-[100px] mb-4" alt="Logo" />
        <p className="text-white text-center text-sm md:text-base">
          {new Date().getFullYear()} TikDownloader. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
