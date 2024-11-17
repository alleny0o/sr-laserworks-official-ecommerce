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
            title: 'SKU',
            type: 'string',
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