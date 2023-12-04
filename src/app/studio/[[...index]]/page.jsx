'use client'

/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */

import { NextStudio } from 'next-sanity/studio'
import config from '../../../../backend/sanity.config.js'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'

export default function StudioPage() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  return <p>Post: {router.query.slug}</p>
}