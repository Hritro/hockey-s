import bannerImage from "../assets/images/1.png"

export default function Banner() {
    return <div className="flex justify-center mt-5 ">
        <div className="relative">
            <img src={bannerImage}></img>
            <div className="absolute right-5 bottom-5 bg-black text-white rounded-lg p-5 w-[500px]">
                <div className="font-bold text-2xl mb-2">Meet all the heroes from the field</div>
                Discover the remarkable stories of unsung heroes and trailblazers across various fields. Embark on a journey to meet extraordinary individuals making a difference in diverse fields.</div>
            </div>
    </div>
}