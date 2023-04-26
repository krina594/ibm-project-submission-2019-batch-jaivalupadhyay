/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Features4x1Props } from "./Features4x1";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Features4x1CollectionOverridesProps = {
    Features4x1Collection?: PrimitiveOverrideProps<CollectionProps>;
    Features4x1?: Features4x1Props;
} & EscapeHatchProps;
export declare type Features4x1CollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => Features4x1Props;
} & {
    overrides?: Features4x1CollectionOverridesProps | undefined | null;
}>;
export default function Features4x1Collection(props: Features4x1CollectionProps): React.ReactElement;
