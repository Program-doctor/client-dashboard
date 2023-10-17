import React from 'react'
import Navbar from '../navbar/navbar'
import { Link } from 'react-router-dom'

function Camera2() {
  return (
    <div className='flex flex-col gap-10'>
      
    <Navbar 
        back={"Go back to Dashboard"}
      />    
    

    <div className='mx-auto w-fit pt-10'>
        <div className='flex items-center gap-6'>
            <h3 className='text-[#CCCCCC] text-[20px] font-poppings font-[400px] leading-[54px] pt-5'>
              Set Up Camera
            </h3>
          <h1 className='font-[500px] text-[30px] font-inter leading-[53.09px]'>
            <span className='border-b-[7px] border-[#70E000] mx-1'>
              Set
            </span>
            Up Animal Type
          </h1>
        
        </div>

        <div className='text-[#CCCCCC] pt-10'>
          <select name="" id="" className='border-b w-[100%] border-b-[#70E000]'>
            <option value=""> Type of animal farm</option>
            <option value=""> 1</option>
            <option value=""> 2</option>
            <option value=""> 3</option>
            <option value=""> 4</option>
            <option value=""> 5</option>
            <option value=""> 6</option>
            <option value=""> 7</option>
            <option value=""> 8</option>
            <option value=""> 9</option>
            <option value=""> 10</option>
          </select> <br /> <br />
          <div>
            <input className='border-b-2 w-[100%] border-b-[#4D4D4D]' placeholder='Animal to monitor with camera 1' type="ip address" name="id=" /> <br /><br />
          </div>
          <div>
            <input className='border-b-2 w-[100%] border-b-[#4D4D4D]' placeholder='Animal to monitor with camera 2' type="ip address" name="id=" /> <br /><br />
          </div>
          <div>
            <input className='border-b-2 w-[100%] border-b-[#4D4D4D]' placeholder='Animal to monitor with camera 3' type="ip address" name="id=" /> <br /><br />
          </div>
        </div>
        
        <div className='flex justify-center'>
            
        <Link to={'/camera2'} className='text-[#FFFFFF] text-center font-poppins font-medium border w-[60px] h-[30px] border-[#70E000] rounded bg-[#70E000]'>
          Done
        </Link>

        </div>

      </div>




    </div>
  )
}

export default Camera2