import { defineType, defineField, defineArrayMember } from 'sanity';
import { BasketIcon } from '@sanity/icons';

export const orderType = defineType({
    name: 'order',
    title: 'Order',
    icon: BasketIcon,
    type: 'document',
    readOnly: true,
    fields: [
        defineField({
            name: 'orderNumber',
            title: 'Order number',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'stripeCheckoutSessionId',
            title: 'Stripe Checkout Session ID',
            type: 'string',
        }),
        defineField({
            name: 'stripeCustomerId',
            title: 'Stripe Customer ID',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'clerkUserId',
            title: 'Clerk User ID',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'customerName',
            title: 'Customer name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'email',
            title: 'Customer email',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'stripePaymentIntentId',
            title: 'Stripe Payment Intent ID',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'products',
            title: 'Products',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'product',
                            title: 'Product bought',
                            type: 'reference',
                            to: [{ type: 'product' }],
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: 'quantity',
                            title: 'Quantity purchased',
                            type: 'number',
                            validation: (Rule) => Rule.required(),
                        }),
                    ],
                    preview: {
                        select: {
                            product: 'product.name',
                            quantity: 'quantity',
                            image: 'product.mediaGroups.0.mediaItems.0',
                            price: 'product.price',
                            currency: 'product.currency',
                        },
                        prepare(select) {
                            return {
                                title: `${select.product} x ${select.quantity}`,
                                subtitle: `${select.price * select.quantity}`,
                                media: select.image,
                            };
                        },
                    },
                }),
            ],
        }),
        defineField({
            name: 'totalPrice',
            title: 'Total price',
            type: 'number',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'currency',
            title: 'Currency',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'amountDiscount',
            title: 'Amount discount',
            type: 'number',
        }),
        defineField({
            name: 'status',
            title: 'Order status',
            type: 'string',
            options: {
                list: [
                    { title: 'Pending', value: 'pending' },
                    { title: 'Paid', value: 'paid' },
                    { title: 'Shipped', value: 'shipped' },
                    { title: 'Delivered', value: 'delivered' },
                    { title: 'Cancelled', value: 'cancelled' },
                ],
            },
        }),
    ],
    preview: {
        select: {
            name: 'customerName',
            amount: 'totalPrice',
            currency: 'currency',
            orderId: 'orderNumber',
            email: 'email',
        },
        prepare(select) {
            const orderIdSnippet = `${select.orderId.slice(0, 5)}...${select.orderId.slice(-5)}`;
            return {
                title: `${select.name} (${orderIdSnippet})`,
                subtitle: `${select.amount} ${select.currency}, ${select.email}`,
                media: BasketIcon,
            };
        },
    },
});