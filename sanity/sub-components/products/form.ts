import { defineField } from "sanity";

export const formFields = [
  defineField({
    name: 'formCustomization',
    title: 'Product customization form (optional)',
    type: 'object',
    fields: [
      defineField({
        name: 'enabled',
        title: 'Enable custom form',
        type: 'boolean',
        initialValue: false
      }),
      defineField({
        name: 'showForm',
        title: 'Does this product use the custom form?',
        description: 'It could be that the product doesn\'t use the form, but it\'s variable does.',
        type: 'boolean',
        initialValue: false,
        readOnly: ({ parent }) => !parent?.enabled,
        hidden: ({ parent }) => !parent?.enabled,
      }),
      defineField({
        name: 'title',
        title: 'Form Title',
        type: 'string',
        validation: Rule => Rule.custom((value, context) => {
          // Skip validation if form is disabled
          if (!(context.parent as {enabled: boolean}).enabled) {
            return true;
          }
          // Only validate if form is enabled
          return !value ? 'Title is required when form is enabled' : true;
        }),
        readOnly: ({ parent }) => !parent?.enabled,
        hidden: ({ parent }) => !parent?.enabled,
      }),
      defineField({
        name: 'fields',
        title: 'Form Fields',
        type: 'array',
        readOnly: ({ parent }) => !parent?.enabled,
        hidden: ({ parent }) => !parent?.enabled,
        validation: Rule => Rule.custom((fields, context) => {
            // Skip validation if form is disabled
            if (!(context.parent as {enabled: boolean}).enabled) {
              return true;
            }
            // Require at least one field when form is enabled
            return !fields?.length ? 'At least one form field is required when form is enabled' : true;
        }),
        of: [
          // Input field type
          {
            type: 'object',
            name: 'input',
            title: 'Input Field',
            fields: [
              defineField({
                name: 'label',
                title: 'Label',
                type: 'string',
                validation: Rule => Rule.custom((value, context) => {
                  // Skip validation if form is disabled
                  if (!(context.document?.formCustomization as {enabled: boolean})?.enabled) {
                    return true;
                  }
                  return !value ? 'Label is required when form is enabled' : true;
                })
              }),
              defineField({
                name: 'subDescription',
                title: 'Sub-Description',
                type: 'string',
                readOnly: ({ document }) => !(document?.formCustomization as {enabled: boolean}).enabled
              }),
              defineField({
                name: 'isRequired',
                title: 'Required Field',
                type: 'boolean',
                initialValue: false,
                readOnly: ({ document }) => !(document?.formCustomization as {enabled: boolean}).enabled
              }),
              defineField({
                name: 'placeholder',
                title: 'Placeholder Text',
                type: 'string',
                readOnly: ({ document }) => !(document?.formCustomization as {enabled: boolean}).enabled
              }),
              defineField({
                name: 'validation',
                title: 'Character Limits',
                type: 'object',
                readOnly: ({ document }) => !(document?.formCustomization as {enabled: boolean}).enabled,
                fields: [
                  defineField({
                    name: 'minCharacters',
                    title: 'Minimum Characters',
                    type: 'number',
                    readOnly: ({ document }) => !(document?.formCustomization as {enabled: boolean}).enabled
                  }),
                  defineField({
                    name: 'maxCharacters',
                    title: 'Maximum Characters',
                    type: 'number',
                    readOnly: ({ document }) => !(document?.formCustomization as {enabled: boolean}).enabled
                  })
                ]
              })
            ],
            preview: {
              select: {
                title: 'label',
                required: 'isRequired'
              },
              prepare({ title, required }) {
                return {
                  title: title || 'Untitled Input',
                  subtitle: `Input Field${required ? ' (Required)' : ''}`
                };
              }
            }
          },
          // Textarea field type
          {
            type: 'object',
            name: 'textarea',
            title: 'TextArea Field',
            fields: [
              defineField({
                name: 'label',
                title: 'Label',
                type: 'string',
                validation: Rule => Rule.custom((value, context) => {
                  // Skip validation if form is disabled
                  if (!(context.document?.formCustomization as {enabled: boolean})?.enabled) {
                    return true;
                  }
                  return !value ? 'Label is required when form is enabled' : true;
                })
              }),
              defineField({
                name: 'subDescription',
                title: 'Sub-Description',
                type: 'string',
                readOnly: ({ document }) => !(document?.formCustomization as {enabled: boolean}).enabled
              }),
              defineField({
                name: 'isRequired',
                title: 'Required Field',
                type: 'boolean',
                initialValue: false,
                readOnly: ({ document }) => !(document?.formCustomization as {enabled: boolean}).enabled
              }),
              defineField({
                name: 'placeholder',
                title: 'Placeholder Text',
                type: 'string',
                readOnly: ({ document }) => !(document?.formCustomization as {enabled: boolean}).enabled
              }),
              defineField({
                name: 'validation',
                title: 'Character Limits',
                type: 'object',
                readOnly: ({ document }) => !(document?.formCustomization as {enabled: boolean}).enabled,
                fields: [
                  defineField({
                    name: 'minCharacters',
                    title: 'Minimum Characters',
                    type: 'number',
                    readOnly: ({ document }) => !(document?.formCustomization as {enabled: boolean}).enabled
                  }),
                  defineField({
                    name: 'maxCharacters',
                    title: 'Maximum Characters',
                    type: 'number',
                    readOnly: ({ document }) => !(document?.formCustomization as {enabled: boolean}).enabled
                  })
                ]
              })
            ],
            preview: {
              select: {
                title: 'label',
                required: 'isRequired'
              },
              prepare({ title, required }) {
                return {
                  title: title || 'Untitled Textarea',
                  subtitle: `TextArea Field${required ? ' (Required)' : ''}`
                };
              }
            }
          },
          // Image upload field type
          {
            type: 'object',
            name: 'imageUpload',
            title: 'Image Upload',
            fields: [
              defineField({
                name: 'label',
                title: 'Label',
                type: 'string',
                validation: Rule => Rule.custom((value, context) => {
                  // Skip validation if form is disabled
                  if (!(context.document?.formCustomization as {enabled: boolean})?.enabled) {
                    return true;
                  }
                  return !value ? 'Label is required when form is enabled' : true;
                })
              }),
              defineField({
                name: 'subDescription',
                title: 'Sub-Description',
                type: 'string',
                readOnly: ({ document }) => !(document?.formCustomization as {enabled: boolean}).enabled
              }),
              defineField({
                name: 'isRequired',
                title: 'Required Field',
                type: 'boolean',
                initialValue: false,
                readOnly: ({ document }) => !(document?.formCustomization as {enabled: boolean}).enabled
              })
            ],
            preview: {
              select: {
                title: 'label',
                required: 'isRequired'
              },
              prepare({ title, required }) {
                return {
                  title: title || 'Untitled Image Upload',
                  subtitle: `Image Upload${required ? ' (Required)' : ''}`
                };
              }
            }
          }
        ]
      })
    ]
  })
];