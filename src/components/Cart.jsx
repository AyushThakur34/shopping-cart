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
        <div className="mt-[10rem]">
            {
                (cart.length > 0)
                ? (
                    <div className="w-8/12 max-w-[1080px] mx-auto flex mt-[5rem]">
                        <div className="w-1/2">
                            {
                                cart.map((item, index)=> {
                                    return <CartItem key={item.id} item={item} itemIndex={index}/>
                                })
                            }
                        </div>
                        <div className="flex flex-col gap-y-3 pl-5 fixed right-[20rem]">
                            <div>
                                <div className="uppercase font-semibold text-green-700 text-md">Your Cart</div>
                                <div className="uppercase font-bold text-green-700 text-4xl">Summary</div>
                            </div>
                            <p>
                                <span className="text-lg">Total Items: {cart.length}</span>
                            </p>
                            <p className="text-lg">Total Amount: <span className="font-bold">${totalAmount}</span></p>
                            <button className="text-white bg-green-700 py-2 px-[5rem] border-2 rounded-md font-bold">Checkout Now</button>
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