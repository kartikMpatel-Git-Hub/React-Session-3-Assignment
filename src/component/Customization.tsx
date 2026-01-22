import { LucideArrowUpRightFromSquare } from 'lucide-react'
import { useNavigate, useOutletContext } from 'react-router'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../slice/cartSlice'
import type { CartItem, ProductDto } from '../type/type'

function Customization() {
  const navigator = useNavigate()
  const {product} = useOutletContext<{product:ProductDto}>()
  const [qty, setQty] = useState<number>(1)
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
              max={10}
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
