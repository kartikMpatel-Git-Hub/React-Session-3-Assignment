import { useEffect, useState } from "react"
import type { ProductDto } from "../type/type"


function useProduct() {

    const [products, setProducts] = useState<ProductDto[]>([])
    const [loading, setLoading] = useState<boolean>(false)

     const fetchData = async () => {

        try {
            // const products:GetProducts = await getProducts()
            // setProducts(products.products)
            // console.log(products.products);
        } catch (error) {
            setProducts([])
        }
    }

    useEffect(() => {
        setLoading(true)
        try {
            fetchData()
        } catch (err) {
            console.log(err);
            setProducts([])
        } finally {
            setTimeout(() => {
                setLoading(false)
            }, (500));
        }
    }, [])

    return {products,loading}
}

export default useProduct
