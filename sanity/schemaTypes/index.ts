import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { productType } from "./productType";
import { orderType } from "./orderType";
import { categoryType } from "./categoryType";
import { salesType } from "./salesType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, productType, orderType, categoryType, salesType],
};
