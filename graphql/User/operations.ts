import { useFetchRequester } from "../FetchRequester";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  jsonb: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq: InputMaybe<Scalars['Boolean']['input']>;
  _gt: InputMaybe<Scalars['Boolean']['input']>;
  _gte: InputMaybe<Scalars['Boolean']['input']>;
  _in: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null: InputMaybe<Scalars['Boolean']['input']>;
  _lt: InputMaybe<Scalars['Boolean']['input']>;
  _lte: InputMaybe<Scalars['Boolean']['input']>;
  _neq: InputMaybe<Scalars['Boolean']['input']>;
  _nin: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq: InputMaybe<Scalars['Int']['input']>;
  _gt: InputMaybe<Scalars['Int']['input']>;
  _gte: InputMaybe<Scalars['Int']['input']>;
  _in: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null: InputMaybe<Scalars['Boolean']['input']>;
  _lt: InputMaybe<Scalars['Int']['input']>;
  _lte: InputMaybe<Scalars['Int']['input']>;
  _neq: InputMaybe<Scalars['Int']['input']>;
  _nin: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq: InputMaybe<Scalars['String']['input']>;
  _gt: InputMaybe<Scalars['String']['input']>;
  _gte: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike: InputMaybe<Scalars['String']['input']>;
  _in: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex: InputMaybe<Scalars['String']['input']>;
  _is_null: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like: InputMaybe<Scalars['String']['input']>;
  _lt: InputMaybe<Scalars['String']['input']>;
  _lte: InputMaybe<Scalars['String']['input']>;
  _neq: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike: InputMaybe<Scalars['String']['input']>;
  _nin: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar: InputMaybe<Scalars['String']['input']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "features" */
export type Features = {
  __typename?: 'features';
  expiration: Maybe<Scalars['timestamptz']['output']>;
  feature: Scalars['Int']['output'];
  feature_id: Scalars['uuid']['output'];
  options: Maybe<Scalars['jsonb']['output']>;
  /** An array relationship */
  tenant_features: Array<Tenant_Features>;
  /** An array relationship */
  user_features: Array<User_Features>;
  /** An array relationship */
  user_tenant_features: Array<User_Tenant_Features>;
};


