import { defineType } from 'sanity';
import { TrolleyIcon } from '@sanity/icons';

// parts of the schema
import { generalFields } from '@/sanity/sub-components/products/general';
import { mediaFields } from '@/sanity/sub-components/products/media';
import { pricingFields } from '@/sanity/sub-components/products/pricing';
import { inventoryFields } from '@/sanity/sub-components/products/inventory';

export const productType = defineType({
    name: 'product',
    title: 'Product',
    icon: TrolleyIcon,
    type: 'document',
    preview: {
        select: {
            title: 'name',
            media: 'mediaGroups.0.mediaItems.0',
            mediaType: 'mediaGroups.0.mediaItems.0._type',
        },
        prepare(selection) {
            const { title, media } = selection;
            
            return {
                title,
                media,
            };
        },
    },
    fields: [
        ...generalFields,
        ...mediaFields,
        ...pricingFields,
        ...inventoryFields
    ]
});