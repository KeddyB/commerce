import { groq } from "next-sanity"
import { client } from "./sanity"

export const fetchProduct = async () =>{
    const query =  client.fetch(
        "*[_type == 'product']"
    )
    return query
}

export const fetchBanner = async () =>{
    const query =  client.fetch(
        "*[_type == 'banner']"
    )
    return query
}

export const getProject = async (slug : string) => {
    const products = client.fetch(groq`*[_type == "product" && slug.current == '${slug}'][-1]`, {slug})

    return products

}