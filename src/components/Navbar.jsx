import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/'>
        <span className='w-18 h-18 object-contain' style={{color:"White",background:"#29A2FF",padding:'0.5rem',borderRadius:'5px'}} >SR</span>
        
        {/* <img src={logo} alt='logo' className='w-18 h-18 object-contain' /> */}
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Projects
        </NavLink>
        <NavLink to='/education' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Education
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
