import { defineType } from 'sanity';
import { TrolleyIcon } from '@sanity/icons';

// parts of the schema
import { generalFields } from '@/sanity/sub-components/products/general';
import { mediaFields } from '@/sanity/sub-components/products/media';
import { pricingFields } from '@/sanity/sub-components/products/pricing';
import { inventoryFields } from '@/sanity/sub-components/products/inventory';
import { optionsFields } from '@/sanity/sub-components/products/options';
import { variantsFields } from '@/sanity/sub-components/products/variants';

// universal types for products
interface Color {
    label: string;
    value: string;
  }
  
  interface Image {
    _type: string;
    asset: {
      _type: string;
      _ref: string;
    };
  }
  
  export interface OptionValue {
    _type: string;
    _key: string;
    value: string;
    color?: Color;
    image?: Image;
  }
  
  export interface Option {
    _type: string;
    _key: string;
    optionName: string;
    optionValues: OptionValue[];
  }

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
        ...inventoryFields,
        ...optionsFields,
        ...variantsFields,
    ]
});