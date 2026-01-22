import { Eye, ShoppingCart } from "lucide-react"
import type { CartItem, ProductDto } from "../type/type"
import { useNavigate } from "react-router"
import { useDispatch } from "react-redux"
import { addItemToCart } from "../slice/cartSlice"

function ProductCard({ product }: { product: ProductDto }) {
    const navigator = useNavigate()
    const dispatch = useDispatch()


    const handleViewProduct = () => {
        navigator(`/shop/products/${product.id}`)
    }

    const handleAddToCart = ()=>{
        const item: CartItem = {
              id: Number(product?.id),
              title: product?.title || "",
              description: product?.description || "",
              category: product?.category || "",
              price: Number(product?.price),
              stock: Number(product?.stock),
              images: product?.images || "",
              qty: 1
            }
        dispatch(addItemToCart({item}))
    }
    return (
        <div className={`bg-white text-slate-800 p-3 w-72 rounded-2xl shadow-2xl`}>
            <div className={`bg-slate-800 text-white w-fit px-2  rounded-2xl`}>{product.id}</div>
            {/* <div>
                <img
                    src={product.images}
                    alt={product.title}
                />
            </div> */}
            <div>Title : {product.title}</div>
            <div className="flex">
                <div className="bg-gray-500 text-white font-semibold w-fit rounded-2xl p-1">{product.category}</div>
            </div>
            <div className="font-semibold">
                price : ₹{product.price}
            </div>
            <div className="font-bold">
                Stock : {product.stock}
            </div>
            <div className="flex justify-around">
                <button
                    onClick={handleViewProduct}
                    className="bg-slate-800 text-white p-2 rounded-2xl flex m-2">
                    <Eye /> View Product
                </button>
                <button
                    onClick={handleAddToCart}
                    className="bg-slate-800 text-white p-2 rounded-2xl flex m-2">
                    <ShoppingCart />
                </button>
            </div>
        </div>
    )
}

export default ProductCard
