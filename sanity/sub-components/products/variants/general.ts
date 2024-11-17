import { defineField } from 'sanity';
import { Product } from '@/sanity.types';


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
        validation: Rule => [
            Rule.required().error('Required'),
            Rule.max(12).error('Unique identifier must be 12 characters or less'),
            Rule.regex(/^[a-zA-Z0-9._-]+$/, {
                name: 'alphanumeric',
                invert: false,
            }).error('Unique identifier must be alphanumeric (-, _, and . allowed).'),
            Rule.custom((value, context) => {
                const { document } = context;
                const variants = (document as Product)?.variants || [];
                const duplicates = variants.filter(v => v.variantUniqueIdentifier === value && (value !== '' || value === undefined));
                return duplicates.length <= 1 || 'Unique identifier must be unique across variants of the same product.';
            }),
        ],
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