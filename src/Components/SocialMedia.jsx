import { Facebook , Github, Instagram, X} from "lucide-react";

export default function socialMedia(){
    return(
        <div className="mt-20 bg-gray-300 text-center py-5 rounded-xl">
            <div className="text-xl font-bold">Social Media</div>
            <div className="flex justify-center gap-5 mt-2">
                <div> <X/></div>
                <div><Facebook/></div>
                <div><Instagram/></div>
                <div><Github/></div>    
            </div>
        </div>
    )
}