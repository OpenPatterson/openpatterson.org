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


const projectCollection = defineCollection({
    type:'data',
    schema: z.object({
        project_name: z.string(),
        project_type: z.string(),
        date_started: z.string(),
        date_ended: z.string(),
        status: z.string(),
        img_src: z.string(),
        alt: z.string(),
        blurb: z.string(),
    })
});

export const collections = {
    latest: latestCollection,
    projects: projectCollection,
};