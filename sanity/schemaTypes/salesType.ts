import { defineField, defineType } from 'sanity';
import { TbRosetteDiscount } from "react-icons/tb";

export const salesType = defineType({
    name: 'sale',
    title: 'Sale',
    icon: TbRosetteDiscount,
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Sale title',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Sale description',
            type: 'text',
        }),
        defineField({
            name: 'discountAmount',
            title: 'Discount amount',
            type: 'number',
            description: 'Amount off in percentage or fixed value',
        }),
        defineField({
            name: 'couponCode',
            title: 'Coupon code',
            type: 'string',
        }),
        defineField({
            name: 'validFrom',
            title: 'Valid from',
            type: 'datetime',
        }),
        defineField({
            name: 'validUntil',
            title: 'Valid until',
            type: 'datetime',
        }),
        defineField({
            name: 'isActive',
            title: 'Is active',
            description: 'Toggle to activate/deactivate the sale.',
            type: 'boolean',
            initialValue: true,
        }),
    ],
    preview: {
        select: {
            title: 'title',
            discountAmount: 'discountAmount',
            couponCode: 'couponCode',
            isActive: 'isActive',
        },
        prepare(select) {
            const { title, discountAmount, couponCode, isActive } = select;

            return {
                title: title,
                subtitle: `${discountAmount}% off - Code: ${couponCode} - ${isActive ? 'Active' : 'Inactive'}`,
            };
        },
    },
});