import React from 'react'


const Hero = () => {
  return<>
  <div className=" m-10 flex justify-between items-center">
  <div className="navbar-start">
     <input className='w-[35vw] h-10 pl-5 border-gray-200 border-1' type="text" placeholder='Enter something...'/>
    
  </div>
  <div className="navbar-center text-purple-400 ">
    <button className='border-1 hover:bg-gray-200 border-gray-200 w-auto h-10 ml-10 p-2 b'>All</button>
    <button className='border-1 hover:bg-gray-200 border-gray-200 w-auto h-10 ml-10 p-2'>Recruitment</button>
    <button className='border-1 hover:bg-gray-200 border-gray-200 auto h-10 ml-10 p-2'>Youtube</button>
    <button className='border-1 hover:bg-gray-200 border-gray-200 auto h-10 ml-10 p-2'>ApplicantTrackingSystem</button>
    <button className='border-1 hover:bg-gray-200 border-gray-200 w-auto h-10 ml-10 p-2'>MachineLearning</button>
  </div>

</div>
  </>
}

export default Hero