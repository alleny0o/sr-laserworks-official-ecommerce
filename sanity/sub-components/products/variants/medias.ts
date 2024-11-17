import { defineField } from 'sanity';
import { MediaReferenceInput } from '@/sanity/custom-components/products/MediaReferenceInput';

export const mediaFields = [
    defineField({
        name: 'mediaAssociate',
        title: 'Media associate (optional)',
        type: 'string',
        components: {
            input: MediaReferenceInput,
        },
    }),
];