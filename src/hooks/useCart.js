// import React, { useContext, useState } from 'react'
// import { sample_equipments } from '../data';

// const CartContext = React.createContext(null) 

// export default function CartProvider({children}) {
//  const [cartItems, setCartItems] = useState(sample_equipments.slice(1, 4)
//  .map (equipment=> ({equipment, quantity: 1,price: equipment.price}))
// );
//  const [totalPrice, setTotalPrice] = useState();
//  const [totalCount, setTotalCount] = useState();



//   return(  <CartContext.Provider value={{cart:{items:cartItems,totalPrice,totalCount}}}
//   >
//     {children}
//     </CartContext.Provider>
// );
// }

// export const useCart = () => {useContext(CartContext)};
