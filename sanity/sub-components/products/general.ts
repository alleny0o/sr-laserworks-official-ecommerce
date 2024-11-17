import { defineField } from 'sanity';
import { apiVersion } from '@/sanity/env';

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
                // search for all documents with the same slug
                const query = `*[_type == "product" && slug.current == $slug]`;

                const documents = await context.getClient({ apiVersion }).fetch(query, {
                    slug,
                });

                // returns true if no documents are found
                return documents.length <= 1;
            },
        },
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'categories',
        title: 'Categories',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'category' }] }],
    }),
    defineField({
        name: 'description',
        title: 'Description (optional)',
        type: 'blockContent',
    }),
];