/** columns and relationships of "features" */
export type FeaturesOptionsArgs = {
  path: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "features" */
export type FeaturesTenant_FeaturesArgs = {
  distinct_on: InputMaybe<Array<Tenant_Features_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Tenant_Features_Order_By>>;
  where: InputMaybe<Tenant_Features_Bool_Exp>;
};


/** columns and relationships of "features" */
export type FeaturesUser_FeaturesArgs = {
  distinct_on: InputMaybe<Array<User_Features_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<User_Features_Order_By>>;
  where: InputMaybe<User_Features_Bool_Exp>;
};


/** columns and relationships of "features" */
export type FeaturesUser_Tenant_FeaturesArgs = {
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<User_Tenant_Features_Order_By>>;
  where: InputMaybe<User_Tenant_Features_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "features". All fields are combined with a logical 'AND'. */
export type Features_Bool_Exp = {
  _and: InputMaybe<Array<Features_Bool_Exp>>;
  _not: InputMaybe<Features_Bool_Exp>;
  _or: InputMaybe<Array<Features_Bool_Exp>>;
  expiration: InputMaybe<Timestamptz_Comparison_Exp>;
  feature: InputMaybe<Int_Comparison_Exp>;
  feature_id: InputMaybe<Uuid_Comparison_Exp>;
  options: InputMaybe<Jsonb_Comparison_Exp>;
  tenant_features: InputMaybe<Tenant_Features_Bool_Exp>;
  user_features: InputMaybe<User_Features_Bool_Exp>;
  user_tenant_features: InputMaybe<User_Tenant_Features_Bool_Exp>;
};

/** Ordering options when selecting data from "features". */
export type Features_Order_By = {
  expiration: InputMaybe<Order_By>;
  feature: InputMaybe<Order_By>;
  feature_id: InputMaybe<Order_By>;
  options: InputMaybe<Order_By>;
  tenant_features_aggregate: InputMaybe<Tenant_Features_Aggregate_Order_By>;
  user_features_aggregate: InputMaybe<User_Features_Aggregate_Order_By>;
  user_tenant_features_aggregate: InputMaybe<User_Tenant_Features_Aggregate_Order_By>;
};

/** select columns of table "features" */
export enum Features_Select_Column {
  /** column name */
  Expiration = 'expiration',
  /** column name */
  Feature = 'feature',
  /** column name */
  FeatureId = 'feature_id',
  /** column name */
  Options = 'options'
}

/** Streaming cursor of the table "features" */
export type Features_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Features_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Features_Stream_Cursor_Value_Input = {
  expiration: InputMaybe<Scalars['timestamptz']['input']>;
  feature: InputMaybe<Scalars['Int']['input']>;
  feature_id: InputMaybe<Scalars['uuid']['input']>;
  options: InputMaybe<Scalars['jsonb']['input']>;
};

export type Jsonb_Cast_Exp = {
  String: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in: InputMaybe<Scalars['jsonb']['input']>;
  /** does the column contain the given json value at the top level */
  _contains: InputMaybe<Scalars['jsonb']['input']>;
  _eq: InputMaybe<Scalars['jsonb']['input']>;
  _gt: InputMaybe<Scalars['jsonb']['input']>;
  _gte: InputMaybe<Scalars['jsonb']['input']>;
  /** does the string exist as a top-level key in the column */
  _has_key: InputMaybe<Scalars['String']['input']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all: InputMaybe<Array<Scalars['String']['input']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any: InputMaybe<Array<Scalars['String']['input']>>;
  _in: InputMaybe<Array<Scalars['jsonb']['input']>>;
  _is_null: InputMaybe<Scalars['Boolean']['input']>;
  _lt: InputMaybe<Scalars['jsonb']['input']>;
  _lte: InputMaybe<Scalars['jsonb']['input']>;
  _neq: InputMaybe<Scalars['jsonb']['input']>;
  _nin: InputMaybe<Array<Scalars['jsonb']['input']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "webauthn_credentials" */
  delete_webauthn_credentials: Maybe<Webauthn_Credentials_Mutation_Response>;
  /** delete single row from the table: "webauthn_credentials" */
  delete_webauthn_credentials_by_pk: Maybe<Webauthn_Credentials>;
  /** update data of the table: "tenant_users" */
  update_tenant_users: Maybe<Tenant_Users_Mutation_Response>;
  /** update single row of the table: "tenant_users" */
  update_tenant_users_by_pk: Maybe<Tenant_Users>;
  /** update multiples rows of table: "tenant_users" */
  update_tenant_users_many: Maybe<Array<Maybe<Tenant_Users_Mutation_Response>>>;
  /** update data of the table: "webauthn_credentials" */
  update_webauthn_credentials: Maybe<Webauthn_Credentials_Mutation_Response>;
  /** update single row of the table: "webauthn_credentials" */
  update_webauthn_credentials_by_pk: Maybe<Webauthn_Credentials>;
  /** update multiples rows of table: "webauthn_credentials" */
  update_webauthn_credentials_many: Maybe<Array<Maybe<Webauthn_Credentials_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_Webauthn_CredentialsArgs = {
  where: Webauthn_Credentials_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Webauthn_Credentials_By_PkArgs = {
  credential_id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootUpdate_Tenant_UsersArgs = {
  _set: InputMaybe<Tenant_Users_Set_Input>;
  where: Tenant_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tenant_Users_By_PkArgs = {
  _set: InputMaybe<Tenant_Users_Set_Input>;
  pk_columns: Tenant_Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tenant_Users_ManyArgs = {
  updates: Array<Tenant_Users_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Webauthn_CredentialsArgs = {
  _set: InputMaybe<Webauthn_Credentials_Set_Input>;
  where: Webauthn_Credentials_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Webauthn_Credentials_By_PkArgs = {
  _set: InputMaybe<Webauthn_Credentials_Set_Input>;
  pk_columns: Webauthn_Credentials_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Webauthn_Credentials_ManyArgs = {
  updates: Array<Webauthn_Credentials_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "features" */
  features: Array<Features>;
  /** fetch data from the table: "features" using primary key columns */
  features_by_pk: Maybe<Features>;
  /** fetch data from the table: "tenant" */
  tenant: Array<Tenant>;
  /** fetch data from the table: "tenant" using primary key columns */
  tenant_by_pk: Maybe<Tenant>;
  /** An array relationship */
  tenant_features: Array<Tenant_Features>;
  /** fetch data from the table: "tenant_features" using primary key columns */
  tenant_features_by_pk: Maybe<Tenant_Features>;
  /** fetch data from the table: "tenant_users" */
  tenant_users: Array<Tenant_Users>;
  /** fetch data from the table: "tenant_users" using primary key columns */
  tenant_users_by_pk: Maybe<Tenant_Users>;
  /** An array relationship */
  user_features: Array<User_Features>;
  /** fetch data from the table: "user_features" using primary key columns */
  user_features_by_pk: Maybe<User_Features>;
  /** An array relationship */
  user_tenant_features: Array<User_Tenant_Features>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk: Maybe<Users>;
  /** An array relationship */
  webauthn_credentials: Array<Webauthn_Credentials>;
  /** fetch data from the table: "webauthn_credentials" using primary key columns */
  webauthn_credentials_by_pk: Maybe<Webauthn_Credentials>;
};


export type Query_RootFeaturesArgs = {
  distinct_on: InputMaybe<Array<Features_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Features_Order_By>>;
  where: InputMaybe<Features_Bool_Exp>;
};


export type Query_RootFeatures_By_PkArgs = {
  feature_id: Scalars['uuid']['input'];
};


export type Query_RootTenantArgs = {
  distinct_on: InputMaybe<Array<Tenant_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Tenant_Order_By>>;
  where: InputMaybe<Tenant_Bool_Exp>;
};


export type Query_RootTenant_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootTenant_FeaturesArgs = {
  distinct_on: InputMaybe<Array<Tenant_Features_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Tenant_Features_Order_By>>;
  where: InputMaybe<Tenant_Features_Bool_Exp>;
};


export type Query_RootTenant_Features_By_PkArgs = {
  feature_id: Scalars['uuid']['input'];
  tenant_id: Scalars['uuid']['input'];
};


export type Query_RootTenant_UsersArgs = {
  distinct_on: InputMaybe<Array<Tenant_Users_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Tenant_Users_Order_By>>;
  where: InputMaybe<Tenant_Users_Bool_Exp>;
};


export type Query_RootTenant_Users_By_PkArgs = {
  tenant_id: Scalars['uuid']['input'];
  user_id: Scalars['uuid']['input'];
};


export type Query_RootUser_FeaturesArgs = {
  distinct_on: InputMaybe<Array<User_Features_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<User_Features_Order_By>>;
  where: InputMaybe<User_Features_Bool_Exp>;
};


export type Query_RootUser_Features_By_PkArgs = {
  feature_id: Scalars['uuid']['input'];
  user_id: Scalars['uuid']['input'];
};


export type Query_RootUser_Tenant_FeaturesArgs = {
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<User_Tenant_Features_Order_By>>;
  where: InputMaybe<User_Tenant_Features_Bool_Exp>;
};


export type Query_RootUsersArgs = {
  distinct_on: InputMaybe<Array<Users_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Users_Order_By>>;
  where: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootWebauthn_CredentialsArgs = {
  distinct_on: InputMaybe<Array<Webauthn_Credentials_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Webauthn_Credentials_Order_By>>;
  where: InputMaybe<Webauthn_Credentials_Bool_Exp>;
};


export type Query_RootWebauthn_Credentials_By_PkArgs = {
  credential_id: Scalars['String']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "features" */
  features: Array<Features>;
  /** fetch data from the table: "features" using primary key columns */
  features_by_pk: Maybe<Features>;
  /** fetch data from the table in a streaming manner: "features" */
  features_stream: Array<Features>;
  /** fetch data from the table: "tenant" */
  tenant: Array<Tenant>;
  /** fetch data from the table: "tenant" using primary key columns */
  tenant_by_pk: Maybe<Tenant>;
  /** An array relationship */
  tenant_features: Array<Tenant_Features>;
  /** fetch data from the table: "tenant_features" using primary key columns */
  tenant_features_by_pk: Maybe<Tenant_Features>;
  /** fetch data from the table in a streaming manner: "tenant_features" */
  tenant_features_stream: Array<Tenant_Features>;
  /** fetch data from the table in a streaming manner: "tenant" */
  tenant_stream: Array<Tenant>;
  /** fetch data from the table: "tenant_users" */
  tenant_users: Array<Tenant_Users>;
  /** fetch data from the table: "tenant_users" using primary key columns */
  tenant_users_by_pk: Maybe<Tenant_Users>;
  /** fetch data from the table in a streaming manner: "tenant_users" */
  tenant_users_stream: Array<Tenant_Users>;
  /** An array relationship */
  user_features: Array<User_Features>;
  /** fetch data from the table: "user_features" using primary key columns */
  user_features_by_pk: Maybe<User_Features>;
  /** fetch data from the table in a streaming manner: "user_features" */
  user_features_stream: Array<User_Features>;
  /** An array relationship */
  user_tenant_features: Array<User_Tenant_Features>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
  /** An array relationship */
  webauthn_credentials: Array<Webauthn_Credentials>;
  /** fetch data from the table: "webauthn_credentials" using primary key columns */
  webauthn_credentials_by_pk: Maybe<Webauthn_Credentials>;
  /** fetch data from the table in a streaming manner: "webauthn_credentials" */
  webauthn_credentials_stream: Array<Webauthn_Credentials>;
};


export type Subscription_RootFeaturesArgs = {
  distinct_on: InputMaybe<Array<Features_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Features_Order_By>>;
  where: InputMaybe<Features_Bool_Exp>;
};


export type Subscription_RootFeatures_By_PkArgs = {
  feature_id: Scalars['uuid']['input'];
};


export type Subscription_RootFeatures_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Features_Stream_Cursor_Input>>;
  where: InputMaybe<Features_Bool_Exp>;
};


export type Subscription_RootTenantArgs = {
  distinct_on: InputMaybe<Array<Tenant_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Tenant_Order_By>>;
  where: InputMaybe<Tenant_Bool_Exp>;
};


export type Subscription_RootTenant_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootTenant_FeaturesArgs = {
  distinct_on: InputMaybe<Array<Tenant_Features_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Tenant_Features_Order_By>>;
  where: InputMaybe<Tenant_Features_Bool_Exp>;
};


export type Subscription_RootTenant_Features_By_PkArgs = {
  feature_id: Scalars['uuid']['input'];
  tenant_id: Scalars['uuid']['input'];
};


export type Subscription_RootTenant_Features_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Tenant_Features_Stream_Cursor_Input>>;
  where: InputMaybe<Tenant_Features_Bool_Exp>;
};


export type Subscription_RootTenant_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Tenant_Stream_Cursor_Input>>;
  where: InputMaybe<Tenant_Bool_Exp>;
};


export type Subscription_RootTenant_UsersArgs = {
  distinct_on: InputMaybe<Array<Tenant_Users_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Tenant_Users_Order_By>>;
  where: InputMaybe<Tenant_Users_Bool_Exp>;
};


export type Subscription_RootTenant_Users_By_PkArgs = {
  tenant_id: Scalars['uuid']['input'];
  user_id: Scalars['uuid']['input'];
};


export type Subscription_RootTenant_Users_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Tenant_Users_Stream_Cursor_Input>>;
  where: InputMaybe<Tenant_Users_Bool_Exp>;
};


export type Subscription_RootUser_FeaturesArgs = {
  distinct_on: InputMaybe<Array<User_Features_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<User_Features_Order_By>>;
  where: InputMaybe<User_Features_Bool_Exp>;
};


export type Subscription_RootUser_Features_By_PkArgs = {
  feature_id: Scalars['uuid']['input'];
  user_id: Scalars['uuid']['input'];
};


export type Subscription_RootUser_Features_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Features_Stream_Cursor_Input>>;
  where: InputMaybe<User_Features_Bool_Exp>;
};


export type Subscription_RootUser_Tenant_FeaturesArgs = {
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<User_Tenant_Features_Order_By>>;
  where: InputMaybe<User_Tenant_Features_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on: InputMaybe<Array<Users_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Users_Order_By>>;
  where: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootWebauthn_CredentialsArgs = {
  distinct_on: InputMaybe<Array<Webauthn_Credentials_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Webauthn_Credentials_Order_By>>;
  where: InputMaybe<Webauthn_Credentials_Bool_Exp>;
};


export type Subscription_RootWebauthn_Credentials_By_PkArgs = {
  credential_id: Scalars['String']['input'];
};


export type Subscription_RootWebauthn_Credentials_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Webauthn_Credentials_Stream_Cursor_Input>>;
  where: InputMaybe<Webauthn_Credentials_Bool_Exp>;
};

/** columns and relationships of "tenant" */
export type Tenant = {
  __typename?: 'tenant';
  /** An array relationship */
  features: Array<Tenant_Features>;
  id: Scalars['uuid']['output'];
  name: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  users: Array<Tenant_Users>;
};


/** columns and relationships of "tenant" */
export type TenantFeaturesArgs = {
  distinct_on: InputMaybe<Array<Tenant_Features_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Tenant_Features_Order_By>>;
  where: InputMaybe<Tenant_Features_Bool_Exp>;
};


/** columns and relationships of "tenant" */
export type TenantUsersArgs = {
  distinct_on: InputMaybe<Array<Tenant_Users_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Tenant_Users_Order_By>>;
  where: InputMaybe<Tenant_Users_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "tenant". All fields are combined with a logical 'AND'. */
export type Tenant_Bool_Exp = {
  _and: InputMaybe<Array<Tenant_Bool_Exp>>;
  _not: InputMaybe<Tenant_Bool_Exp>;
  _or: InputMaybe<Array<Tenant_Bool_Exp>>;
  features: InputMaybe<Tenant_Features_Bool_Exp>;
  id: InputMaybe<Uuid_Comparison_Exp>;
  name: InputMaybe<String_Comparison_Exp>;
  users: InputMaybe<Tenant_Users_Bool_Exp>;
};

/** columns and relationships of "tenant_features" */
export type Tenant_Features = {
  __typename?: 'tenant_features';
  /** An object relationship */
  feature: Features;
  feature_id: Scalars['uuid']['output'];
  tenant_id: Scalars['uuid']['output'];
};

/** order by aggregate values of table "tenant_features" */
export type Tenant_Features_Aggregate_Order_By = {
  count: InputMaybe<Order_By>;
  max: InputMaybe<Tenant_Features_Max_Order_By>;
  min: InputMaybe<Tenant_Features_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "tenant_features". All fields are combined with a logical 'AND'. */
export type Tenant_Features_Bool_Exp = {
  _and: InputMaybe<Array<Tenant_Features_Bool_Exp>>;
  _not: InputMaybe<Tenant_Features_Bool_Exp>;
  _or: InputMaybe<Array<Tenant_Features_Bool_Exp>>;
  feature: InputMaybe<Features_Bool_Exp>;
  feature_id: InputMaybe<Uuid_Comparison_Exp>;
  tenant_id: InputMaybe<Uuid_Comparison_Exp>;
};

/** order by max() on columns of table "tenant_features" */
export type Tenant_Features_Max_Order_By = {
  feature_id: InputMaybe<Order_By>;
  tenant_id: InputMaybe<Order_By>;
};

/** order by min() on columns of table "tenant_features" */
export type Tenant_Features_Min_Order_By = {
  feature_id: InputMaybe<Order_By>;
  tenant_id: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "tenant_features". */
export type Tenant_Features_Order_By = {
  feature: InputMaybe<Features_Order_By>;
  feature_id: InputMaybe<Order_By>;
  tenant_id: InputMaybe<Order_By>;
};

/** select columns of table "tenant_features" */
export enum Tenant_Features_Select_Column {
  /** column name */
  FeatureId = 'feature_id',
  /** column name */
  TenantId = 'tenant_id'
}

/** Streaming cursor of the table "tenant_features" */
export type Tenant_Features_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Tenant_Features_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tenant_Features_Stream_Cursor_Value_Input = {
  feature_id: InputMaybe<Scalars['uuid']['input']>;
  tenant_id: InputMaybe<Scalars['uuid']['input']>;
};

/** Ordering options when selecting data from "tenant". */
export type Tenant_Order_By = {
  features_aggregate: InputMaybe<Tenant_Features_Aggregate_Order_By>;
  id: InputMaybe<Order_By>;
  name: InputMaybe<Order_By>;
  users_aggregate: InputMaybe<Tenant_Users_Aggregate_Order_By>;
};

/** select columns of table "tenant" */
export enum Tenant_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** Streaming cursor of the table "tenant" */
export type Tenant_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Tenant_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tenant_Stream_Cursor_Value_Input = {
  id: InputMaybe<Scalars['uuid']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "tenant_users" */
export type Tenant_Users = {
  __typename?: 'tenant_users';
  default: Scalars['Boolean']['output'];
  /** An array relationship */
  features: Array<User_Tenant_Features>;
  /** An object relationship */
  tenant: Tenant;
  tenant_id: Scalars['uuid']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
};


/** columns and relationships of "tenant_users" */
export type Tenant_UsersFeaturesArgs = {
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<User_Tenant_Features_Order_By>>;
  where: InputMaybe<User_Tenant_Features_Bool_Exp>;
};

/** order by aggregate values of table "tenant_users" */
export type Tenant_Users_Aggregate_Order_By = {
  count: InputMaybe<Order_By>;
  max: InputMaybe<Tenant_Users_Max_Order_By>;
  min: InputMaybe<Tenant_Users_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "tenant_users". All fields are combined with a logical 'AND'. */
export type Tenant_Users_Bool_Exp = {
  _and: InputMaybe<Array<Tenant_Users_Bool_Exp>>;
  _not: InputMaybe<Tenant_Users_Bool_Exp>;
  _or: InputMaybe<Array<Tenant_Users_Bool_Exp>>;
  default: InputMaybe<Boolean_Comparison_Exp>;
  features: InputMaybe<User_Tenant_Features_Bool_Exp>;
  tenant: InputMaybe<Tenant_Bool_Exp>;
  tenant_id: InputMaybe<Uuid_Comparison_Exp>;
  user: InputMaybe<Users_Bool_Exp>;
  user_id: InputMaybe<Uuid_Comparison_Exp>;
};

/** order by max() on columns of table "tenant_users" */
export type Tenant_Users_Max_Order_By = {
  tenant_id: InputMaybe<Order_By>;
  user_id: InputMaybe<Order_By>;
};

/** order by min() on columns of table "tenant_users" */
export type Tenant_Users_Min_Order_By = {
  tenant_id: InputMaybe<Order_By>;
  user_id: InputMaybe<Order_By>;
};

/** response of any mutation on the table "tenant_users" */
export type Tenant_Users_Mutation_Response = {
  __typename?: 'tenant_users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Tenant_Users>;
};

/** Ordering options when selecting data from "tenant_users". */
export type Tenant_Users_Order_By = {
  default: InputMaybe<Order_By>;
  features_aggregate: InputMaybe<User_Tenant_Features_Aggregate_Order_By>;
  tenant: InputMaybe<Tenant_Order_By>;
  tenant_id: InputMaybe<Order_By>;
  user: InputMaybe<Users_Order_By>;
  user_id: InputMaybe<Order_By>;
};

/** primary key columns input for table: tenant_users */
export type Tenant_Users_Pk_Columns_Input = {
  tenant_id: Scalars['uuid']['input'];
  user_id: Scalars['uuid']['input'];
};

/** select columns of table "tenant_users" */
export enum Tenant_Users_Select_Column {
  /** column name */
  Default = 'default',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "tenant_users" */
export type Tenant_Users_Set_Input = {
  default: InputMaybe<Scalars['Boolean']['input']>;
};

/** Streaming cursor of the table "tenant_users" */
export type Tenant_Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Tenant_Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tenant_Users_Stream_Cursor_Value_Input = {
  default: InputMaybe<Scalars['Boolean']['input']>;
  tenant_id: InputMaybe<Scalars['uuid']['input']>;
  user_id: InputMaybe<Scalars['uuid']['input']>;
};

export type Tenant_Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Tenant_Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Tenant_Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq: InputMaybe<Scalars['timestamptz']['input']>;
  _gt: InputMaybe<Scalars['timestamptz']['input']>;
  _gte: InputMaybe<Scalars['timestamptz']['input']>;
  _in: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null: InputMaybe<Scalars['Boolean']['input']>;
  _lt: InputMaybe<Scalars['timestamptz']['input']>;
  _lte: InputMaybe<Scalars['timestamptz']['input']>;
  _neq: InputMaybe<Scalars['timestamptz']['input']>;
  _nin: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "user_features" */
export type User_Features = {
  __typename?: 'user_features';
  /** An object relationship */
  feature: Features;
  feature_id: Scalars['uuid']['output'];
  user_id: Scalars['uuid']['output'];
};

/** order by aggregate values of table "user_features" */
export type User_Features_Aggregate_Order_By = {
  count: InputMaybe<Order_By>;
  max: InputMaybe<User_Features_Max_Order_By>;
  min: InputMaybe<User_Features_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "user_features". All fields are combined with a logical 'AND'. */
export type User_Features_Bool_Exp = {
  _and: InputMaybe<Array<User_Features_Bool_Exp>>;
  _not: InputMaybe<User_Features_Bool_Exp>;
  _or: InputMaybe<Array<User_Features_Bool_Exp>>;
  feature: InputMaybe<Features_Bool_Exp>;
  feature_id: InputMaybe<Uuid_Comparison_Exp>;
  user_id: InputMaybe<Uuid_Comparison_Exp>;
};

/** order by max() on columns of table "user_features" */
export type User_Features_Max_Order_By = {
  feature_id: InputMaybe<Order_By>;
  user_id: InputMaybe<Order_By>;
};

/** order by min() on columns of table "user_features" */
export type User_Features_Min_Order_By = {
  feature_id: InputMaybe<Order_By>;
  user_id: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "user_features". */
export type User_Features_Order_By = {
  feature: InputMaybe<Features_Order_By>;
  feature_id: InputMaybe<Order_By>;
  user_id: InputMaybe<Order_By>;
};

/** select columns of table "user_features" */
export enum User_Features_Select_Column {
  /** column name */
  FeatureId = 'feature_id',
  /** column name */
  UserId = 'user_id'
}

/** Streaming cursor of the table "user_features" */
export type User_Features_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Features_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Features_Stream_Cursor_Value_Input = {
  feature_id: InputMaybe<Scalars['uuid']['input']>;
  user_id: InputMaybe<Scalars['uuid']['input']>;
};

/** columns and relationships of "user_tenant_features" */
export type User_Tenant_Features = {
  __typename?: 'user_tenant_features';
  /** An object relationship */
  feature: Features;
};

/** order by aggregate values of table "user_tenant_features" */
export type User_Tenant_Features_Aggregate_Order_By = {
  count: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user_tenant_features". All fields are combined with a logical 'AND'. */
export type User_Tenant_Features_Bool_Exp = {
  _and: InputMaybe<Array<User_Tenant_Features_Bool_Exp>>;
  _not: InputMaybe<User_Tenant_Features_Bool_Exp>;
  _or: InputMaybe<Array<User_Tenant_Features_Bool_Exp>>;
  feature: InputMaybe<Features_Bool_Exp>;
};

/** Ordering options when selecting data from "user_tenant_features". */
export type User_Tenant_Features_Order_By = {
  feature: InputMaybe<Features_Order_By>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  email: Scalars['String']['output'];
  /** An array relationship */
  features: Array<User_Features>;
  id: Scalars['uuid']['output'];
  name: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  tenants: Array<Tenant_Users>;
  /** An array relationship */
  webauthn_credentials: Array<Webauthn_Credentials>;
};


/** columns and relationships of "users" */
export type UsersFeaturesArgs = {
  distinct_on: InputMaybe<Array<User_Features_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<User_Features_Order_By>>;
  where: InputMaybe<User_Features_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersTenantsArgs = {
  distinct_on: InputMaybe<Array<Tenant_Users_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Tenant_Users_Order_By>>;
  where: InputMaybe<Tenant_Users_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersWebauthn_CredentialsArgs = {
  distinct_on: InputMaybe<Array<Webauthn_Credentials_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Webauthn_Credentials_Order_By>>;
  where: InputMaybe<Webauthn_Credentials_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and: InputMaybe<Array<Users_Bool_Exp>>;
  _not: InputMaybe<Users_Bool_Exp>;
  _or: InputMaybe<Array<Users_Bool_Exp>>;
  email: InputMaybe<String_Comparison_Exp>;
  features: InputMaybe<User_Features_Bool_Exp>;
  id: InputMaybe<Uuid_Comparison_Exp>;
  name: InputMaybe<String_Comparison_Exp>;
  tenants: InputMaybe<Tenant_Users_Bool_Exp>;
  webauthn_credentials: InputMaybe<Webauthn_Credentials_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  email: InputMaybe<Order_By>;
  features_aggregate: InputMaybe<User_Features_Aggregate_Order_By>;
  id: InputMaybe<Order_By>;
  name: InputMaybe<Order_By>;
  tenants_aggregate: InputMaybe<Tenant_Users_Aggregate_Order_By>;
  webauthn_credentials_aggregate: InputMaybe<Webauthn_Credentials_Aggregate_Order_By>;
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  email: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['uuid']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq: InputMaybe<Scalars['uuid']['input']>;
  _gt: InputMaybe<Scalars['uuid']['input']>;
  _gte: InputMaybe<Scalars['uuid']['input']>;
  _in: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null: InputMaybe<Scalars['Boolean']['input']>;
  _lt: InputMaybe<Scalars['uuid']['input']>;
  _lte: InputMaybe<Scalars['uuid']['input']>;
  _neq: InputMaybe<Scalars['uuid']['input']>;
  _nin: InputMaybe<Array<Scalars['uuid']['input']>>;
};

/** columns and relationships of "webauthn_credentials" */
export type Webauthn_Credentials = {
  __typename?: 'webauthn_credentials';
  aaguid: Scalars['String']['output'];
  created_at: Scalars['timestamptz']['output'];
  credential_id: Scalars['String']['output'];
  last_used: Maybe<Scalars['timestamptz']['output']>;
  name: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  user: Users;
};

/** order by aggregate values of table "webauthn_credentials" */
export type Webauthn_Credentials_Aggregate_Order_By = {
  count: InputMaybe<Order_By>;
  max: InputMaybe<Webauthn_Credentials_Max_Order_By>;
  min: InputMaybe<Webauthn_Credentials_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "webauthn_credentials". All fields are combined with a logical 'AND'. */
export type Webauthn_Credentials_Bool_Exp = {
  _and: InputMaybe<Array<Webauthn_Credentials_Bool_Exp>>;
  _not: InputMaybe<Webauthn_Credentials_Bool_Exp>;
  _or: InputMaybe<Array<Webauthn_Credentials_Bool_Exp>>;
  aaguid: InputMaybe<String_Comparison_Exp>;
  created_at: InputMaybe<Timestamptz_Comparison_Exp>;
  credential_id: InputMaybe<String_Comparison_Exp>;
  last_used: InputMaybe<Timestamptz_Comparison_Exp>;
  name: InputMaybe<String_Comparison_Exp>;
  user: InputMaybe<Users_Bool_Exp>;
};

/** order by max() on columns of table "webauthn_credentials" */
export type Webauthn_Credentials_Max_Order_By = {
  aaguid: InputMaybe<Order_By>;
  created_at: InputMaybe<Order_By>;
  credential_id: InputMaybe<Order_By>;
  last_used: InputMaybe<Order_By>;
  name: InputMaybe<Order_By>;
};

/** order by min() on columns of table "webauthn_credentials" */
export type Webauthn_Credentials_Min_Order_By = {
  aaguid: InputMaybe<Order_By>;
  created_at: InputMaybe<Order_By>;
  credential_id: InputMaybe<Order_By>;
  last_used: InputMaybe<Order_By>;
  name: InputMaybe<Order_By>;
};

/** response of any mutation on the table "webauthn_credentials" */
export type Webauthn_Credentials_Mutation_Response = {
  __typename?: 'webauthn_credentials_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Webauthn_Credentials>;
};

/** Ordering options when selecting data from "webauthn_credentials". */
export type Webauthn_Credentials_Order_By = {
  aaguid: InputMaybe<Order_By>;
  created_at: InputMaybe<Order_By>;
  credential_id: InputMaybe<Order_By>;
  last_used: InputMaybe<Order_By>;
  name: InputMaybe<Order_By>;
  user: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: webauthn_credentials */
export type Webauthn_Credentials_Pk_Columns_Input = {
  credential_id: Scalars['String']['input'];
};

/** select columns of table "webauthn_credentials" */
export enum Webauthn_Credentials_Select_Column {
  /** column name */
  Aaguid = 'aaguid',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CredentialId = 'credential_id',
  /** column name */
  LastUsed = 'last_used',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "webauthn_credentials" */
export type Webauthn_Credentials_Set_Input = {
  name: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "webauthn_credentials" */
export type Webauthn_Credentials_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Webauthn_Credentials_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Webauthn_Credentials_Stream_Cursor_Value_Input = {
  aaguid: InputMaybe<Scalars['String']['input']>;
  created_at: InputMaybe<Scalars['timestamptz']['input']>;
  credential_id: InputMaybe<Scalars['String']['input']>;
  last_used: InputMaybe<Scalars['timestamptz']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
};

export type Webauthn_Credentials_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Webauthn_Credentials_Set_Input>;
  /** filter the rows which have to be updated */
  where: Webauthn_Credentials_Bool_Exp;
};

export type User_GetCurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type User_GetCurrentUserQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: any, name: string | null, email: string, tenants: Array<{ __typename?: 'tenant_users', tenant: { __typename?: 'tenant', name: string | null, id: any } }> }> };

export type FeatureFragment = { __typename?: 'features', feature: number, options: any | null, expiration: any | null };

export type UserFeaturesFragment = { __typename?: 'users', tenants: Array<{ __typename?: 'tenant_users', tenant: { __typename?: 'tenant', features: Array<{ __typename?: 'tenant_features', feature: { __typename?: 'features', feature: number, options: any | null, expiration: any | null } }> }, features: Array<{ __typename?: 'user_tenant_features', feature: { __typename?: 'features', feature: number, options: any | null, expiration: any | null } }> }>, features: Array<{ __typename?: 'user_features', feature: { __typename?: 'features', feature: number, options: any | null, expiration: any | null } }> };

export type GetUserFeaturesQueryVariables = Exact<{
  userId: Scalars['uuid']['input'];
  tenantId: Scalars['uuid']['input'];
}>;


export type GetUserFeaturesQuery = { __typename?: 'query_root', users_by_pk: { __typename?: 'users', tenants: Array<{ __typename?: 'tenant_users', tenant: { __typename?: 'tenant', features: Array<{ __typename?: 'tenant_features', feature: { __typename?: 'features', feature: number, options: any | null, expiration: any | null } }> }, features: Array<{ __typename?: 'user_tenant_features', feature: { __typename?: 'features', feature: number, options: any | null, expiration: any | null } }> }>, features: Array<{ __typename?: 'user_features', feature: { __typename?: 'features', feature: number, options: any | null, expiration: any | null } }> } | null };

export type SetDefaultTenantMutationVariables = Exact<{
  userId: Scalars['uuid']['input'];
  tenantId: Scalars['uuid']['input'];
}>;


export type SetDefaultTenantMutation = { __typename?: 'mutation_root', update_tenant_users: { __typename?: 'tenant_users_mutation_response', affected_rows: number } | null, update_tenant_users_by_pk: { __typename?: 'tenant_users', tenant_id: any, user_id: any, default: boolean } | null };

export type PasskeyInfoFragment = { __typename?: 'webauthn_credentials', aaguid: string, created_at: any, last_used: any | null, name: string | null, credential_id: string };

export type GetPasskeysQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPasskeysQuery = { __typename?: 'query_root', webauthn_credentials: Array<{ __typename?: 'webauthn_credentials', aaguid: string, created_at: any, last_used: any | null, name: string | null, credential_id: string }> };

export type DeletePasskeyMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeletePasskeyMutation = { __typename?: 'mutation_root', delete_webauthn_credentials_by_pk: { __typename?: 'webauthn_credentials', aaguid: string, created_at: any, last_used: any | null, name: string | null, credential_id: string } | null };

export type RenamePasskeyMutationVariables = Exact<{
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
}>;


export type RenamePasskeyMutation = { __typename?: 'mutation_root', update_webauthn_credentials_by_pk: { __typename?: 'webauthn_credentials', aaguid: string, created_at: any, last_used: any | null, name: string | null, credential_id: string } | null };

export const FeatureFragmentDoc = `
    fragment Feature on features {
  feature
  options
  expiration
}
    `;
export const UserFeaturesFragmentDoc = `
    fragment UserFeatures on users {
  tenants(where: {tenant_id: {_eq: $tenantId}}) {
    tenant {
      features(
        where: {feature: {_or: [{expiration: {_is_null: true}}, {expiration: {_gt: "now()"}}]}}
      ) {
        feature {
          ...Feature
        }
      }
    }
    features(
      where: {feature: {_or: [{expiration: {_is_null: true}}, {expiration: {_gt: "now()"}}]}}
    ) {
      feature {
        ...Feature
      }
    }
  }
  features(
    where: {feature: {_or: [{expiration: {_is_null: true}}, {expiration: {_gt: "now()"}}]}}
  ) {
    feature {
      ...Feature
    }
  }
}
    ${FeatureFragmentDoc}`;
export const PasskeyInfoFragmentDoc = `
    fragment PasskeyInfo on webauthn_credentials {
  aaguid
  created_at
  last_used
  name
  credential_id
}
    `;
 const User_GetCurrentUserDocument = `
    query User_GetCurrentUser {
  users {
    id
    name
    email
    tenants {
      tenant {
        name
        id
      }
    }
  }
}
    `;
 const GetUserFeaturesDocument = `
    query GetUserFeatures($userId: uuid!, $tenantId: uuid!) {
  users_by_pk(id: $userId) {
    ...UserFeatures
  }
}
    ${UserFeaturesFragmentDoc}`;
 const SetDefaultTenantDocument = `
    mutation SetDefaultTenant($userId: uuid!, $tenantId: uuid!) {
  update_tenant_users(
    where: {user_id: {_eq: $userId}, tenant_id: {_neq: $tenantId}}
    _set: {default: false}
  ) {
    affected_rows
  }
  update_tenant_users_by_pk(
    pk_columns: {tenant_id: $tenantId, user_id: $userId}
    _set: {default: true}
  ) {
    tenant_id
    user_id
    default
  }
}
    `;
 const GetPasskeysDocument = `
    query GetPasskeys {
  webauthn_credentials {
    ...PasskeyInfo
  }
}
    ${PasskeyInfoFragmentDoc}`;
 const DeletePasskeyDocument = `
    mutation DeletePasskey($id: String!) {
  delete_webauthn_credentials_by_pk(credential_id: $id) {
    ...PasskeyInfo
  }
}
    ${PasskeyInfoFragmentDoc}`;
 const RenamePasskeyDocument = `
    mutation RenamePasskey($id: String!, $name: String!) {
  update_webauthn_credentials_by_pk(
    pk_columns: {credential_id: $id}
    _set: {name: $name}
  ) {
    ...PasskeyInfo
  }
}
    ${PasskeyInfoFragmentDoc}`;
export type Requester<C = {}, E = unknown> = <R, V>(doc: string, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    User_GetCurrentUser(variables?: User_GetCurrentUserQueryVariables, options?: C): Promise<User_GetCurrentUserQuery> {
      return requester<User_GetCurrentUserQuery, User_GetCurrentUserQueryVariables>(User_GetCurrentUserDocument, variables, options) as Promise<User_GetCurrentUserQuery>;
    },
    GetUserFeatures(variables: GetUserFeaturesQueryVariables, options?: C): Promise<GetUserFeaturesQuery> {
      return requester<GetUserFeaturesQuery, GetUserFeaturesQueryVariables>(GetUserFeaturesDocument, variables, options) as Promise<GetUserFeaturesQuery>;
    },
    SetDefaultTenant(variables: SetDefaultTenantMutationVariables, options?: C): Promise<SetDefaultTenantMutation> {
      return requester<SetDefaultTenantMutation, SetDefaultTenantMutationVariables>(SetDefaultTenantDocument, variables, options) as Promise<SetDefaultTenantMutation>;
    },
    GetPasskeys(variables?: GetPasskeysQueryVariables, options?: C): Promise<GetPasskeysQuery> {
      return requester<GetPasskeysQuery, GetPasskeysQueryVariables>(GetPasskeysDocument, variables, options) as Promise<GetPasskeysQuery>;
    },
    DeletePasskey(variables: DeletePasskeyMutationVariables, options?: C): Promise<DeletePasskeyMutation> {
      return requester<DeletePasskeyMutation, DeletePasskeyMutationVariables>(DeletePasskeyDocument, variables, options) as Promise<DeletePasskeyMutation>;
    },
    RenamePasskey(variables: RenamePasskeyMutationVariables, options?: C): Promise<RenamePasskeyMutation> {
      return requester<RenamePasskeyMutation, RenamePasskeyMutationVariables>(RenamePasskeyDocument, variables, options) as Promise<RenamePasskeyMutation>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
export function useUserSdk(){const requester = useFetchRequester('user');return getSdk(requester);}