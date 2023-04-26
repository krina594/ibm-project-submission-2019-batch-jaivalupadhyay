/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { DetailedUserInfo } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DetailedUserInfoUpdateFormInputValues = {
    location?: string;
    birthdate?: string;
    currentRole?: string;
    industry?: string;
    profilePicture?: string;
    phone?: string;
};
export declare type DetailedUserInfoUpdateFormValidationValues = {
    location?: ValidationFunction<string>;
    birthdate?: ValidationFunction<string>;
    currentRole?: ValidationFunction<string>;
    industry?: ValidationFunction<string>;
    profilePicture?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DetailedUserInfoUpdateFormOverridesProps = {
    DetailedUserInfoUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    location?: PrimitiveOverrideProps<TextFieldProps>;
    birthdate?: PrimitiveOverrideProps<TextFieldProps>;
    currentRole?: PrimitiveOverrideProps<TextFieldProps>;
    industry?: PrimitiveOverrideProps<TextFieldProps>;
    profilePicture?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DetailedUserInfoUpdateFormProps = React.PropsWithChildren<{
    overrides?: DetailedUserInfoUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    detailedUserInfo?: DetailedUserInfo;
    onSubmit?: (fields: DetailedUserInfoUpdateFormInputValues) => DetailedUserInfoUpdateFormInputValues;
    onSuccess?: (fields: DetailedUserInfoUpdateFormInputValues) => void;
    onError?: (fields: DetailedUserInfoUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DetailedUserInfoUpdateFormInputValues) => DetailedUserInfoUpdateFormInputValues;
    onValidate?: DetailedUserInfoUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DetailedUserInfoUpdateForm(props: DetailedUserInfoUpdateFormProps): React.ReactElement;
