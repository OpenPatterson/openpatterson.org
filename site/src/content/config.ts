import { defineCollection, z } from 'astro:content';

const latestCollection = defineCollection({
    type:'content',
    schema: z.object({
        isDraft: z.boolean(),
        title: z.string(),
        subtitle: z.string(),
        reading_duration: z.number(),
        publishDate: z.string(),
        blurb: z.string(),
        hero_image: z.string(),
        hero_image_owner: z.string().optional(),
        hero_image_owner_url: z.string().optional(),
        hero_image_location: z.string().optional(),
        hero_image_location_url: z.string().url().optional(),
    })
}); 

export const collections = {
    latest: latestCollection,
};