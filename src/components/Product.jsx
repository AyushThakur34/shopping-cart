import { useState } from "react";

const Product = (props)=> {
    let prod = props.prod;
    const [selected, setSelected] = useState(false);
    
    const selectedHandler = ()=> {
        selected ? setSelected(false) : setSelected(true);
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