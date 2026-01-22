import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux"
import CartProduct from "./CartProduct";
import type { CartItem } from "../type/type";
import { useNavigate } from "react-router";

function Cart() {
  const cart = useSelector((state:any)=>state.cart)
  const navigator = useNavigate()
  const cartItems = cart.items

  const redirectToProducts = ()=>{
      navigator("/shop/products")
  }
  return (
    <div className="w-fit h-fit gap-3 m-auto justify-center rounded-2xl mt-20">
            <div className="">
                {cartItems.map((item : CartItem)=> (
                    <CartProduct
                        cartProduct={item}
                        key={item.id}
                    />
                ))}
            </div>
            {
                cart.totalQty > 0 ? (
                    <>
                        <div className={`bg-slate-800 text-white p-2 m-2 rounded-2xl flex justify-end font-bold`}>
                            <div>
                                <div>
                                    Total Qty : {cart.totalQty}
                                </div>
                                <div>
                                    Total Amount : ₹ {cart.totalAmount.toString().substring(0,5)}
                                </div>
                            </div>
                        </div>
                        <div className={`text-slate-800 bg-white flex justify-center`}>
                            {/* <button
                                className={`bg-slate-800 text-white p-3 rounded-2xl font-semibold `}
                            >Clear</button>
                            <button
                                className={`bg-slate-800 text-white p-3 rounded-2xl  font-semibold`}
                            >Checkout</button> */}
                        </div>
                    </>
                )
                    : (
                        <div className={` bg-white text-slate-800  m-auto p-10`}>
                            <div className="flex justify-center">
                                <ShoppingCart className="w-10 h-10" />
                            </div>
                            <div className="font-bold">
                                Your Cart is Empty
                            </div>
                            <div className="flex justify-center">
                                <button 
                                onClick={redirectToProducts}
                                className={`bg-slate-800 text-white p-3 rounded-2xl m-2`}>
                                    Start shopping
                                </button>
                            </div>
                        </div>
                    )
            }

        </div>
  )
}

export default Cart
