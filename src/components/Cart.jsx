import { useSelector } from "react-redux";
import EmptyCart from "../assets/empty-cart.png";
import { NavLink } from "react-router-dom";
import CartItem from "./CartItem";
import { useEffect, useState } from "react";

const Cart = ()=> {
    const { cart } = useSelector((state)=> state);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(()=> {
        setTotalAmount(cart.reduce((acc, curr)=> acc + curr.price, 0));
    }, [cart])

    return (
        <div>
            {
                (cart.length > 0)
                ? (
                    <div>
                        <div>
                            {
                                cart.map((item, index)=> {
                                    return <CartItem key={item.id} item={item} itemIndex={index}/>
                                })
                            }
                        </div>
                        <div>
                            <div>
                                <div>Your Cart</div>
                                <div>Summary</div>
                                <p>
                                    <span>Total Items: {cart.length}</span>
                                </p>
                            </div>
                            <div>
                                <p>Total Amount: {totalAmount}</p>
                                <buttn>Checkout Now</buttn>
                            </div>
                        </div>
                    </div>
                )
                : (
                    <div className=" text-2xl font-semibold text-[#0f1629] flex flex-col items-center mt-[10%]">
                        <div className="relative">
                            <div className="bg-[#2a3f75] w-[5.2rem] h-[5.2rem] rounded-full absolute left-8 bottom-5"/>
                            <img src={EmptyCart} className="w-[10rem] h-auto relative"/>
                        </div>
                        <p>Your cart is empty</p>
                        <p className="opacity-70 text-xl">Let's fill it with something you love!</p>
                        <NavLink to="/">
                            <button className="border-2 p-2 mt-2 bg-[#2a3f75] text-white rounded-lg text-lg">Shop Now</button>
                        </NavLink>
                    </div>
                )
            }
        </div>
    )
}

export default Cart;