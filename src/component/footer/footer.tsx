import logo from "../../assets/greenHorizonlogo.png";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="relative z-10 py-10 bg-black text-white">
      <div className="flex flex-col md:flex-row justify-between py-3 mx-auto max-w-screen-lg px-4">
        
        {/* First Section */}
        <div className="flex flex-col md:w-1/2 md:pl-5">
          <div>
            <img className="h-14" src={logo} alt="logo" />
          </div>
          <div className="text-gray-500 text-sm font-roboto mt-2">
            @2024 GREENHORIZON,<span className="ml-2">ALL RIGHTS RESERVED</span>
          </div>
        </div>

        {/* Second Section */}
        <div className="flex md:w-1/2 justify-evenly mt-6 md:mt-0">
          <div className="flex flex-col space-y-3">
            <NavLink to="/sizechart" className="text-gray-500 text-sm font-roboto hover:underline">SIZE CHART</NavLink>
            <NavLink to="/privacy-policy" className="text-gray-500 text-sm font-roboto hover:underline">PRIVACY POLICY</NavLink>
            <NavLink to="/termsandconditions" className="text-gray-500 text-sm font-roboto hover:underline">TERMS AND CONDITION</NavLink>
            <NavLink to="/faqs" className="text-gray-500 text-sm font-roboto hover:underline">FAQ</NavLink>
          </div>
          <div className="flex flex-col space-y-3">
            <NavLink to="/about" className="text-gray-500 text-sm font-roboto hover:underline">ABOUT US</NavLink>
            <NavLink to="/joinourteam" className="text-gray-500 text-sm font-roboto hover:underline">CAREERS</NavLink>
            <NavLink to="/contactus" className="text-gray-500 text-sm font-roboto hover:underline">CONTACT US</NavLink>
          </div>
        </div>
      </div>

      {/* Footer Strip */}
      <div className="bg-lime-600 flex justify-evenly items-center px-6 py-3 md:px-10 text-black text-sm font-roboto">
        <a href="/contactus" className="hover:underline">CONNECT</a>
        <a href="" className="hover:underline">INSTAGRAM</a>
        {/* Uncomment for additional links
        <a href="#" className="hover:underline">YOUTUBE</a>
        <a href="#" className="hover:underline">LINKEDIN</a> */}
      </div>
    </div>
  );
}
