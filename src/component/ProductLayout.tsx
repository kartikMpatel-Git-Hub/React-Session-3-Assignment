import { useQuery } from '@tanstack/react-query'
import { Outlet, useParams } from 'react-router'
import { getProductByid } from '../api/productService'
import { CircleAlert, Loader } from 'lucide-react'

function ProductLayout() {
  const { productId } = useParams()
  const { isLoading, error, data: product } = useQuery({
    queryKey: ['product'],
    queryFn: () => getProductByid(Number(productId))
  })

  if (isLoading)
    return <p className='flex justify-center my-30'><Loader /> Loading...</p>

  if (error)
    return <p className='flex justify-center my-30'><CircleAlert /> an error occurred : {error.message}</p>

  return <Outlet context={{product}}/>
}

export default ProductLayout
