import { getProductByid } from '../api/productService'
import { useQuery } from '@tanstack/react-query'
import { useNavigate, useParams } from 'react-router'
import { CircleAlert, Loader, ShoppingCart } from 'lucide-react'

function Product() {
  const { productId } = useParams()
  const navigator = useNavigate()
  const { isLoading, error, data: product } = useQuery({
    queryKey: ['product'],
    queryFn: () => getProductByid(Number(productId))
  })

  const handleCheckout = ()=>{
    navigator("./customize")
  }

  if (isLoading)
    return <p className='flex justify-center my-30'><Loader /> Loading...</p>

  if (error)
    return <p className='flex justify-center my-30'><CircleAlert /> an error occurred : {error.message}</p>
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
