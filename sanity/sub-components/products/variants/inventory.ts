import { defineField } from 'sanity';

export const inventoryFields = [
    defineField({
        name: 'variantInventoryInfo',
        title: 'Variant inventory information',
        type: 'object',
        fields: [
            defineField({
                name: 'variantStock',
                title: 'Variant stock',
                type: 'number',
                validation: Rule => Rule.required(),
            }),
            defineField({
                name: 'variantMaxOrderQuantity',
                title: 'Variant max-order-quantity (optional)',
                type: 'number',
            }),
            defineField({
                name: 'variantSKU',
                title: 'Variant SKU (optional)',
                description: 'Optional, but extremely recommended to be unique across all products and variants if provided.',
                type: 'string',
                validation: Rule => [
                    Rule.max(16).error('SKU must be 16 characters or less'),
                    Rule.custom((variantSKU) => {
                        if (variantSKU && !/^[a-zA-Z0-9._-]*$/.test(variantSKU)) {
                            return 'SKU must be alphanumeric (-, _, and . allowed).';
                        }
                        return true;
                    }),
                ],
            }),
            defineField({
                name: 'variantTrackStock',
                title: 'Track variant stock',
                type: 'boolean',
                initialValue: true,
            }),
        ]
    })
];