import React from "react";
import { createClient } from "next-sanity";
import { ImageUrlBuilder } from "@sanity/image-url"

const client = {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2022-03-10',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
}

const builder = ImageUrlBuilder
export const sanityClient = createClient(client);
export const urlFor = (source) => builder.image(source)