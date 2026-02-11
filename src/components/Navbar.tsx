import Link from 'next/link';
import Image from 'next/image';
import Searchbar from "./Searchbar"


const Navbar = () =>{
    return(
        <nav className="w-full flex items-center justify-between border-b border-gray-200 pb-4">
           {/* Left */}
           <Link href="" className='flex items-center'>
                <Image src="/globe.svg" alt='dynamo' width={36} height={36} className='w-6 h-6 md:w-9 md:h-9'></Image>
                <p className='hidden md:block text-md ml-2 font-medium tracking-wider'>Dynamo</p>
           </Link>
           
           {/* Right */}
           <div className=''>
                <Searchbar />
           </div>
        </nav>
    )
}

export default Navbar