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

export const getProject = async () => {
    const query = client.fetch(`*[_type == "product" && slug.current = $slug][0]{
        "slug"
    }`)

    return query
}