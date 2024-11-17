import { defineField } from 'sanity';

export const pricingFields = [
    defineField({
        name: 'pricingInfo',
        title: 'Pricing information',
        type: 'object',
        fields: [
            defineField({
                name: 'price',
                title: 'Price',
                type: 'number',
                validation: Rule => [ 
                    Rule.required().error('Required'),
                    Rule.positive().error('Price must be a positive number'),
                ],
            }),
            defineField({
                name: 'compareAtPrice',
                title: 'Compare-at-price (optional)',
                type: 'number',
                validation: Rule => [
                    Rule.positive().error('Compare-at-price must be a positive number'),
                    Rule.custom((compareAtPrice, context) => {
                        // Access the price through the parent object
                        const price = (context.parent as { price: number }).price;
                        
                        if (compareAtPrice === undefined || compareAtPrice === null) {
                            return true;
                        }
                        if (!price) {
                            return true;
                        }
                        return compareAtPrice > price 
                            ? true 
                            : 'Compare-at-price must be greater than Price';
                    }),
                ],
            }),
        ],
    }),
];