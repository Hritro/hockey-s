import { Eye, Heart, ShoppingCart, Star } from "lucide-react"

export default function ProductCard({product}){
    const {title,image,description,price,view,rating,like}= product
    return <div className="flex lg:flex-row flex-col gap-5 items-center border-2 rounded-xl p-3">
        <div>
            <img src={image} alt={title}/>
        </div>
        <div>
            <div className="flex gap-10 justify-center lg:justify-start">
                <div  className="flex items-center gap-1"><span className="text-yellow-500"><Star size={16}/></span>{rating}</div>
                <div  className="flex items-center gap-1"><span><Eye size={16}/></span>{view}</div>
                <div  className="flex items-center gap-1"><span className="text-red-500"><Heart size={16}/></span>{like}</div>
            </div>
            <div className="flex flex-col gap-2 mt-2 text-center lg:text-left">
                <div className="font-bold text-xl ">
                    {title}
                </div>
                <div className="text-sm">
                    {description}
                </div>
                <div className="font-bold text-xl text-red-500">
                    Price - $ {price}
                </div>
                <div className="flex lg:justify-start justify-center gap-1">
                    <span><ShoppingCart/></span>Delivery Fee: Free
                </div>
            </div>
        </div>
    </div>
}