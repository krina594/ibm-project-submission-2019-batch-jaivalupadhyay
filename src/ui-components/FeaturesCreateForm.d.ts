/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FeaturesCreateFormInputValues = {
    heading?: string;
    description?: string;
};
export declare type FeaturesCreateFormValidationValues = {
    heading?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FeaturesCreateFormOverridesProps = {
    FeaturesCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    heading?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FeaturesCreateFormProps = React.PropsWithChildren<{
    overrides?: FeaturesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FeaturesCreateFormInputValues) => FeaturesCreateFormInputValues;
    onSuccess?: (fields: FeaturesCreateFormInputValues) => void;
    onError?: (fields: FeaturesCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FeaturesCreateFormInputValues) => FeaturesCreateFormInputValues;
    onValidate?: FeaturesCreateFormValidationValues;
} & React.CSSProperties>;
export default function FeaturesCreateForm(props: FeaturesCreateFormProps): React.ReactElement;
