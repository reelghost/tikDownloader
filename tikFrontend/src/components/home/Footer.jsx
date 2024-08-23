import { Link } from "react-router-dom";
import { Icons } from "../../assets/icons";

const Footer = () => {
  return (
    <footer className="flex items-center bg-errie-black relative border-t-[1px] border-t-white border-solid">
      <div className="px-4 max-w-[1320px] mx-auto lg:py-8 md:py-6 py-4 flex flex-col sm:flex-row gap-y-6 items-center justify-between w-full">
        <img src={Icons.logo} className="lg:max-w-[160px] max-w-[120px]" />
        
        <div className="flex items-center lg:gap-x-7 md:gap-x-6 gap-x-5">
          {/* <Link to = "" className="text-base font-semibold text-white hover:text-risd-blue transition-all duration-300 ease-in-out">
          Know more about me</Link> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
