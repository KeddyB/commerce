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