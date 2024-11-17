import { Option } from "@/sanity/schemaTypes/productType";
import { Stack, Button } from "@sanity/ui";
import { randomKey } from "@sanity/util/content";
import { useCallback } from "react";
import {
  ArrayOfObjectsInputProps,
  set,
  insert,
  setIfMissing,
  useFormValue,
} from "sanity";
import { SparklesIcon, ResetIcon } from "@sanity/icons";

export function GenerateVariants(props: ArrayOfObjectsInputProps) {
    const { onChange } = props;

    const documentId = useFormValue(['_id']) as string;
    const publishedDocumentId = documentId.includes('drafts.') ? documentId.replace('drafts.', '') : documentId;

    // Get the values from the form
    const variantProductName = useFormValue(['name']) as string;
    const variantOptions = useFormValue(['options']) as Option[];
    const variantPrice = useFormValue(['price']) as number;
    const variantStock = useFormValue(['stock']) as number;
    const variantQuantity = useFormValue(['quantity']) as number;

    const cartesianProduct = (arr: { name: string; value: string; }[][]): { name: string; value: string; }[][] => {
        if (!arr?.length) {
            return [[]];
        }
        return arr.reduce<{ name: string; value: string; }[][]>((a, b) => {
            return a.map(x => b.map(y => x.concat([y]))).reduce((c, d) => c.concat(d), []);
        }, [[]]);
    };

    const generateVariantName = (variantOptions: { name: string; value: string; }[]) => {
        return variantOptions.map(option => `${option.value}`).join(' - ');
    };

    const handleClick = useCallback(() => {
        if (!variantOptions?.length) {
            return;
        }

        const generateVariantKey = (variantOptions: { name: string; value: string; }[]) => {
            return variantOptions.map(option => `${option.name}:${option.value}`).join('|') + '+' + publishedDocumentId;
        };

        const optionValues = variantOptions?.map(opt => {
            return opt.optionValues.map(v => ({
                name: opt.optionName,
                value: v.value,
            }));
        });

        // Generate all combinations of option values
        const variants = cartesianProduct(optionValues)?.map((variant) => {
            const variantKey = generateVariantKey(variant);
            const variantName = generateVariantName(variant);

            // Assign a random key to each option in the variant
            const optionsWithKeys = variant?.map(option => ({
                ...option,
                _key: randomKey(12)
            }));

            return {
                variantName,
                _type: 'variant' as const,
                _key: variantKey,
                options: optionsWithKeys,
                variantProductName,
                variantCustomForm: false,
                variantPricingInfo: {
                    variantPrice,
                },
                variantInventoryInfo: {
                    variantStock: variantStock || 0,
                    variantMaxOrderQuantity: variantQuantity,
                    variantTrackStock: true,
                },
            };
        });

        // Individually insert items to append to the end of the array
        const variantPatches = variants?.map((variant) => 
            insert([variant], 'after', [-1])
        );

        // Patch the document with the new variants array
        // First clear out existing variants in case we're regenerating
        onChange(set([]));
        // Then set the new variants
        onChange([setIfMissing([]), ...variantPatches]);

    }, [onChange, publishedDocumentId, variantOptions, variantProductName, variantPrice]);

    // Clear out existing variants
    const handleClear = useCallback(() => {
        onChange(set([]));
    }, [onChange]);

    return (
        <Stack space={3}>
            <Button 
                icon={SparklesIcon} 
                text="Generate Variants" 
                mode="ghost" 
                onClick={handleClick}
                disabled={!variantOptions?.length} 
            />
            {props.renderDefault(props)}
            <Button 
                icon={ResetIcon} 
                text="Clear Variants" 
                mode="ghost" 
                onClick={handleClear}
                disabled={!variantOptions?.length}
            />
        </Stack>
    );
}