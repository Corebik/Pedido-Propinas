import { useState } from "react";

//Types
import type { OrderItem, MenuItem } from "../types";

export const useOrder = () => {
   const [order, setOrder] = useState<OrderItem[]>([]); // <> Generics
   const [tip, setTip] = useState(0);

   const addItem = (item: MenuItem) => {

      const itemExist = order.find(orderItem => orderItem.id === item.id);

      if (itemExist) {

         const orderUpdated = order.map(orderItem => orderItem.id === item.id
            ? { ...orderItem, quantity: orderItem.quantity + 1 }
            : orderItem
         );

         setOrder(orderUpdated);
         return;
      }

      const newItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
   }

   const removeItem = (id: MenuItem['id']) => {
      setOrder(order.filter(item => item.id !== id));
   }

   const placeOrder = () => {
      setOrder([]);
      setTip(0);
   }

   return {
      //* Properties
      order,
      tip,

      //*Methods
      setTip,
      addItem,
      removeItem,
      placeOrder,
   }

}
