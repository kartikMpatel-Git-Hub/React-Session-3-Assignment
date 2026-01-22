import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { CartItem, ProductDto } from "../type/type"

export interface CartState {
    items: CartItem[],
    totalQty: number,
    totalAmount: number
}
const initialState: CartState = {
    items: [],
    totalQty: 0,
    totalAmount: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItemToCart: (state, action:PayloadAction<{item : CartItem}>) => {
            const newItem: CartItem = action.payload.item
            const existingItem = state.items.find((item: ProductDto) => item.id == newItem.id)
            // state.totalQty++
            if (!existingItem) {
                state.items.push({ ...newItem, qty: newItem.qty })
            } else {
                existingItem.qty += newItem.qty
            }
            state.totalQty+=newItem.qty
            state.totalAmount += newItem.price * newItem.qty
        },
        removeItemFromCart: (state, action: PayloadAction<{ id: string | number }>) => {
            const idToRemove = action.payload.id
            const itemIdx = state.items.findIndex((item) => item.id == idToRemove)

            if (itemIdx !== -1) {
                const item = state.items[itemIdx]
                state.totalQty -= item.qty
                state.totalAmount -= item.price * item.qty
                state.items.splice(itemIdx, 1)
            }
        }, 
        clearCart: (state) => {
            state.items = [];
            state.totalQty = 0;
            state.totalAmount = 0;
        },
        decreaseItemQty : (state,action: PayloadAction<{ id: string | number }>)=>{
            const item = state.items.find(item => item.id === action.payload.id)
            if(item){
                item.qty--
                state.totalQty--
                state.totalAmount -= item.price
                if(item.qty == 0)
                    state.items = state.items.filter(item => item.id !== action.payload.id)
            }
        },
        increaseItemQty : (state,action: PayloadAction<{id:string | number}>)=>{
            const item = state.items.find(item => item.id === action.payload.id)
            if(item && item.qty < 10 && item.qty < item.stock){
                item.qty++
                state.totalQty++
                state.totalAmount += item.price
            }
        }
    }
})

export const {addItemToCart,removeItemFromCart,clearCart,decreaseItemQty,increaseItemQty} = cartSlice.actions

export default cartSlice.reducer