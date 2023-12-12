import { groq } from "next-sanity"
import { client, config } from "./client"
import imageUrlBuilder from "@sanity/image-url"

export const fetchProduct = async () =>{
    const query =  client.fetch(
        "*[_type == 'product']"
    )
    return query
}

export const fetchBanner = async () =>{
    const query =  client.fetch(
        "*[_type == 'banner'][0]"
    )
    return query
}

const builder = imageUrlBuilder(config)
export function urlFor(source){
    builder.image(source)
}