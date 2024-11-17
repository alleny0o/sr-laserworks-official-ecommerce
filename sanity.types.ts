/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type Sale = {
  _id: string;
  _type: "sale";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  description?: string;
  discountAmount?: number;
  couponCode?: string;
  validFrom?: string;
  validUntil?: string;
  isActive?: boolean;
};

export type Category = {
  _id: string;
  _type: "category";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  description?: string;
};

export type Order = {
  _id: string;
  _type: "order";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  orderNumber?: string;
  stripeCheckoutSessionId?: string;
  stripeCustomerId?: string;
  clerkUserId?: string;
  customerName?: string;
  email?: string;
  stripePaymentIntentId?: string;
  products?: Array<{
    product?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "product";
    };
    quantity?: number;
    _key: string;
  }>;
  totalPrice?: number;
  currency?: string;
  amountDiscount?: number;
  status?: "pending" | "paid" | "shipped" | "delivered" | "cancelled";
};

export type Product = {
  _id: string;
  _type: "product";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  slug?: Slug;
  categories?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "category";
  }>;
  description?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
    listItem?: "bullet";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  } | {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
    _key: string;
  }>;
  mediaGroups?: Array<{
    name?: string;
    mediaItems?: Array<{
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt?: string;
      _type: "image";
      _key: string;
    } | {
      _key: string;
    } & MuxVideo>;
    _key: string;
  }>;
  pricingInfo?: {
    price?: number;
    compareAtPrice?: number;
  };
  inventoryInfo?: {
    stock?: number;
    lowStockAlert?: number;
    maxOrderQuantity?: number;
    sku?: string;
    trackStock?: boolean;
  };
  options?: Array<{
    optionName?: string;
    optionValues?: Array<{
      value?: string;
      _type: "Dropdown value";
      _key: string;
    }>;
    _type: "dropdownOption";
    _key: string;
  } | {
    optionName?: string;
    optionValues?: Array<{
      value?: string;
      _type: "Button value";
      _key: string;
    }>;
    _type: "buttonOption";
    _key: string;
  } | {
    optionName?: string;
    optionValues?: Array<{
      value?: string;
      color?: SimplerColor;
      _type: "Color value";
      _key: string;
    }>;
    _type: "colorOption";
    _key: string;
  } | {
    optionName?: string;
    optionValues?: Array<{
      value?: string;
      image?: {
        asset?: {
          _ref: string;
          _type: "reference";
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
        };
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        _type: "image";
      };
      _type: "Image value";
      _key: string;
    }>;
    _type: "imageOption";
    _key: string;
  }>;
  variants?: Array<{
    variantName?: string;
    options?: Array<{
      name?: string;
      value?: string;
      _type: "option";
      _key: string;
    }>;
    variantProductName?: string;
    variantUniqueIdentifier?: string;
    variantCustomForm?: boolean;
    variantDescription?: Array<{
      children?: Array<{
        marks?: Array<string>;
        text?: string;
        _type: "span";
        _key: string;
      }>;
      style?: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
      listItem?: "bullet";
      markDefs?: Array<{
        href?: string;
        _type: "link";
        _key: string;
      }>;
      level?: number;
      _type: "block";
      _key: string;
    } | {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt?: string;
      _type: "image";
      _key: string;
    }>;
    mediaAssociate?: string;
    variantPricingInfo?: {
      variantPrice?: number;
      variantCompareAtPrice?: number;
    };
    variantInventoryInfo?: {
      variantStock?: number;
      variantMaxOrderQuantity?: number;
      variantSKU?: string;
      variantTrackStock?: boolean;
    };
    _type: "variant";
    _key: string;
  }>;
  formCustomization?: {
    enabled?: boolean;
    showForm?: boolean;
    title?: string;
    fields?: Array<{
      label?: string;
      subDescription?: string;
      isRequired?: boolean;
      placeholder?: string;
      validation?: {
        minCharacters?: number;
        maxCharacters?: number;
      };
      _type: "input";
      _key: string;
    } | {
      label?: string;
      subDescription?: string;
      isRequired?: boolean;
      placeholder?: string;
      validation?: {
        minCharacters?: number;
        maxCharacters?: number;
      };
      _type: "textarea";
      _key: string;
    } | {
      label?: string;
      subDescription?: string;
      isRequired?: boolean;
      _type: "imageUpload";
      _key: string;
    }>;
  };
  seo?: {
    title?: string;
    metaDescription?: string;
  };
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};

export type BlockContent = Array<{
  children?: Array<{
    marks?: Array<string>;
    text?: string;
    _type: "span";
    _key: string;
  }>;
  style?: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
  listItem?: "bullet";
  markDefs?: Array<{
    href?: string;
    _type: "link";
    _key: string;
  }>;
  level?: number;
  _type: "block";
  _key: string;
} | {
  asset?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
  };
  hotspot?: SanityImageHotspot;
  crop?: SanityImageCrop;
  alt?: string;
  _type: "image";
  _key: string;
}>;

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type HighlightColor = {
  _type: "highlightColor";
  label?: string;
  value?: string;
};

export type TextColor = {
  _type: "textColor";
  label?: string;
  value?: string;
};

export type SimplerColor = {
  _type: "simplerColor";
  label?: string;
  value?: string;
};

export type MuxVideo = {
  _type: "mux.video";
  asset?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "mux.videoAsset";
  };
};

export type MuxVideoAsset = {
  _type: "mux.videoAsset";
  status?: string;
  assetId?: string;
  playbackId?: string;
  filename?: string;
  thumbTime?: number;
  data?: MuxAssetData;
};

export type MuxAssetData = {
  _type: "mux.assetData";
  resolution_tier?: string;
  upload_id?: string;
  created_at?: string;
  id?: string;
  status?: string;
  max_stored_resolution?: string;
  passthrough?: string;
  encoding_tier?: string;
  master_access?: string;
  aspect_ratio?: string;
  duration?: number;
  max_stored_frame_rate?: number;
  mp4_support?: string;
  max_resolution_tier?: string;
  tracks?: Array<{
    _key: string;
  } & MuxTrack>;
  playback_ids?: Array<{
    _key: string;
  } & MuxPlaybackId>;
  static_renditions?: MuxStaticRenditions;
};

export type MuxStaticRenditions = {
  _type: "mux.staticRenditions";
  status?: string;
  files?: Array<{
    _key: string;
  } & MuxStaticRenditionFile>;
};

export type MuxStaticRenditionFile = {
  _type: "mux.staticRenditionFile";
  ext?: string;
  name?: string;
  width?: number;
  bitrate?: number;
  filesize?: number;
  height?: number;
};

export type MuxPlaybackId = {
  _type: "mux.playbackId";
  id?: string;
  policy?: string;
};

export type MuxTrack = {
  _type: "mux.track";
  id?: string;
  type?: string;
  max_width?: number;
  max_frame_rate?: number;
  duration?: number;
  max_height?: number;
};

export type AllSanitySchemaTypes = SanityImagePaletteSwatch | SanityImagePalette | SanityImageDimensions | SanityFileAsset | Geopoint | Sale | Category | Order | Product | Slug | BlockContent | SanityImageCrop | SanityImageHotspot | SanityImageAsset | SanityAssetSourceData | SanityImageMetadata | HighlightColor | TextColor | SimplerColor | MuxVideo | MuxVideoAsset | MuxAssetData | MuxStaticRenditions | MuxStaticRenditionFile | MuxPlaybackId | MuxTrack;
export declare const internalGroqTypeReferenceTo: unique symbol;
