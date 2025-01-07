function NavBar() {
    return <div className="flex justify-between items-center px-5 py-1">
        <div className="text-2xl font-bold">Hockey<span className="text-red-500">&apos;</span>s</div>
        <div className="flex items-center gap-7">
            <div className="font-bold text-red-500">Home</div>
            <div>About</div>
            <div>Pages</div>
            <div>Blog</div>
            <div>Content</div>
        </div>
        <div className="flex items-center gap-3">
            <div>Search</div>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg font-bold cursor-pointer">
                Get Ticket
            </button>
        </div>
    </div>
}

export default NavBar