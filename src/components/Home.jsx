import { useEffect, useState } from "react";
import { API_URL } from "../ApiUrl";
import Loader from "./Loader/Loader";
import Product from "./Product";

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
                    <div className="h-screen w-screen flex justify-center items-center text-4xl font-semibold text-[#0f1629]">
                        <p>Store is Empty!</p>
                    </div>
                )
            }
        </div>
    )
}

export default Home;