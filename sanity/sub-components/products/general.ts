import { defineField } from 'sanity';
import { apiVersion } from '@/sanity/env';
import { Product } from '@/sanity.types';

export const generalFields = [
    defineField({
        name: 'name',
        title: 'Product name',
        type: 'string',
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
            source: 'name',
            maxLength: 96,
            isUnique: async (slug, context) => {
                const { document } = context;

                const id = (document as Product)._id.replace(/^drafts\./, '');

                const query = `*[
                    _type == "product" && 
                    slug.current == $slug && 
                    !(_id in [$id, ^.draft[$id]])
                ]`;

                const documents = await context.getClient({ apiVersion }).fetch(query, {
                    slug: slug,
                    id: id
                });

                return documents.length === 0;
            },
        },
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'categories',
        title: 'Categories (optional)',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'category' }] }],
    }),
    defineField({
        name: 'description',
        title: 'Description (optional)',
        type: 'blockContent',
    }),
];