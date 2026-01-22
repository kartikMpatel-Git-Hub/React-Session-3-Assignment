import { createBrowserRouter } from 'react-router'
import MainLayout from './component/MainLayout'
import NotFound from './component/NotFound'
import Home from './component/Home'
import About from './component/About'
import Products from './component/Products'
import Customization from './component/Customization'
import Cart from './component/Cart'
import Product from './component/Product'
import AddProduct from './component/AddProduct'
import ProductLayout from './component/ProductLayout'


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <NotFound />,
        children: [
            { index: true, element: <Home /> },
            { path: 'about', element: <About /> },
            {
                path: 'shop',
                children: [
                    { index: true, element: <Products /> },
                    {
                        path: 'products',
                        children: [
                            { index: true, element: <Products /> },
                            {
                                path: ":productId",
                                element : <ProductLayout />,
                                children: [
                                    { index: true, element: <Product /> },
                                    { path: "customize", element: <Customization /> }
                                ]
                            },
                            {path:"add",element:<AddProduct />}
                        ]
                    },
                    { path: 'cart', element: <Cart /> },
                    { path: "*", element: <NotFound /> }
                ]
            },
            { path: "*", element: <NotFound /> }
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
])

export default router
