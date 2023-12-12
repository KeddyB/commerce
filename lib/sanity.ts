import React from "react";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url"

export const config = {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2022-03-10',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
}


export const client = createClient(config);
const builder = imageUrlBuilder(client)
export const urlFor = (source: any) => builder.image(source)