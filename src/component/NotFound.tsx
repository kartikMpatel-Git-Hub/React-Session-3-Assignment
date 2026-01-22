import React from 'react'
import { useNavigate } from 'react-router'

function NotFound() {
  const navigate = useNavigate()
  const redirectToProducts = ()=>{
    navigate("/shop/products")
  }
  return (
    <>
      <div className='flex justify-center pt-30'>
        404 : Not Found
      </div>
      <div className='flex justify-center'>
        <div 
          onClick={redirectToProducts}
          className='bg-slate-800 p-3 text-white rounded-2xl pt-3'>
          Back to Products
        </div>
      </div>
    </>
  )
}

export default NotFound
