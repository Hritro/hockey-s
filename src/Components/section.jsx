function Section({title,description}){
    return <div className=" mt-4 text-center border-t-4 border-b-4 border-dashed py-3">
        <div className="text-2xl font-bold">{title}</div>
        <div className="text-sm text-gray-500">{description}</div>
    </div>
}

export default Section