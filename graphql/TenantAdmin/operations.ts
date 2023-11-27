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

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
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
  feature_id: Scalars['Int']['output'];
  id: Scalars['uuid']['output'];
  options: Maybe<Scalars['jsonb']['output']>;
  /** An array relationship */
  tenant_features: Array<Tenant_Features>;
  /** An array relationship */
  user_tenant_features: Array<User_Tenant_Features>;
};


/** columns and relationships of "features" */
export type FeaturesOptionsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "features" */
export type FeaturesTenant_FeaturesArgs = {
  distinct_on?: InputMaybe<Array<Tenant_Features_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tenant_Features_Order_By>>;
  where?: InputMaybe<Tenant_Features_Bool_Exp>;
};


/** columns and relationships of "features" */
export type FeaturesUser_Tenant_FeaturesArgs = {
  distinct_on?: InputMaybe<Array<User_Tenant_Features_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Tenant_Features_Order_By>>;
  where?: InputMaybe<User_Tenant_Features_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "features". All fields are combined with a logical 'AND'. */
export type Features_Bool_Exp = {
  _and?: InputMaybe<Array<Features_Bool_Exp>>;
  _not?: InputMaybe<Features_Bool_Exp>;
  _or?: InputMaybe<Array<Features_Bool_Exp>>;
  expiration?: InputMaybe<Timestamptz_Comparison_Exp>;
  feature_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  options?: InputMaybe<Jsonb_Comparison_Exp>;
  tenant_features?: InputMaybe<Tenant_Features_Bool_Exp>;
  user_tenant_features?: InputMaybe<User_Tenant_Features_Bool_Exp>;
};

/** Ordering options when selecting data from "features". */
export type Features_Order_By = {
  expiration?: InputMaybe<Order_By>;
  feature_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  options?: InputMaybe<Order_By>;
  tenant_features_aggregate?: InputMaybe<Tenant_Features_Aggregate_Order_By>;
  user_tenant_features_aggregate?: InputMaybe<User_Tenant_Features_Aggregate_Order_By>;
};

/** select columns of table "features" */
export enum Features_Select_Column {
  /** column name */
  Expiration = 'expiration',
  /** column name */
  FeatureId = 'feature_id',
  /** column name */
  Id = 'id',
  /** column name */
  Options = 'options'
}

/** Streaming cursor of the table "features" */
export type Features_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Features_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Features_Stream_Cursor_Value_Input = {
  expiration?: InputMaybe<Scalars['timestamptz']['input']>;
  feature_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  options?: InputMaybe<Scalars['jsonb']['input']>;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']['input']>;
  _eq?: InputMaybe<Scalars['jsonb']['input']>;
  _gt?: InputMaybe<Scalars['jsonb']['input']>;
  _gte?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']['input']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['jsonb']['input']>;
  _lte?: InputMaybe<Scalars['jsonb']['input']>;
  _neq?: InputMaybe<Scalars['jsonb']['input']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']['input']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** update data of the table: "user_tenant_features" */
  update_user_tenant_features: Maybe<User_Tenant_Features_Mutation_Response>;
  /** update single row of the table: "user_tenant_features" */
  update_user_tenant_features_by_pk: Maybe<User_Tenant_Features>;
  /** update multiples rows of table: "user_tenant_features" */
  update_user_tenant_features_many: Maybe<Array<Maybe<User_Tenant_Features_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootUpdate_User_Tenant_FeaturesArgs = {
  _set?: InputMaybe<User_Tenant_Features_Set_Input>;
  where: User_Tenant_Features_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Tenant_Features_By_PkArgs = {
  _set?: InputMaybe<User_Tenant_Features_Set_Input>;
  pk_columns: User_Tenant_Features_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Tenant_Features_ManyArgs = {
  updates: Array<User_Tenant_Features_Updates>;
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
  user_tenant_features: Array<User_Tenant_Features>;
  /** fetch data from the table: "user_tenant_features" using primary key columns */
  user_tenant_features_by_pk: Maybe<User_Tenant_Features>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk: Maybe<Users>;
};


export type Query_RootFeaturesArgs = {
  distinct_on?: InputMaybe<Array<Features_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Features_Order_By>>;
  where?: InputMaybe<Features_Bool_Exp>;
};


export type Query_RootFeatures_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootTenantArgs = {
  distinct_on?: InputMaybe<Array<Tenant_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tenant_Order_By>>;
  where?: InputMaybe<Tenant_Bool_Exp>;
};


export type Query_RootTenant_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootTenant_FeaturesArgs = {
  distinct_on?: InputMaybe<Array<Tenant_Features_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tenant_Features_Order_By>>;
  where?: InputMaybe<Tenant_Features_Bool_Exp>;
};


export type Query_RootTenant_Features_By_PkArgs = {
  feature_id: Scalars['uuid']['input'];
  tenant_id: Scalars['uuid']['input'];
};


export type Query_RootTenant_UsersArgs = {
  distinct_on?: InputMaybe<Array<Tenant_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tenant_Users_Order_By>>;
  where?: InputMaybe<Tenant_Users_Bool_Exp>;
};


export type Query_RootTenant_Users_By_PkArgs = {
  tenant_id: Scalars['uuid']['input'];
  user_id: Scalars['uuid']['input'];
};


export type Query_RootUser_Tenant_FeaturesArgs = {
  distinct_on?: InputMaybe<Array<User_Tenant_Features_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Tenant_Features_Order_By>>;
  where?: InputMaybe<User_Tenant_Features_Bool_Exp>;
};


export type Query_RootUser_Tenant_Features_By_PkArgs = {
  feature_id: Scalars['uuid']['input'];
  tenant_id: Scalars['uuid']['input'];
  user_id: Scalars['uuid']['input'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid']['input'];
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
  user_tenant_features: Array<User_Tenant_Features>;
  /** fetch data from the table: "user_tenant_features" using primary key columns */
  user_tenant_features_by_pk: Maybe<User_Tenant_Features>;
  /** fetch data from the table in a streaming manner: "user_tenant_features" */
  user_tenant_features_stream: Array<User_Tenant_Features>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
};


export type Subscription_RootFeaturesArgs = {
  distinct_on?: InputMaybe<Array<Features_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Features_Order_By>>;
  where?: InputMaybe<Features_Bool_Exp>;
};


export type Subscription_RootFeatures_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootFeatures_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Features_Stream_Cursor_Input>>;
  where?: InputMaybe<Features_Bool_Exp>;
};


export type Subscription_RootTenantArgs = {
  distinct_on?: InputMaybe<Array<Tenant_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tenant_Order_By>>;
  where?: InputMaybe<Tenant_Bool_Exp>;
};


export type Subscription_RootTenant_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootTenant_FeaturesArgs = {
  distinct_on?: InputMaybe<Array<Tenant_Features_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tenant_Features_Order_By>>;
  where?: InputMaybe<Tenant_Features_Bool_Exp>;
};


export type Subscription_RootTenant_Features_By_PkArgs = {
  feature_id: Scalars['uuid']['input'];
  tenant_id: Scalars['uuid']['input'];
};


export type Subscription_RootTenant_Features_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Tenant_Features_Stream_Cursor_Input>>;
  where?: InputMaybe<Tenant_Features_Bool_Exp>;
};


export type Subscription_RootTenant_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Tenant_Stream_Cursor_Input>>;
  where?: InputMaybe<Tenant_Bool_Exp>;
};


export type Subscription_RootTenant_UsersArgs = {
  distinct_on?: InputMaybe<Array<Tenant_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tenant_Users_Order_By>>;
  where?: InputMaybe<Tenant_Users_Bool_Exp>;
};


export type Subscription_RootTenant_Users_By_PkArgs = {
  tenant_id: Scalars['uuid']['input'];
  user_id: Scalars['uuid']['input'];
};


export type Subscription_RootTenant_Users_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Tenant_Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Tenant_Users_Bool_Exp>;
};


export type Subscription_RootUser_Tenant_FeaturesArgs = {
  distinct_on?: InputMaybe<Array<User_Tenant_Features_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Tenant_Features_Order_By>>;
  where?: InputMaybe<User_Tenant_Features_Bool_Exp>;
};


export type Subscription_RootUser_Tenant_Features_By_PkArgs = {
  feature_id: Scalars['uuid']['input'];
  tenant_id: Scalars['uuid']['input'];
  user_id: Scalars['uuid']['input'];
};


export type Subscription_RootUser_Tenant_Features_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Tenant_Features_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Tenant_Features_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** columns and relationships of "tenant" */
export type Tenant = {
  __typename?: 'tenant';
  /** An array relationship */
  features: Array<Tenant_Features>;
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  /** An array relationship */
  users: Array<Tenant_Users>;
};


/** columns and relationships of "tenant" */
export type TenantFeaturesArgs = {
  distinct_on?: InputMaybe<Array<Tenant_Features_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tenant_Features_Order_By>>;
  where?: InputMaybe<Tenant_Features_Bool_Exp>;
};


/** columns and relationships of "tenant" */
export type TenantUsersArgs = {
  distinct_on?: InputMaybe<Array<Tenant_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tenant_Users_Order_By>>;
  where?: InputMaybe<Tenant_Users_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "tenant". All fields are combined with a logical 'AND'. */
export type Tenant_Bool_Exp = {
  _and?: InputMaybe<Array<Tenant_Bool_Exp>>;
  _not?: InputMaybe<Tenant_Bool_Exp>;
  _or?: InputMaybe<Array<Tenant_Bool_Exp>>;
  features?: InputMaybe<Tenant_Features_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  users?: InputMaybe<Tenant_Users_Bool_Exp>;
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
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Tenant_Features_Max_Order_By>;
  min?: InputMaybe<Tenant_Features_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "tenant_features". All fields are combined with a logical 'AND'. */
export type Tenant_Features_Bool_Exp = {
  _and?: InputMaybe<Array<Tenant_Features_Bool_Exp>>;
  _not?: InputMaybe<Tenant_Features_Bool_Exp>;
  _or?: InputMaybe<Array<Tenant_Features_Bool_Exp>>;
  feature?: InputMaybe<Features_Bool_Exp>;
  feature_id?: InputMaybe<Uuid_Comparison_Exp>;
  tenant_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** order by max() on columns of table "tenant_features" */
export type Tenant_Features_Max_Order_By = {
  feature_id?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "tenant_features" */
export type Tenant_Features_Min_Order_By = {
  feature_id?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "tenant_features". */
export type Tenant_Features_Order_By = {
  feature?: InputMaybe<Features_Order_By>;
  feature_id?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
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
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tenant_Features_Stream_Cursor_Value_Input = {
  feature_id?: InputMaybe<Scalars['uuid']['input']>;
  tenant_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Ordering options when selecting data from "tenant". */
export type Tenant_Order_By = {
  features_aggregate?: InputMaybe<Tenant_Features_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  users_aggregate?: InputMaybe<Tenant_Users_Aggregate_Order_By>;
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
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tenant_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "tenant_users" */
export type Tenant_Users = {
  __typename?: 'tenant_users';
  /** An object relationship */
  tenant: Tenant;
  tenant_id: Scalars['uuid']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
  /** An array relationship */
  user_tenant_features: Array<User_Tenant_Features>;
};


/** columns and relationships of "tenant_users" */
export type Tenant_UsersUser_Tenant_FeaturesArgs = {
  distinct_on?: InputMaybe<Array<User_Tenant_Features_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Tenant_Features_Order_By>>;
  where?: InputMaybe<User_Tenant_Features_Bool_Exp>;
};

/** order by aggregate values of table "tenant_users" */
export type Tenant_Users_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Tenant_Users_Max_Order_By>;
  min?: InputMaybe<Tenant_Users_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "tenant_users". All fields are combined with a logical 'AND'. */
export type Tenant_Users_Bool_Exp = {
  _and?: InputMaybe<Array<Tenant_Users_Bool_Exp>>;
  _not?: InputMaybe<Tenant_Users_Bool_Exp>;
  _or?: InputMaybe<Array<Tenant_Users_Bool_Exp>>;
  tenant?: InputMaybe<Tenant_Bool_Exp>;
  tenant_id?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
  user_tenant_features?: InputMaybe<User_Tenant_Features_Bool_Exp>;
};

/** order by max() on columns of table "tenant_users" */
export type Tenant_Users_Max_Order_By = {
  tenant_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "tenant_users" */
export type Tenant_Users_Min_Order_By = {
  tenant_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "tenant_users". */
export type Tenant_Users_Order_By = {
  tenant?: InputMaybe<Tenant_Order_By>;
  tenant_id?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
  user_tenant_features_aggregate?: InputMaybe<User_Tenant_Features_Aggregate_Order_By>;
};

/** select columns of table "tenant_users" */
export enum Tenant_Users_Select_Column {
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  UserId = 'user_id'
}

/** Streaming cursor of the table "tenant_users" */
export type Tenant_Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Tenant_Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tenant_Users_Stream_Cursor_Value_Input = {
  tenant_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "user_tenant_features" */
export type User_Tenant_Features = {
  __typename?: 'user_tenant_features';
  /** An object relationship */
  feature: Features;
  feature_id: Scalars['uuid']['output'];
  tenant_id: Scalars['uuid']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
};

/** order by aggregate values of table "user_tenant_features" */
export type User_Tenant_Features_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Tenant_Features_Max_Order_By>;
  min?: InputMaybe<User_Tenant_Features_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "user_tenant_features". All fields are combined with a logical 'AND'. */
export type User_Tenant_Features_Bool_Exp = {
  _and?: InputMaybe<Array<User_Tenant_Features_Bool_Exp>>;
  _not?: InputMaybe<User_Tenant_Features_Bool_Exp>;
  _or?: InputMaybe<Array<User_Tenant_Features_Bool_Exp>>;
  feature?: InputMaybe<Features_Bool_Exp>;
  feature_id?: InputMaybe<Uuid_Comparison_Exp>;
  tenant_id?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** order by max() on columns of table "user_tenant_features" */
export type User_Tenant_Features_Max_Order_By = {
  feature_id?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "user_tenant_features" */
export type User_Tenant_Features_Min_Order_By = {
  feature_id?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user_tenant_features" */
export type User_Tenant_Features_Mutation_Response = {
  __typename?: 'user_tenant_features_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Tenant_Features>;
};

/** Ordering options when selecting data from "user_tenant_features". */
export type User_Tenant_Features_Order_By = {
  feature?: InputMaybe<Features_Order_By>;
  feature_id?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_tenant_features */
export type User_Tenant_Features_Pk_Columns_Input = {
  feature_id: Scalars['uuid']['input'];
  tenant_id: Scalars['uuid']['input'];
  user_id: Scalars['uuid']['input'];
};

/** select columns of table "user_tenant_features" */
export enum User_Tenant_Features_Select_Column {
  /** column name */
  FeatureId = 'feature_id',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "user_tenant_features" */
export type User_Tenant_Features_Set_Input = {
  feature_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "user_tenant_features" */
export type User_Tenant_Features_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Tenant_Features_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Tenant_Features_Stream_Cursor_Value_Input = {
  feature_id?: InputMaybe<Scalars['uuid']['input']>;
  tenant_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

export type User_Tenant_Features_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Tenant_Features_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Tenant_Features_Bool_Exp;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  email: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  name: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  tenants: Array<Tenant_Users>;
};


/** columns and relationships of "users" */
export type UsersTenantsArgs = {
  distinct_on?: InputMaybe<Array<Tenant_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tenant_Users_Order_By>>;
  where?: InputMaybe<Tenant_Users_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  tenants?: InputMaybe<Tenant_Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  tenants_aggregate?: InputMaybe<Tenant_Users_Aggregate_Order_By>;
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
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: any, name: string | null, email: string, tenants: Array<{ __typename?: 'tenant_users', user_tenant_features: Array<{ __typename?: 'user_tenant_features', feature: { __typename?: 'features', feature_id: number } }> }> }> };


 const GetUsersDocument = `
    query GetUsers {
  users {
    id
    name
    email
    tenants {
      user_tenant_features {
        feature {
          feature_id
        }
      }
    }
  }
}
    `;
export type Requester<C = {}, E = unknown> = <R, V>(doc: string, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    GetUsers(variables?: GetUsersQueryVariables, options?: C): Promise<GetUsersQuery> {
      return requester<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, variables, options) as Promise<GetUsersQuery>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
export function useTenantAdminSdk(){const requester = useFetchRequester('tenant_admin');return getSdk(requester);}