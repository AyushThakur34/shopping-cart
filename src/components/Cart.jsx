import { useSelector } from "react-redux";
import EmptyCart from "../assets/empty-cart.png";

const Cart = ()=> {
    const { cart } = useSelector((state)=> state);

    return (
        <div>
            {
                (cart.length > 0)
                ? (
                    <div>

                    </div>
                )
                : (
                    <div className=" text-2xl font-semibold text-[#0f1629] flex flex-col items-center mt-[10%]">
                        <div className="relative">
                            <div className="bg-[#2a3f75] w-[5.2rem] h-[5.2rem] rounded-full absolute left-8 bottom-5"/>
                            <img src={EmptyCart} className="w-[10rem] h-auto relative"/>
                        </div>
                        <p>Your cart is empty</p>
                        <p className="opacity-70 text-xl">Looks like you haven't made your choice yet...</p>
                    </div>
                )
            }
        </div>
    )
}

export default Cart;