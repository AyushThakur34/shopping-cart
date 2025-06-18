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

    let description = item.description.substr(0, 80) + "...";

    return (
        <div className="flex gap-x-10 mb-[3.5rem]">
            <div>
                <img src={item.image} className="w-[10rem] h-[10rem]"/>
            </div>
            <div className="w-[55%] flex flex-col gap-y-5">
                <h1>{item.title}</h1>
                <h1 className="text-sm text-gray-500">{description}</h1>

                <div className="flex justify-between items-baseline">
                    <p className="text-green-500 font-bold">${item.price}</p>

                    <div className="relative">
                        <div className="bg-red-500 opacity-75 w-6 h-6 right-[-0.10rem] top-[-0.15rem] absolute rounded-full z-0"/>
                        <button onClick={deleteHandler} className="text-xl z-10 relative">
                            <MdDeleteForever />
                        </button>
                    </div> 
                </div>
            </div>
        </div>
    )
}   

export default CartItem;