import { MdDeleteForever } from "react-icons/md";
import { remove } from "../redux/slices/CartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const CartItem = (porps)=> {
    let item = porps.item;
    const dispatch = useDispatch();

    const deleteHandler = ()=> {
        dispatch(remove(item.id));
        toast.error("Item removed from cart");
    }

    return (
        <div>
            <div>
                <div>
                    <img src={item.image}/>
                </div>
                <div>
                    <h1>{item.title}</h1>
                    <h1>{item.description}</h1>
                    <div>
                        <p>{item.price}</p>
                    </div>
                </div>
            </div>  
            <div>
                <button onClick={deleteHandler}>
                    <MdDeleteForever/>
                </button>
            </div>
        </div>
    )
}

export default CartItem;