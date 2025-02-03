import { Mail, Phone } from "lucide-react";

export default function Footer(){
    return(
        <div className="w-full bg-black mt-20 flex justify-center items-center">
            <div className="lg:flex p-12">
                <div className="text-white p-6 lg:text-left text-center">
                    <div className="text-white text-2xl font-bold">Get In Touch</div>
                    <div className="text-[#92A5AA] mt-6">Whether you have inquiries, feedback, or collaboration proposals, we are here to listen and respond promptly.</div>
                    <div className="flex justify-center lg:justify-start mt-6">
                        <div className="text-red-500 w-8"><Mail/></div>
                        <div className="font-semi-bold">hockeys@support.com</div>
                    </div>
                    <div className="flex justify-center lg:justify-start mt-2">
                        <div className="text-red-500 w-8"><Phone/></div>
                        <div>(+62) 123-321-543</div>
                    </div>
                </div>
                <div className="p-6 flex justify-center gap-16">
                    <div>
                        <div className="text-white text-xl font-bold">Company</div>
                        <div className="text-[#92A5AA] mt-2">About us</div>
                        <div className="text-[#92A5AA] mt-2">Leadership</div>
                        <div className="text-[#92A5AA] mt-2">Careers</div>
                        <div className="text-[#92A5AA] mt-2">News & Articles</div>
                        <div className="text-[#92A5AA] mt-2">Legal Notice</div>
                    </div>
                    <div>
                       <div className="text-white text-xl font-bold">Support</div> 
                       <div className="text-[#92A5AA] mt-2">Help Center</div> 
                       <div className="text-[#92A5AA] mt-2">FAQ</div> 
                       <div className="text-[#92A5AA] mt-2">Ticket Support</div> 
                       <div className="text-[#92A5AA] mt-2">Cotact Us</div> 
                    </div>
                    <div>
                        <div className="text-white text-xl font-bold">Services</div>
                        <div className="text-[#92A5AA] mt-2">Academy</div>
                        <div className="text-[#92A5AA] mt-2">Gropu Lesson</div>
                        <div className="text-[#92A5AA] mt-2">Private Lesson</div>
                        <div className="text-[#92A5AA] mt-2">Hockeys for kids</div>
                        <div className="text-[#92A5AA] mt-2">Hockeys fot Adult</div>
                    </div>
                </div>
            </div>
        </div>
    )
}