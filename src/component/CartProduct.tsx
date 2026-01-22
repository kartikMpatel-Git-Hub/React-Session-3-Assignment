import { Minus, Plus, X } from "lucide-react"
import { memo, useCallback } from "react"
import type { CartItem } from "../type/type";
import { useDispatch } from "react-redux";
import { decreaseItemQty, increaseItemQty, removeItemFromCart } from "../slice/cartSlice";

const CartProduct = memo(function CartProduct({cartProduct}:{cartProduct:CartItem}) {

    const dispatch = useDispatch()
    const handleDeleteFromCart = useCallback((id:number)=>{
        dispatch(removeItemFromCart({id}))
    }, [dispatch]);

    const handleIncreaseQty = useCallback((product : CartItem)=>{
        if(product.qty >= 10 || product.qty >= product.stock)
            return
        dispatch(increaseItemQty({id : product.id}))
    }, [dispatch]);
    
    const handleDecreaseQty = useCallback((id : number)=>{
        dispatch(decreaseItemQty({id}))
    }, [dispatch]);

  return (
    <div className={`bg-slate-800 text-white m-3 flex w-240 rounded-2xl`}>
        <div className="bg-white m-2 rounded-2xl">
            <img    
                src={cartProduct.images}
                className="w-100" 
            />
        </div>
        <div className="p-3 w-screen">
            <div className="flex">
                <div className="py-3">
                    Title : {cartProduct.title}
                </div>
                <div className="p-3 m-auto flex gap-3">
                    <Plus 
                        onClick={()=>handleIncreaseQty(cartProduct)}
                        className={`bg-gray-200 text-black rounded-xl ${(cartProduct.qty == 10 || cartProduct.qty == cartProduct.stock)&& "hidden"}`}/>
                    <div className="">
                        {cartProduct.qty}
                    </div>
                    <Minus 
                        onClick={()=>handleDecreaseQty(cartProduct.id)}
                        className="bg-gray-200 text-black rounded-xl"/>
                    <X 
                        onClick={() => handleDeleteFromCart(cartProduct.id)}
                        className="bg-red-600 text-white rounded-xl"
                        />
                </div>
            </div>
            <div className="py-3">Category : {cartProduct.category}</div>
            <div className="py-3">price : ₹{cartProduct.price}</div>
            <div className="py-3 font-semibold"><span className="text-yellow-500">stock left </span>{cartProduct.stock}</div>
        </div>

    </div>
  )
})

export default CartProduct
