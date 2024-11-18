import { defineField } from 'sanity';

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