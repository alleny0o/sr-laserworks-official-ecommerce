import { defineField, Rule } from "sanity";
import { ImagesIcon, ThListIcon, PlayIcon } from "@sanity/icons";
import { IoIosColorFill } from "react-icons/io";
import { VscSymbolColor } from "react-icons/vsc";

// type safe stuff
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

interface OptionValue {
  _type: string;
  _key: string;
  value: string;
  color?: Color;
  image?: Image;
}

interface Option {
  _type: string;
  _key: string;
  optionName: string;
  optionValues: OptionValue[];
}

// validation stuff
const validateUniqueOptions = (Rule: Rule) => {
    return Rule.custom((options: Option[]) => {
        // Return true if options is undefined or empty
        if (!options || options.length === 0) {
            return true;
        }

        const seen = new Set<string>();
        const duplicates = new Set<string>();
    
        options.forEach((option) => {
            if (seen.has(option.optionName)) {
                duplicates.add(option.optionName);
            } else {
                seen.add(option.optionName);
            }
        });
    
        return duplicates.size === 0
            ? true
            : `Duplicate options found: ${Array.from(duplicates).join(", ")}`;
    });
};

const validateUniqueValues = (Rule: Rule) => {
    return Rule.custom((values: OptionValue[]) => {
        // Return true if values is undefined or empty
        if (!values || values.length === 0) {
            return true;
        }

        const seen = new Set<string>();
        const duplicates = new Set<string>();

        values.forEach((value) => {
            if (seen.has(value.value)) {
                duplicates.add(value.value);
            } else {
                seen.add(value.value);
            }
        });

        return duplicates.size === 0
            ? true
            : `Duplicate values found: ${Array.from(duplicates).join(", ")}`;
    });
};

// fields
const dropdownOption = defineField({
  name: "dropdownOption",
  title: "Dropdown",
  type: "object",
  icon: ThListIcon,
  fields: [
    defineField({
      name: "optionName",
      title: "Option name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "optionValues",
      title: "Option values",
      type: "array",
      validation: (Rule) => [
        Rule.required().error("Required"),
        Rule.max(30).error("You have reached the cap of 30 option values."),
        validateUniqueValues(Rule as Rule),
      ],
      of: [
        defineField({
          name: "Dropdown value",
          type: "object",
          fields: [
            defineField({
              name: "value",
              title: "Value",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: "value",
            },
          },
        }),
      ],
    }),
  ],
});

const buttonOption = defineField({
  name: "buttonOption",
  title: "Buttons",
  type: "object",
  icon: PlayIcon,
  fields: [
    defineField({
      name: "optionName",
      title: "Option name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "optionValues",
      title: "Option values",
      type: "array",
      validation: (Rule) => [
        Rule.required().error("Required"),
        Rule.max(30).error("You have reached the cap of 30 option values."),
        validateUniqueValues(Rule as Rule),
      ],
      of: [
        defineField({
          name: "Button value",
          type: "object",
          fields: [
            defineField({
              name: "value",
              title: "Value",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: "value",
            },
          },
        }),
      ],
    }),
  ],
});

const colorOption = defineField({
  name: "colorOption",
  title: "Colors",
  type: "object",
  icon: VscSymbolColor,
  fields: [
    defineField({
      name: "optionName",
      title: "Option name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "optionValues",
      title: "Option values",
      type: "array",
      validation: (Rule) => [
        Rule.required().error("Required"),
        Rule.max(30).error("You have reached the cap of 30 option values."),
        validateUniqueValues(Rule as Rule),
      ],
      of: [
        defineField({
          type: "object",
          name: "Color value",
          fields: [
            defineField({
              name: "value",
              title: "Value",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "color",
              title: "Color",
              type: "simplerColor",
            }),
          ],
          preview: {
            select: {
              title: "value",
              subtitle: "color.value",
            },
            prepare(selection) {
              const { title, subtitle } = selection;
              return {
                title: title,

                subtitle: subtitle ? `Color: ${subtitle}` : "No color",
                media: IoIosColorFill,
              };
            },
          },
        }),
      ],
    }),
  ],
});

const imageOption = defineField({
  name: "imageOption",
  title: "Images",
  type: "object",
  icon: ImagesIcon,
  fields: [
    defineField({
      name: "optionName",
      title: "Option name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "optionValues",
      title: "Option values",
      type: "array",
      validation: (Rule) => [
        Rule.required().error("Required"),
        Rule.max(30).error("You have reached the cap of 30 option values."),
        validateUniqueValues(Rule as Rule),
      ],
      of: [
        defineField({
          type: "object",
          name: "Image value",
          fields: [
            defineField({
              name: "value",
              title: "Value",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: "value",
              media: "image",
            },
          },
        }),
      ],
    }),
  ],
});

// optionsFields
export const optionsFields = [
  defineField({
    name: "options",
    title: "Product options",
    type: "array",
    validation: Rule => [
        Rule.max(3).error('You have reached the cap of 3 options.'),
        validateUniqueOptions(Rule as Rule),
    ],
    of: [dropdownOption, buttonOption, colorOption, imageOption],
  }),
];
