import React from 'react'
import Navbar from '../navbar/navbar'
import { Link } from 'react-router-dom';

function Camera() {
  return (
    <div className='flex flex-col gap-9'>
      <Navbar
        back={"Go back to Dashboard"}
      />



      <div className='mx-auto w-fit pt-10'>
        <div className='flex items-center gap-6'>
          <h1 className='font-semibold text-lg'>
            <span class='underline    md:decoration-[#70E000] '>
              Set
            </span>
            Up Cam era
          </h1>
            <p className='text-[#CCCCCC]'>
              Set Up animal type
            </p>
        
        </div>

        <div className='text-[#CCCCCC] pt-10'>
          <select name="" id="" className='border-b w-[100%] border-b-[#70E000]'>
            <option value=""> Amount of Camera</option>
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
            <input className='border-b w-[100%] border-b-[#CCCCCC]' placeholder='Ip address(Camera1)' type="ip address" name="id=" /> <br /><br />
          </div>
          <div>
            <input className='border-b w-[100%] border-b-[#CCCCCC]' placeholder='Ip address(Camera2)' type="ip address" name="id=" /> <br /><br />
          </div>
          <div>
            <input className='border-b w-[100%] border-b-[#CCCCCC]' placeholder='Ip address(Camera3)' type="ip address" name="id=" /> <br /><br />
          </div>
        </div>
        
        <div className='flex justify-center'>
            
        <Link to={'/camera2'} className='text-[#70E000] border w-fit border-[#70E000] '>
          Click here
        </Link>

        </div>

      </div>


    </div>
  )
}

export default Camera