/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { AboutUS } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AboutUSUpdateFormInputValues = {
    description?: string;
};
export declare type AboutUSUpdateFormValidationValues = {
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AboutUSUpdateFormOverridesProps = {
    AboutUSUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AboutUSUpdateFormProps = React.PropsWithChildren<{
    overrides?: AboutUSUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    aboutUS?: AboutUS;
    onSubmit?: (fields: AboutUSUpdateFormInputValues) => AboutUSUpdateFormInputValues;
    onSuccess?: (fields: AboutUSUpdateFormInputValues) => void;
    onError?: (fields: AboutUSUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AboutUSUpdateFormInputValues) => AboutUSUpdateFormInputValues;
    onValidate?: AboutUSUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AboutUSUpdateForm(props: AboutUSUpdateFormProps): React.ReactElement;
