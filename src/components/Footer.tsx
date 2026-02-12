import Image from "next/image"
import Link from "next/link"

const Footer = () =>{
    return(
        <div className="mt-16 flex flex-col items-center md:flex-row md:items-start bg-gray-800 p-8 rounded-lg">
            <div className="">
                <Link href="" className='flex items-center'>
                    <Image src="/globe.svg" alt='dynamo' width={36} height={36}></Image>
                    <p className='hidden md:block text-md ml-2 font-medium tracking-wider'>Dynamo</p>
                </Link>
                <p className="text-sm text-gray-200">&copy; 2026 Dynamo</p>
                <p className="text-sm text-gray-200">All right reserved Dynamo</p>
            </div>
        </div>
    )
}

export default Footer