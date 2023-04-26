/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Features } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Features4x1OverridesProps = {
    Features4x1?: PrimitiveOverrideProps<FlexProps>;
    "Frame 136"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 139"?: PrimitiveOverrideProps<FlexProps>;
    "Feature A"?: PrimitiveOverrideProps<TextProps>;
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Features4x1Props = React.PropsWithChildren<Partial<FlexProps> & {
    feature?: Features;
} & {
    overrides?: Features4x1OverridesProps | undefined | null;
}>;
export default function Features4x1(props: Features4x1Props): React.ReactElement;
