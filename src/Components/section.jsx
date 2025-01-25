function Section({title,description}){
    return <div className=" mt-20 text-center border-t-2 border-b-2 border-dashed py-5">
        <div className="text-2xl font-bold">{title}</div>
        <div className="text-sm text-gray-500">{description}</div>
    </div>
}

export default Section