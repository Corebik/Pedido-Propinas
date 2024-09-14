import { formatCurrency } from "../helpers";
import type { MenuItem, OrderItem } from "../types";

type OrderContentsProps = {
   order: OrderItem[],
   removeItem: (id: MenuItem['id']) => void
}

export const OrderContents = ({ order, removeItem }: OrderContentsProps) => {


   return (
      <div>
         <h2 className="font-black text-4xl">Consumo</h2>

         <div className="space-y-3 mt-10">
            {
               order.map(item => (
                  <div
                     key={item.id}
                     className="flex justify-between items-center border-t px-2 py-3 border-gray-300 last-of-type:border-b"
                  >

                     <div>
                        <p className="text-lg">
                           {item.name} x {formatCurrency(item.price)}
                        </p>
                        <p className="font-black">
                           Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}
                        </p>
                     </div>

                     <button
                        className="bg-red-500 hover:bg-red-700 text-white font-black h-8 w-8 rounded-full"
                        onClick={() => removeItem(item.id)}
                     >
                        X
                     </button>
                  </div>
               ))
            }
         </div>
      </div>
   )
}
