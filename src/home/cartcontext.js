import React from 'react';

export const CartContext=React.createContext()



export function CartProvider({children}){
    const locData=JSON.parse(localStorage.getItem('cart'))
    const [cartItems,setCartItems]=React.useState(locData?locData:[])
    
    function updateCartItems(data){
      if(data.foodQuantity>0){setCartItems(prev=>{
        const newArray =prev?.filter(element=>element.id!==data.id )
        return newArray?[data,...newArray]:[data]
        })}
        else if(data.foodQuantity===0){
            {setCartItems(prev=>{
                const newArray =prev?.filter(element=>element.id!==data.id )
                return newArray?[...newArray,]:[]
                })}
        }
        localStorage.setItem('cart',JSON.stringify(cartItems))
    }
    const value=[cartItems,updateCartItems]
    return(
        <CartContext.Provider value={value}>
                {children}
        </CartContext.Provider>
    )
}