import { defineField } from 'sanity';

export const inventoryFields = [
    defineField({
        name: 'inventoryInfo',
        title: 'Inventory information',
        type: 'object',
        fields: [
           defineField({
            name: 'stock',
            title: 'Stock',
            type: 'number',
            validation: (Rule) => [
                Rule.required().error('Required'),
                Rule.positive().error('Stock must be a positive number'),
            ],
           }),
           defineField({
            name: 'lowStockAlert',
            title: 'Low stock alert threshold',
            type: 'number',
            description: 'Get notified when stock reaches this number',
            validation: (Rule) => Rule.positive().error('Low stock alert threshold must be a positive number'),
        }),
           defineField({
            name: 'maxOrderQuantity',
            title: 'Max-order-quantity',
            type: 'number',
            validation: (Rule) => [
                Rule.required().error('Required'),
                Rule.positive().error('Max-order-quantity must be a positive number'),
            ],
           }),
           defineField({
            name: 'sku',
            title: 'SKU (optional)',
            description: 'Optional, but extremely recommended to be unique across all products and variants if provided.',
            type: 'string',
            validation: Rule => [
                Rule.max(16).error('SKU must be 16 characters or less'),
                Rule.custom((sku) => {
                    if (sku && !/^[a-zA-Z0-9._-]*$/.test(sku)) {
                        return 'SKU must be alphanumeric (-, _, and . allowed).';
                    }
                    return true;
                }),
            ],
           }),
           defineField({
            name: 'trackStock',
            title: 'Track stock',
            type: 'boolean',
            initialValue: true,
           })
        ],
    }),
];