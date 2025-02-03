function Contact(){
    return <div className="border-2 rounded-xl p-5 space-y-5 ">
        {/* Phone */}
        <div className="bg-[#bced6d1a] p-5 rounded-xl">
            <div>
                <img src="https://taskph3.netlify.app/images/Group%201171275317.png"></img>
            </div>
            <div className="mt-3 ">
                <h3>Phone Number</h3>
                <p className="font-black">(+62) 123-321-543</p>
            </div>
        </div>
        {/* E-mail */}
        <div className="bg-[#EDEDF799] p-5 rounded-xl">
            <div>
                <img src="https://taskph3.netlify.app/images/Group%201171275318.png"></img>
            </div>
            <div className="mt-3 ">
                <h3>Email</h3>
                <p className="font-black">hockeys@support.com</p>
            </div>
        </div>
        {/* LOcation */}
        <div className="bg-[#629cf31a] p-5 rounded-xl">
            <div>
                <img src="https://taskph3.netlify.app/images/Group%201171275321.png"></img>
            </div>
            <div className="mt-3 ">
                <h3>Location</h3>
                <p className="font-black">152/1 Mohakhali Wireless Gate</p>
            </div>
        </div>
    </div>
    
    
}

function Form(){
    return <div className="grid lg:grid-cols-2 gap-5">
            <div>
                <lable className="font-bold">Your Name</lable>
                <div>
                    <input type="text" placeholder="Enter your full Name" className="input input-bordered w-full" />  
                </div>
            </div>
            <div>
                <lable className="font-bold">Enter Your E-mail</lable>
                    <div>
                        <input type="text" placeholder="Enter your E-mail" className="input input-bordered w-full" />  
                    </div>
            </div>
            <div>
                <lable className="font-bold">Subject</lable>
                <div>
                    <input type="text" placeholder="Enter your subject" className="input input-bordered w-full" />  
                </div>
            </div>
            <div>
                <lable className="font-bold">Phone  Number</lable>
                    <div>
                        <input type="text" placeholder="Enter your phone number" className="input input-bordered w-full" />  
                    </div>
            </div>
            <div className="lg:col-span-2">
                <lable className="font-bold">Message</lable>
                <div>
                    <textarea className="textarea textarea-bordered w-full h-96" placeholder="Write your message"></textarea>
                </div>
            </div>
            <button className="btn btn-error lg:col-span-2 text-white">Send Message</button>
    </div>
}

export default function GetinTouch(){
    return <div className="mt-10 grid lg:grid-cols-2 gap-5">
        <Contact></Contact>
        <Form></Form>
    </div>
}