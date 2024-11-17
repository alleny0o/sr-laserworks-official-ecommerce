import { defineField } from 'sanity';

export const generalFields = [
    defineField({
        name: 'variantProductName',
        title: 'Variant name',
        type: 'string',
        validation: Rule => Rule.required(),
    }),
    defineField({
        name: 'variantUniqueIdentifier',
        title: 'Variant unique identifier',
        type: 'string',
        validation: Rule => Rule.required(),
    }),
    defineField({
        name: 'variantCustomForm',
        title: 'Does this variant use the custom form?',
        type: 'boolean',
        initialValue: false,
    }),
    defineField({
        name: 'variantDescription',
        title: 'Variant description (optional)',
        type: 'blockContent',
    }),
];