import Image from "next/image"
import Link from "next/link"

const Footer = () =>{
    return(
        <div className="mt-16 flex flex-col gap-8 items-center md:justify-between md:flex-row md:items-start bg-gray-800 p-8 rounded-lg">
            <div className="flex flex-col items-center gap-4 md:items-start">
                <Link href="" className='flex items-center'>
                    <Image src="/globe.svg" alt='dynamo' width={36} height={36}></Image>
                    <p className='hidden md:block text-md ml-2 font-medium tracking-wider text-white'>Dynamo</p>
                </Link>
                <p className="text-sm text-gray-400">&copy; 2026 Dynamo</p>
                <p className="text-sm text-gray-400">All right reserved Dynamo</p>
            </div>
            <div className="flex flex-col items-center gap-4 md:items-start">
                <p className="text-sm text-amber-50">Links</p>
                <Link href="/" className="text-sm text-amber-50">About</Link>
                <Link href="/" className="text-sm text-amber-50">Home</Link>
                <Link href="/" className="text-sm text-amber-50">Contact</Link>
                <Link href="/" className="text-sm text-amber-50">Blog</Link>
            </div>
            <div className="flex flex-col items-center gap-4 md:items-start">
                <p className="text-sm text-amber-50">Links</p>
                <Link href="/" className="text-sm text-amber-50">All Products</Link>
                <Link href="/" className="text-sm text-amber-50">New Arrivals</Link>
                <Link href="/" className="text-sm text-amber-50">Best Sellers</Link>
                <Link href="/" className="text-sm text-amber-50">Shipping & Delivery</Link>
            </div>
            <div className="flex flex-col items-center gap-4 md:items-start">
                <p className="text-sm text-amber-50">Links</p>
                <Link href="/" className="text-sm text-amber-50">Terms & Conditions</Link>
                <Link href="/" className="text-sm text-amber-50" >Privacy POlicy</Link>
                <Link href="/" className="text-sm text-amber-50">Billing & Payments</Link>
                <Link href="/" className="text-sm text-amber-50">Track your Orders</Link>
            </div>
        </div>
        
        
    )
}

export default Footer