import { groq } from "next-sanity"
import { client, config } from "./client"
import imageUrlBuilder from "@sanity/image-url"

export const fetchProduct = async () =>{
    const query ={
        "products": groq`*[_type == "product"]{
            image{
                asset->{
                    url
                }
            },
            _id,
            name,
            "slug":slug.current,
            price,
            details
        }`,
        "banner": groq`*[_type == "banner"]{
            image{
                asset->{
                    url
                }
            },
            saleTime,
            discount,
            largeText2,
            largeText1,
            midText,
            smallText,
            desc,
            product,
            buttonText
        }`
    }
    const { products, banner } = await client.fetch(query)
    return {
        products,
        banner
    }
}



const builder = imageUrlBuilder(config)
export function urlFor(source){
    builder.image(source)
}