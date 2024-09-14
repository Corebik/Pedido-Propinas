import { MenuItem, OrderContents, OrderTotals, TipPercentageForm } from "./components";
import { dbItems } from "./data/db";

//Custom Hooks
import { useOrder } from "./hooks/useOrder";

const App = () => {

   const { order, addItem, removeItem, tip, setTip, placeOrder } = useOrder();

   return (
      <>

         <header className="bg-teal-400 py-5">
            <h1 className="text-center text-4xl font-black" >Calculador de propina y consumo</h1>
         </header>

         <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2">

            <div className="p-5">
               <h2 className="text-4xl font-black">Menú</h2>

               <div className="space-y-3 mt-10">
                  { dbItems.map(item => (
                     <MenuItem
                        key={item.id}
                        item={item}
                        addItem={addItem}
                     />
                  )) }
               </div>
            </div>

            <div className="border border-dashed border-slate-300 p-5 rounde-lg space-y-10">

               {order.length === 0
                  ? <p className="text-center">Elija un elemento del menú</p>
                  : (
                     <>
                        <OrderContents
                           order={order}
                           removeItem={removeItem}
                        />

                        <TipPercentageForm
                           setTip={setTip}
                           tip={tip}
                        />

                        <OrderTotals
                           order={order}
                           tip={tip}
                           placeOrder={placeOrder}
                        />
                     </>
                  )
               }


            </div>


         </main>

      </>
   )
}

export default App;
