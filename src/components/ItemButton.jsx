import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {add, remove } from "../redux/slices/CartSlice"

const ItemButton = (props)=> {
    let prod = props.prod;
    
    const dispatch = useDispatch();
    
    const { cart } = useSelector((state)=> state); 
    let selected = false
    if(cart.some((item)=> item.id === prod.id)) selected = true;
    
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

    return (
        <div>
            <button onClick={selectedHandler} className={`border-[0.2rem] border-gray-400 rounded-2xl py-1 
            px-2 text-gray-500 font-bold uppercase text-xs ${!selected ? `hover:bg-green-500` : `hover:bg-red-500`}  hover:text-black transition-all
            duration-200 hover:scale-110`}>
                {
                    selected ? <p>Remove Item</p> : <p>Add Item</p>
                }
            </button>
        </div>
    )
}

export default ItemButton;