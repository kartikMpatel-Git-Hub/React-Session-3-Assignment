import { useNavigate, useOutletContext } from 'react-router'
import { ShoppingCart } from 'lucide-react'
import type { ProductDto } from '../type/type'

function Product() {
  const {product} = useOutletContext<{product : ProductDto}>()
  const navigator = useNavigate()

  const handleCheckout = ()=>{
    navigator("./customize")
  }

  return (
    <div className='bg-gray-200 mx-50 my-10 p-10 rounded-2xl '>
      <div>
        <div className='bg-slate-800 w-fit px-2 rounded-2xl text-white'>
          {product?.id}
        </div>
        <div className='flex justify-around'>
          <img
            className='w-50 shadow-2xl'
            src={`${product?.images}`}
          />
        </div>
        <div className='flex justify-around p-3 font-bold'>
          {product?.title}
        </div>
        <div className='flex justify-around p-3 font-semibold'>
          category : {product?.category}
        </div>
        <div className='flex justify-around p-3'>
          description : {product?.description}
        </div>
        <div className='flex justify-center gap-4'>
          <button 
            onClick={handleCheckout}
            className='bg-slate-800 p-3 text-white rounded-2xl flex gap-2'>
            <ShoppingCart /> Add to cart
          </button>
        </div>
      </div>

    </div>
  )
}

export default Product
