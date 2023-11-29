import React from "react";
import createClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url"

const config = {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2022-03-10',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
}

export const builder = ImageUrlBuilder(config)
export const client = createClient(config);
export function urlFor(source) {
    builder.image(source)
}
