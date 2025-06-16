import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {add, remove } from "../redux/slices/CartSlice"

const Product = (props)=> {
    const { cart } = useSelector((state)=> state);
    let prod = props.prod;
    const dispatch = useDispatch();

    let state = false;
    if(cart.some((item)=> item.id === prod.id)) state = true;
    const [selected, setSelected] = useState(state);
    
    const selectedHandler = ()=> {
        if(selected) {
            dispatch(remove(prod.id));
            toast.error("Item removed from Cart");
            setSelected(false);
        }
        else {
            dispatch(add(prod));
            toast.success("Item added to Cart");
            setSelected(true);
        }
    }

    return (
        <div>
            <div>
                <h3>{prod.title}</h3>
            </div>
            <div>
                <p>{prod.description}</p>
            </div>
            <div>
                <img src={prod.image} className="w-10 h-10"/>
            </div>
            <div>
                <p>{prod.price}</p>
            </div>

            <button onClick={selectedHandler}>
                {
                    selected ? <p>Remove Item</p> : <p>Add Item</p>
                }
            </button>
        </div>
    )
}

export default Product;