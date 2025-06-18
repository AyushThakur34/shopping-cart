import PageNotFoundTemplate from "../assets/page-not-found.png"

const PageNotFound = ()=> {
    return (
        <div className="w-screen h-screen flex items-center justify-center gap-5 bg-black [@media(max-width:400px)]:flex-col p-2">
            <img src={PageNotFoundTemplate} className="w-[10rem] h-[10rem]"/>  
            <p className="text-4xl font-bold text-[#8f8f8f] text-center">Page Not Found</p>
        </div>
    )
}

export default PageNotFound;