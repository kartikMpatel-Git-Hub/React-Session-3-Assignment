import { ShoppingCart } from 'lucide-react'
import { useSelector } from 'react-redux'
import { NavLink, Outlet } from 'react-router'

function MainLayout() {
    const cart = useSelector((state: any) => state.cart)
    return (
        <div>
            <div className=' flex bg-slate-800 text-white p-3 gap-3 justify-center font-bold'>
                <div>
                    <NavLink
                        className={({ isActive }) => (isActive ? 'underline' : '')}
                        to={"/"}>
                        Home
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        className={({ isActive }) => (isActive ? 'underline' : '')}
                        to={"/shop/products"}>
                        Products
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        className={({ isActive }) => (isActive ? 'underline' : '')}
                        to={"/about"}>
                        About
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        className={({ isActive }) => (isActive ? 'underline' : '') + " flex"}
                        to={"/shop/cart"}>
                        <ShoppingCart /> <span className='font-normal text-sm'>{cart.totalQty}</span>
                    </NavLink>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default MainLayout
