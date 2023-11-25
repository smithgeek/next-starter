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
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
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

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "webauthn_credentials" */
  delete_webauthn_credentials: Maybe<Webauthn_Credentials_Mutation_Response>;
  /** delete single row from the table: "webauthn_credentials" */
  delete_webauthn_credentials_by_pk: Maybe<Webauthn_Credentials>;
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
  /** fetch data from the table: "user_features" */
  user_features: Array<User_Features>;
  /** fetch data from the table: "user_features" using primary key columns */
  user_features_by_pk: Maybe<User_Features>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk: Maybe<Users>;
  /** An array relationship */
  webauthn_credentials: Array<Webauthn_Credentials>;
  /** fetch data from the table: "webauthn_credentials" using primary key columns */
  webauthn_credentials_by_pk: Maybe<Webauthn_Credentials>;
};


export type Query_RootUser_FeaturesArgs = {
  distinct_on: InputMaybe<Array<User_Features_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<User_Features_Order_By>>;
  where: InputMaybe<User_Features_Bool_Exp>;
};


export type Query_RootUser_Features_By_PkArgs = {
  feature_id: Scalars['Int']['input'];
  user_id: Scalars['uuid']['input'];
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
  /** fetch data from the table: "user_features" */
  user_features: Array<User_Features>;
  /** fetch data from the table: "user_features" using primary key columns */
  user_features_by_pk: Maybe<User_Features>;
  /** fetch data from the table in a streaming manner: "user_features" */
  user_features_stream: Array<User_Features>;
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


export type Subscription_RootUser_FeaturesArgs = {
  distinct_on: InputMaybe<Array<User_Features_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<User_Features_Order_By>>;
  where: InputMaybe<User_Features_Bool_Exp>;
};


export type Subscription_RootUser_Features_By_PkArgs = {
  feature_id: Scalars['Int']['input'];
  user_id: Scalars['uuid']['input'];
};


export type Subscription_RootUser_Features_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Features_Stream_Cursor_Input>>;
  where: InputMaybe<User_Features_Bool_Exp>;
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
  feature_id: Scalars['Int']['output'];
  user_id: Scalars['uuid']['output'];
};

/** order by aggregate values of table "user_features" */
export type User_Features_Aggregate_Order_By = {
  avg: InputMaybe<User_Features_Avg_Order_By>;
  count: InputMaybe<Order_By>;
  max: InputMaybe<User_Features_Max_Order_By>;
  min: InputMaybe<User_Features_Min_Order_By>;
  stddev: InputMaybe<User_Features_Stddev_Order_By>;
  stddev_pop: InputMaybe<User_Features_Stddev_Pop_Order_By>;
  stddev_samp: InputMaybe<User_Features_Stddev_Samp_Order_By>;
  sum: InputMaybe<User_Features_Sum_Order_By>;
  var_pop: InputMaybe<User_Features_Var_Pop_Order_By>;
  var_samp: InputMaybe<User_Features_Var_Samp_Order_By>;
  variance: InputMaybe<User_Features_Variance_Order_By>;
};

/** order by avg() on columns of table "user_features" */
export type User_Features_Avg_Order_By = {
  feature_id: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user_features". All fields are combined with a logical 'AND'. */
export type User_Features_Bool_Exp = {
  _and: InputMaybe<Array<User_Features_Bool_Exp>>;
  _not: InputMaybe<User_Features_Bool_Exp>;
  _or: InputMaybe<Array<User_Features_Bool_Exp>>;
  feature_id: InputMaybe<Int_Comparison_Exp>;
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

/** order by stddev() on columns of table "user_features" */
export type User_Features_Stddev_Order_By = {
  feature_id: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "user_features" */
export type User_Features_Stddev_Pop_Order_By = {
  feature_id: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "user_features" */
export type User_Features_Stddev_Samp_Order_By = {
  feature_id: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "user_features" */
export type User_Features_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Features_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Features_Stream_Cursor_Value_Input = {
  feature_id: InputMaybe<Scalars['Int']['input']>;
  user_id: InputMaybe<Scalars['uuid']['input']>;
};

/** order by sum() on columns of table "user_features" */
export type User_Features_Sum_Order_By = {
  feature_id: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "user_features" */
export type User_Features_Var_Pop_Order_By = {
  feature_id: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "user_features" */
export type User_Features_Var_Samp_Order_By = {
  feature_id: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "user_features" */
export type User_Features_Variance_Order_By = {
  feature_id: InputMaybe<Order_By>;
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
  webauthn_credentials: InputMaybe<Webauthn_Credentials_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  email: InputMaybe<Order_By>;
  features_aggregate: InputMaybe<User_Features_Aggregate_Order_By>;
  id: InputMaybe<Order_By>;
  name: InputMaybe<Order_By>;
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


export type User_GetCurrentUserQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: any, name: string | null, email: string }> };

export type GetUserFeaturesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserFeaturesQuery = { __typename?: 'query_root', user_features: Array<{ __typename?: 'user_features', feature_id: number }> };

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
  }
}
    `;
 const GetUserFeaturesDocument = `
    query GetUserFeatures {
  user_features {
    feature_id
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
    GetUserFeatures(variables?: GetUserFeaturesQueryVariables, options?: C): Promise<GetUserFeaturesQuery> {
      return requester<GetUserFeaturesQuery, GetUserFeaturesQueryVariables>(GetUserFeaturesDocument, variables, options) as Promise<GetUserFeaturesQuery>;
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