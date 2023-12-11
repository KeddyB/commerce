import { groq } from "next-sanity"
import { client, config } from "./client"
import imageUrlBuilder from "@sanity/image-url"

export const fetchProduct = async () =>{
    const query =  client.fetch(
        groq`*[_type == "product"]{
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
        }`
    )
    return query
}

export const fetchBanner = async () =>{
    const query =  client.fetch(
        groq`*[_type == "banner"]{
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
    )
    return query
}

const builder = imageUrlBuilder(config)
export function urlFor(source){
    builder.image(source)
}