export interface ProductDto{
    id: number,
    title: string,
    description: string,
    category: string,
    price: number,
    stock: number,
    images : string
}

export interface GetProducts{
    products : ProductDto[]
}

export interface CartItem{
    id: number,
    title: string,
    description: string,
    category: string,
    price: number,
    stock: number,
    images : string,
    qty : number
}