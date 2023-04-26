/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Features } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FeaturesUpdateFormInputValues = {
    heading?: string;
    description?: string;
};
export declare type FeaturesUpdateFormValidationValues = {
    heading?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FeaturesUpdateFormOverridesProps = {
    FeaturesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    heading?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FeaturesUpdateFormProps = React.PropsWithChildren<{
    overrides?: FeaturesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    features?: Features;
    onSubmit?: (fields: FeaturesUpdateFormInputValues) => FeaturesUpdateFormInputValues;
    onSuccess?: (fields: FeaturesUpdateFormInputValues) => void;
    onError?: (fields: FeaturesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FeaturesUpdateFormInputValues) => FeaturesUpdateFormInputValues;
    onValidate?: FeaturesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FeaturesUpdateForm(props: FeaturesUpdateFormProps): React.ReactElement;
