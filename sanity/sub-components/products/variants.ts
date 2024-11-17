import { defineField } from 'sanity';
import { variantMembers } from '@/sanity/sub-components/products/variants/variant';
import { GenerateVariants } from '@/sanity/custom-components/products/GenerateVariants';


export const variantsFields = [
    defineField({
        name: 'variants',
        title: 'Product variants',
        type: 'array',
        components: {
            input: GenerateVariants,
        },
        of: variantMembers,
    })
];