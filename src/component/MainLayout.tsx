import { NavLink, Outlet } from 'react-router'

function MainLayout() {
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
                        to={"/shop/cart"}>
                        cart
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        className={({ isActive }) => (isActive ? 'underline' : '')}
                        to={"/about"}>
                        About
                    </NavLink>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default MainLayout
