import { defineCollection, z } from 'astro:content'
import { file } from 'astro/loaders'

const headerMenuItems = defineCollection({
  loader: file("data/headerMenuItems.yaml"),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
  })
})

export const collections = { headerMenuItems };






