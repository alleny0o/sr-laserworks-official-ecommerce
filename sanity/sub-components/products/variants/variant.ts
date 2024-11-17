import { defineField, defineArrayMember } from "sanity";
import { VscCombine } from "react-icons/vsc";
import { GrSettingsOption } from "react-icons/gr";


import { generalFields } from "./general";
import { mediaFields } from "./medias";
import { pricingFields } from "./pricing";
import { inventoryFields } from "./inventory";

export const variantMembers = [
  defineArrayMember({
    name: "variant",
    title: "Variant",
    type: "object",
    fields: [
      defineField({
        name: "variantName",
        title: "Variant name",
        type: "string",
        readOnly: true,
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: "options",
        title: "Options",
        type: "array",
        readOnly: true,
        of: [
          defineArrayMember({
            name: "option",
            title: "Option",
            type: "object",
            fields: [
              defineField({
                name: "name",
                title: "Name",
                type: "string",
                readOnly: true,
              }),
              defineField({
                name: "value",
                title: "Value",
                type: "string",
                readOnly: true,
              }),
            ],
            preview: {
              select: {
                name: "name",
                value: "value",
              },
              prepare({ name, value }) {
                return {
                  title: `Option: ${name}`,
                  subtitle: `Option Value: ${value}`,
                  media: GrSettingsOption, // You can change this to any icon you prefer
                };
              },
            },
          }),
        ],
      }),
      ...generalFields,
      ...mediaFields,
      ...pricingFields,
      ...inventoryFields,
    ],
    preview: {
      select: {
        title: "variantName",
        stock: "variantInventoryInfo.variantStock",
      },
      prepare({ title, stock }) {
        return {
          title,
          subtitle: `Stock: ${stock}`,
          media: VscCombine,
        };
      },
    }
  }),
];
