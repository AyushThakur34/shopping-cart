import ItemButton from "./ItemButton.jsx";

const Product = (props)=> {
    let prod = props.prod;

    let title = prod.title.substr(0, 17) + "..."
    let description = prod.description.substr(0, 51) + "..."
    
    return (
        <div className="flex flex-col items-center gap-y-5 shadow-2xl p-4">
            <div>
                <h3 className="text-xl font-semibold w-[20ch] break-all text-center
                [@media(max-width:1200px)]:text-lg [@media(max-width:1100px)]:w-[12ch]">{title}</h3>
            </div>
            <div>
                <p className="text-gray-400 text-center w-[25ch] break-all
                [@media(max-width:1200px)]:text-sm [@media(max-width:1100px)]:w-[20ch]">{description}</p>
            </div>
            <div>
                <img src={prod.image} className="w-[10rem] h-[10rem]"/>
            </div>

            <div className="flex w-full justify-between items-baseline">
                <div>
                    <p className="text-green-500 font-semibold">${prod.price}</p>
                </div>

                <ItemButton prod={prod}/>
            </div>
        </div>
    )
}

export default Product;