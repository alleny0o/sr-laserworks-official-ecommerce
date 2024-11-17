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
                title: 'Variant SKU',
                type: 'string',
                validation: Rule => Rule.required(),
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