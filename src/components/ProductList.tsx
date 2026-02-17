import { ProductsType } from "../types"
import Categories from "./Categories"
import ProductCard from "./ProductCard"

const products : ProductsType = [
    {
        id: 1,
        name: "Vrbox Virtual Reality Glasses",
        shortDescription: "Lorem Ipsum, Neque porro quisquam est qui dolorem",
        description: "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
        price: 0,
        sizes: [],
        colors: [],
        images: {
            gray: "/products1g.jpeg",
            green: "/products1gr.jpeg",
            purpple: "/products1p.jpeg"
        }
    },
    {
        id: 2,
        name: "Vrbox Virtual Reality Glasses",
        shortDescription: "Lorem Ipsum, Neque porro quisquam est qui dolorem",
        description: "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
        price: 0,
        sizes: [],
        colors: [],
        images: {
            gray: "/products1g.jpeg",
            green: "/products1gr.jpeg",
            purpple: "/products1p.jpeg"
        }
    },
    {
        id: 3,
        name: "Vrbox Virtual Reality Glasses",
        shortDescription: "Lorem Ipsum, Neque porro quisquam est qui dolorem",
        description: "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
        price: 0,
        sizes: [],
        colors: [],
        images: {
            gray: "/products1g.jpeg",
            green: "/products1gr.jpeg",
            purpple: "/products1p.jpeg"
        }
    },
]

const ProductList = () =>{
    return (
        <div className="w-full">
            <Categories/>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12">
                {products.map(product=>(<ProductCard key={product.id} product={product}/>))}
            </div>
        </div>
    )
}

export default ProductList