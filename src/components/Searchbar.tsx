import { Search } from "lucide-react"


const Searchbar = () =>{
    return (
        <div className="hidden sm:flex items-center gap-2 rounded ring-1 ring-gray-200 px-2 py-1 shadow-2">
          <Search className="w-4 h-4 text-gray-500"/>
          <input id="search" className="text-sm outline-0" type="text" placeholder="Search..."/>
        </div>
    )
}

export default Searchbar