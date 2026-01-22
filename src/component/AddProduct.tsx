import { ArrowUpRightFromSquareIcon } from "lucide-react"
import { useState, type ChangeEvent } from "react"
import { useNavigate } from "react-router"
import { addNewProduct } from "../api/productService"
import { useMutation, useQueryClient } from "@tanstack/react-query"

function AddProduct() {
    const [newProduct, setNewProduct] = useState({
        title: "",
        price: 0,
        description: "",
        category: ""
    })
    const [errors, setErrors] = useState<String[]>([])
    const queryClient = useQueryClient()
    const { mutate,isPending } = useMutation({
        mutationFn: addNewProduct,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['products'] })
            navigator("../")
        },
        onError: (error) => {
            console.log(error)
        }
    })
    const navigator = useNavigate()

    const handleBackToProduct = () => {
        navigator("../")
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setNewProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const addProduct = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setErrors([])
        console.log(isValidForm());

        if (!isValidForm()) {
            return
        }
        mutate({
            id: Date.now(),
            title: newProduct.title,
            description: newProduct.description,
            category: newProduct.category,
            price: newProduct.price,
            stock: 10,
            images: ""
        })
    }

    const isValidForm = () => {
        let isError = false
        console.log(newProduct);

        if (newProduct.title.length == 0) {
            setErrors((prev) => [...prev, "Product title Can Not Be Empty"])
            isError = true
        }

        if (newProduct.title.length <= 2 && newProduct.title.length > 0) {
            setErrors((prev) => [...prev, "Product title Required Atlest 3 Characters"])
            isError = true
        }

        if (newProduct.price <= 0) {
            setErrors((prev) => [...prev, "Product Price Can't Be 0 or Negative"])
            isError = true
        }

        if (newProduct.category.length == 0) {
            setErrors((prev) => [...prev, "Category Can Not Be Empty"])
            isError = true
        }

        if (newProduct.category.length <= 2 && newProduct.category.length > 0) {
            setErrors((prev) => [...prev, "Category Required Atlest 3 Characters"])
            isError = true
        }

        if (newProduct.description.length == 0) {
            setErrors((prev) => [...prev, "description Can Not Be Empty"])
            isError = true
        }

        if (newProduct.description.length <= 2 && newProduct.description.length > 0) {
            setErrors((prev) => [...prev, "description Required Atlest 3 Characters"])
            isError = true
        }
        if (isError)
            return false
        return true
    }

    return (
        <div className="px-50 my-20 mx-60 rounded-2xl p-2 shadow-2xl">
            <div className="flex justify-center my-10 bg-slate-800 text-white p-3 rounded-t-2xl">
                Add New Product
            </div>
            <div className="p-3">
                <form onSubmit={addProduct}>
                    <input
                        type="text"
                        name="title"
                        placeholder="enter product title"
                        className="border-b-2 w-full m-2"
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="description"
                        placeholder="enter product description"
                        className="border-b-2 w-full m-2"
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="number"
                        name="price"
                        placeholder="enter product price"
                        className="border-b-2 w-full m-2"
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="category"
                        name="category"
                        placeholder="enter product category"
                        className="border-b-2 w-full m-2"
                        onChange={handleChange}
                        required
                    />
                    <div className="flex m-2 justify-center gap-3">
                        <button 
                            disabled={isPending}
                            className={`bg-slate-800 p-3 rounded-2xl text-white`}>
                            {isPending ? "Saving..": "Add Product"}
                        </button>
                        <button className={`bg-slate-800 p-3 rounded-2xl text-white`}>
                            Clear Form
                        </button>
                    </div>
                </form>

                <div className="flex justify-center my-10 bg-slate-800 text-white py-5 rounded-b-2xl">
                    <button
                        onClick={handleBackToProduct}
                        className="flex gap-3 text-white font-normal">
                        <ArrowUpRightFromSquareIcon /> back to product
                    </button>
                </div>
                <div className="text-red-700">
                    {
                        errors.map((error, idx) => (
                            <div key={idx}>
                                {error}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default AddProduct

