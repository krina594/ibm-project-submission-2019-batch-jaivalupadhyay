// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Gender = {
  "MALE": "MALE",
  "FEMALE": "FEMALE"
};

const { AboutUS, Features, DetailedUserInfo, UserInfo } = initSchema(schema);

export {
  AboutUS,
  Features,
  DetailedUserInfo,
  UserInfo,
  Gender
};