import ProductList from "@/src/components/ProductList"
import Image from "next/image"

const Homepage =() =>{
  return (
    <div>
      <div className="relative aspect-3/1 mb-12">
        <Image src="/hero.jpeg" alt="image" fill></Image>
      </div>
      <ProductList />
    </div>
  )
}

export default Homepage