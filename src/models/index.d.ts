import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem } from "@aws-amplify/datastore";

export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE"
}



type EagerAboutUS = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AboutUS, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAboutUS = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AboutUS, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AboutUS = LazyLoading extends LazyLoadingDisabled ? EagerAboutUS : LazyAboutUS

export declare const AboutUS: (new (init: ModelInit<AboutUS>) => AboutUS) & {
  copyOf(source: AboutUS, mutator: (draft: MutableModel<AboutUS>) => MutableModel<AboutUS> | void): AboutUS;
}

type EagerFeatures = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Features, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly heading?: string | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFeatures = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Features, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly heading?: string | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Features = LazyLoading extends LazyLoadingDisabled ? EagerFeatures : LazyFeatures

export declare const Features: (new (init: ModelInit<Features>) => Features) & {
  copyOf(source: Features, mutator: (draft: MutableModel<Features>) => MutableModel<Features> | void): Features;
}

type EagerDetailedUserInfo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DetailedUserInfo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly location?: string | null;
  readonly birthdate?: string | null;
  readonly UserInfo?: UserInfo | null;
  readonly currentRole?: string | null;
  readonly industry?: string | null;
  readonly profilePicture?: string | null;
  readonly phone?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly detailedUserInfoUserInfoId?: string | null;
}

type LazyDetailedUserInfo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DetailedUserInfo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly location?: string | null;
  readonly birthdate?: string | null;
  readonly UserInfo: AsyncItem<UserInfo | undefined>;
  readonly currentRole?: string | null;
  readonly industry?: string | null;
  readonly profilePicture?: string | null;
  readonly phone?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly detailedUserInfoUserInfoId?: string | null;
}

export declare type DetailedUserInfo = LazyLoading extends LazyLoadingDisabled ? EagerDetailedUserInfo : LazyDetailedUserInfo

export declare const DetailedUserInfo: (new (init: ModelInit<DetailedUserInfo>) => DetailedUserInfo) & {
  copyOf(source: DetailedUserInfo, mutator: (draft: MutableModel<DetailedUserInfo>) => MutableModel<DetailedUserInfo> | void): DetailedUserInfo;
}

type EagerUserInfo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserInfo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly gender?: Gender | keyof typeof Gender | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserInfo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserInfo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly gender?: Gender | keyof typeof Gender | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserInfo = LazyLoading extends LazyLoadingDisabled ? EagerUserInfo : LazyUserInfo

export declare const UserInfo: (new (init: ModelInit<UserInfo>) => UserInfo) & {
  copyOf(source: UserInfo, mutator: (draft: MutableModel<UserInfo>) => MutableModel<UserInfo> | void): UserInfo;
}