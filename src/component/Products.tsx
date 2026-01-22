import { useQuery } from '@tanstack/react-query'
import { getProducts } from '../api/productService'
import ProductCard from './ProductCard'
import { useNavigate } from 'react-router'
import { CircleAlert, Loader } from 'lucide-react'

function Products() {
    const { isLoading, error, data: products } = useQuery({
        queryKey: ['products'],
        queryFn: getProducts
    })
    const navigator = useNavigate()
    const handleAddProduct = ()=>{
        navigator("./add")
    }

    if (isLoading)
    return <p className='flex justify-center my-30'><Loader /> Loading...</p>

  if (error)
    return <p className='flex justify-center my-30'><CircleAlert /> an error occurred : {error.message}</p>

    return (
        <div className='bg-gray-400'>
            <div className='flex justify-center'>
                <button 
                    onClick={handleAddProduct}
                    className='bg-slate-800 p-3 text-white font-bold rounded-2xl my-5'
                    >
                    Add Product
                </button>
            </div>
            <div className='flex flex-wrap p-8 gap-3'>
                {products?.map((product) => (
                    <ProductCard product={product} key={product.id} />
                ))}
            </div>
        </div>
    )
}

export default Products
