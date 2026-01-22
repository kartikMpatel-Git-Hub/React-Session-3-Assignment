import { useQuery } from '@tanstack/react-query'
import { CircleAlert, Loader, LucideArrowUpRightFromSquare } from 'lucide-react'
import { useNavigate, useParams } from 'react-router'
import { getProductByid } from '../api/productService'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../slice/cartSlice'
import type { CartItem } from '../type/type'

function Customization() {
  const navigator = useNavigate()
  const { productId } = useParams()
  const [qty, setQty] = useState<number>(1)
  const { isLoading, error, data: product } = useQuery({
    queryKey: ['product'],
    queryFn: () => getProductByid(Number(productId))
  })
  const dispatch = useDispatch()

  const handleBackToProductDetail = () => {
    navigator("../")
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const item: CartItem = {
      id: Number(product?.id),
      title: product?.title || "",
      description: product?.description || "",
      category: product?.category || "",
      price: Number(product?.price),
      stock: Number(product?.stock),
      images: product?.images || "",
      qty: qty
    }
    dispatch(addItemToCart({ item }))
    navigator("/shop/cart")
  }

  if (isLoading)
    return <p className='flex justify-center my-30'><Loader /> Loading...</p>

  if (error)
    return <p className='flex justify-center my-30'><CircleAlert /> an error occurred : {error.message}</p>

  return (
    <div className=''>
      <div className='flex justify-around align-middle '>
        <button
          className='bg-slate-800 text-white p-3 rounded-2xl my-10 flex gap-3'
          onClick={handleBackToProductDetail}
        >
          <LucideArrowUpRightFromSquare />
          Back To Product product Detail
        </button>
      </div>
      <div className=''>
        <div className='flex justify-around align-middle mb-10'>
          <div className='font-bold'>
            <div className='flex justify-around'>
              <img
                className='w-50'
                src={product?.images}
              />
            </div>
            <div>Product id : {product?.id}</div>
            <div>Product title : {product?.title}</div>
            <div>Product category : {product?.category}</div>
            <div>Product price : {product?.price}</div>
          </div>
        </div>
        <div className='flex justify-center gap-3 '>
          <form onSubmit={handleSubmit}>
            <input
              type='number'
              min={1}
              value={qty}
              onChange={(e) => setQty(Number(e.target.value))}
              className='border-2 w-fit'
              placeholder='Enter Qty'
              name='qty' />

            <input type='submit' value={"Add To Cart"}
              className='mx-3 bg-slate-800 p-2 text-white rounded-2xl' />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Customization
