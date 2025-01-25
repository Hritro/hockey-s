export default function ImageBgCard({image, title, description}) {
    return <div className="h-[370px] bg-no-repeat bg-cover bg-center text-white flex flex-col justify-end items-start pb-14 px-5 gap-3 overflow-hidden rounded-xl" style={{backgroundImage: `url("${image}")`}}>
        <div className="text-3xl font-bold">{title}</div>
        <div className="font-semibold">{description}</div>
        <button className="bg-red-500 px-5 py-2 rounded-lg font-bold text-xl">Register Now</button>
    </div>
}