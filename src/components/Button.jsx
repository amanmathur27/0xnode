import React from 'react'

const Button = ({styles}) => {
  return (
    <button type='button' className={`py-3 px-5 bg-blue-gradient font-poppins font-medium text-[18px] text-red-50 outline-none rounded-xl ${styles}`}>
      Get Started
    </button>
  )
}

export default Button