import Link from "next/link";
import React from "react";
// import logo from "../assets/Logo.png";


const routes = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Registrar Mascota",
    route: "../mascota",
  },
  
];

const Header = () => {
  return (
    <header className="flex flex-row justify-between bg-[#20232a] text-[#e2e5e8] font-semibold py-[8.5px] px-[15%] text-[17px]">
      <nav className="flex flex-row">
        <div className="py-[4.25px] px-[18px] flex flex-col justify-center">
          {/* <img src='../assets/Logo.png' className='w-[15px] h-[15px]'/> */}
          <img src='/assets/Logo.png' width="15" height="15"/>
        </div>
        <div className="py-[4.25px] px-[18px] flex flex-col justify-center">Mi primera pagina con React/Next</div>
      </nav>

      <nav className="flex flex-row h-[46px]">
        {routes.map((item) => (
          <Link className='py-[4.25px] px-[18px] flex flex-col justify-center ' href={item.route}> {item.name} </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
