import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {add, remove } from "../redux/slices/CartSlice"


const Product = (props)=> {
    let prod = props.prod;

    const dispatch = useDispatch();

    let selected = props.selected
    
    const selectedHandler = ()=> {
        if(selected) {
            dispatch(remove(prod.id));
            toast.error("Item removed from Cart");
        }
        else {
            dispatch(add(prod));
            toast.success("Item added to Cart");
        }
    }

    let title = prod.title.substr(0, 17) + "..."
    let description = prod.description.substr(0, 51) + "..."
    
    return (
        <div className="flex flex-col items-center gap-y-5 shadow-2xl p-4">
            <div>
                <h3 className="text-xl font-semibold text-center">{title}</h3>
            </div>
            <div>
                <p className="text-gray-400 text-center">{description}</p>
            </div>
            <div>
                <img src={prod.image} className="w-[10rem] h-[10rem]"/>
            </div>

            <div className="flex w-full justify-between items-baseline">
                <div>
                    <p className="text-green-500 font-semibold">${prod.price}</p>
                </div>

                <button onClick={selectedHandler} className="border-[0.2rem] border-gray-400 rounded-2xl py-1 
                px-2 text-gray-500 font-bold uppercase text-xs hover:bg-green-500 hover:text-black transition-all
                duration-200 hover:scale-110">
                    {
                        selected ? <p>Remove Item</p> : <p>Add Item</p>
                    }
                </button>
            </div>
        </div>
    )
}

export default Product;