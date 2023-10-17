import React from 'react'
import { Link } from 'react-router-dom'
// import { FaBell } from "react-icons/fa6";





function Navbar({toggle, link, text, Bell, button,back}) {
  return (
    <div>
        <nav className='shadow-lg p-4 px-8 flex justify-between items-center border-blue-50'>
          <div>
          {toggle}  
          {back && <Link to={'/'} className='border border-[#A3FF47] py-1 px-2 text-[#70E000] '>
           <button>{back}</button>  </Link> }
          </div>
            <div className='flex items-center gap-4 '>
           {Bell}
           {text && <span className='bg-[#A3FF47] rounded-full py-1 px-2 text-[#01A9F2]'>{ text}</span>  }
            </div>
       </nav>


    </div>
  )
}

export default Navbar