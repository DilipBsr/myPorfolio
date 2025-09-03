import React from 'react'
import { FiArrowUpCircle } from "react-icons/fi";

function ScrollUp() {
  return (
      <div
          className="fixed top-5 right-5 cursor-pointer z-10 transition-all duration-300 hover:scale-110"
          onClick={()=>{
            window.scrollTo({
            top: 0,
            behavior: 'smooth',
            });
          }}
        >
          <FiArrowUpCircle
            size={35}
          />
        </div>
    
  )
}

export default ScrollUp
