import { defineField } from 'sanity';

export const pricingFields = [
    defineField({
        name: 'variantPricingInfo',
        title: 'Variant pricing information',
        type: 'object',
        fields: [
            defineField({
                name: 'variantPrice',
                title: 'Variant price',
                type: 'number',
                validation: Rule => [ 
                    Rule.required().error('Required'),
                    Rule.positive().error('Price must be a positive number'),
                ],
            }),
            defineField({
                name: 'variantCompareAtPrice',
                title: 'Variant compare-at-price (optional)',
                type: 'number',
                validation: Rule => [
                    Rule.positive().error('Compare-at-price must be a positive number'),
                    Rule.custom((variantCompareAtPrice, context) => {
                        // Access the price through the parent object
                        const price = (context.parent as { variantPrice: number }).variantPrice;
                        
                        if (variantCompareAtPrice === undefined || variantCompareAtPrice === null) {
                            return true;
                        }
                        if (!price) {
                            return true;
                        }
                        return variantCompareAtPrice > price 
                            ? true 
                            : 'Compare-at-price must be greater than Price';
                    }),
                ],
            }),
        ],
    })
];