function State({progress, title, description}){
    return <div className="flex justify-center flex-col items-center text-center">
        {progress}
        <div className="font-semibold text-3xl ">{title}</div>
        <div className="text-gray-500">{description}</div>
    </div>
}

export default State;