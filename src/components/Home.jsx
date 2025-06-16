import { useEffect, useState } from "react";
import { API_URL } from "../ApiUrl";
import Loader from "./Loader/Loader";
import Product from "./Product";
import EmptyCardboard from "../assets/empty-cardboard.png";

const Home = ()=> {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    async function fetchProductData() {
        setLoading(true);
        try {
            const res = await fetch(API_URL);
            const output = await res.json();
            setData(output);
        } catch(error) {
            console.log("Data cannot be fetched");
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(()=> {
        fetchProductData();
    }, []);
    
    return (
        <div>
            {
                loading ? (<Loader/>) 
                : (data.length > 0) ? (
                    <div>
                        {
                            data.map( (prod)=> (
                                <Product key={prod.id} prod={prod}/>
                            ))
                        }
                    </div>
                ) 
                : (
                    <div className=" text-2xl font-semibold text-[#0f1629] flex flex-col items-center mt-[13%]">
                        <img src={EmptyCardboard} className="w-[10rem] h-auto relative"/>
                        <p>Oops! All items are sold out</p>
                        <p className="opacity-70 text-xl">Fresh stock will be added soon</p>
                    </div>
                )
            }
        </div>
    )
}

export default Home;