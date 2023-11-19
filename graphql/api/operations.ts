import { fetchRequester } from "./FetchRequester";
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
  bytea: { input: any; output: any; }
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
export type String_Array_Comparison_Exp = {
  /** is the array contained in the given array value */
  _contained_in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the array contain the given value */
  _contains?: InputMaybe<Array<Scalars['String']['input']>>;
  _eq?: InputMaybe<Array<Scalars['String']['input']>>;
  _gt?: InputMaybe<Array<Scalars['String']['input']>>;
  _gte?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Array<Scalars['String']['input']>>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Array<Scalars['String']['input']>>;
  _lte?: InputMaybe<Array<Scalars['String']['input']>>;
  _neq?: InputMaybe<Array<Scalars['String']['input']>>;
  _nin?: InputMaybe<Array<Array<Scalars['String']['input']>>>;
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

/** columns and relationships of "accounts" */
export type Accounts = {
  __typename?: 'accounts';
  access_token?: Maybe<Scalars['String']['output']>;
  expires_at?: Maybe<Scalars['Int']['output']>;
  id: Scalars['uuid']['output'];
  id_token?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  providerAccountId: Scalars['String']['output'];
  /** An object relationship */
  provider_type: Provider_Type;
  refresh_token?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  session_state?: Maybe<Scalars['String']['output']>;
  token_type?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid']['output'];
};

/** aggregated selection of "accounts" */
export type Accounts_Aggregate = {
  __typename?: 'accounts_aggregate';
  aggregate?: Maybe<Accounts_Aggregate_Fields>;
  nodes: Array<Accounts>;
};

export type Accounts_Aggregate_Bool_Exp = {
  count?: InputMaybe<Accounts_Aggregate_Bool_Exp_Count>;
};

export type Accounts_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Accounts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Accounts_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "accounts" */
export type Accounts_Aggregate_Fields = {
  __typename?: 'accounts_aggregate_fields';
  avg?: Maybe<Accounts_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Accounts_Max_Fields>;
  min?: Maybe<Accounts_Min_Fields>;
  stddev?: Maybe<Accounts_Stddev_Fields>;
  stddev_pop?: Maybe<Accounts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Accounts_Stddev_Samp_Fields>;
  sum?: Maybe<Accounts_Sum_Fields>;
  var_pop?: Maybe<Accounts_Var_Pop_Fields>;
  var_samp?: Maybe<Accounts_Var_Samp_Fields>;
  variance?: Maybe<Accounts_Variance_Fields>;
};


/** aggregate fields of "accounts" */
export type Accounts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Accounts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "accounts" */
export type Accounts_Aggregate_Order_By = {
  avg?: InputMaybe<Accounts_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Accounts_Max_Order_By>;
  min?: InputMaybe<Accounts_Min_Order_By>;
  stddev?: InputMaybe<Accounts_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Accounts_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Accounts_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Accounts_Sum_Order_By>;
  var_pop?: InputMaybe<Accounts_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Accounts_Var_Samp_Order_By>;
  variance?: InputMaybe<Accounts_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "accounts" */
export type Accounts_Arr_Rel_Insert_Input = {
  data: Array<Accounts_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Accounts_On_Conflict>;
};

/** aggregate avg on columns */
export type Accounts_Avg_Fields = {
  __typename?: 'accounts_avg_fields';
  expires_at?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "accounts" */
export type Accounts_Avg_Order_By = {
  expires_at?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "accounts". All fields are combined with a logical 'AND'. */
export type Accounts_Bool_Exp = {
  _and?: InputMaybe<Array<Accounts_Bool_Exp>>;
  _not?: InputMaybe<Accounts_Bool_Exp>;
  _or?: InputMaybe<Array<Accounts_Bool_Exp>>;
  access_token?: InputMaybe<String_Comparison_Exp>;
  expires_at?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  id_token?: InputMaybe<String_Comparison_Exp>;
  provider?: InputMaybe<String_Comparison_Exp>;
  providerAccountId?: InputMaybe<String_Comparison_Exp>;
  provider_type?: InputMaybe<Provider_Type_Bool_Exp>;
  refresh_token?: InputMaybe<String_Comparison_Exp>;
  scope?: InputMaybe<String_Comparison_Exp>;
  session_state?: InputMaybe<String_Comparison_Exp>;
  token_type?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "accounts" */
export enum Accounts_Constraint {
  /** unique or primary key constraint on columns "id" */
  AccountsPkey = 'accounts_pkey'
}

/** input type for incrementing numeric columns in table "accounts" */
export type Accounts_Inc_Input = {
  expires_at?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "accounts" */
export type Accounts_Insert_Input = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  expires_at?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  id_token?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  providerAccountId?: InputMaybe<Scalars['String']['input']>;
  provider_type?: InputMaybe<Provider_Type_Obj_Rel_Insert_Input>;
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  session_state?: InputMaybe<Scalars['String']['input']>;
  token_type?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Accounts_Max_Fields = {
  __typename?: 'accounts_max_fields';
  access_token?: Maybe<Scalars['String']['output']>;
  expires_at?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  id_token?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  providerAccountId?: Maybe<Scalars['String']['output']>;
  refresh_token?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  session_state?: Maybe<Scalars['String']['output']>;
  token_type?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "accounts" */
export type Accounts_Max_Order_By = {
  access_token?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_token?: InputMaybe<Order_By>;
  provider?: InputMaybe<Order_By>;
  providerAccountId?: InputMaybe<Order_By>;
  refresh_token?: InputMaybe<Order_By>;
  scope?: InputMaybe<Order_By>;
  session_state?: InputMaybe<Order_By>;
  token_type?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Accounts_Min_Fields = {
  __typename?: 'accounts_min_fields';
  access_token?: Maybe<Scalars['String']['output']>;
  expires_at?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  id_token?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  providerAccountId?: Maybe<Scalars['String']['output']>;
  refresh_token?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  session_state?: Maybe<Scalars['String']['output']>;
  token_type?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "accounts" */
export type Accounts_Min_Order_By = {
  access_token?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_token?: InputMaybe<Order_By>;
  provider?: InputMaybe<Order_By>;
  providerAccountId?: InputMaybe<Order_By>;
  refresh_token?: InputMaybe<Order_By>;
  scope?: InputMaybe<Order_By>;
  session_state?: InputMaybe<Order_By>;
  token_type?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "accounts" */
export type Accounts_Mutation_Response = {
  __typename?: 'accounts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Accounts>;
};

/** on_conflict condition type for table "accounts" */
export type Accounts_On_Conflict = {
  constraint: Accounts_Constraint;
  update_columns?: Array<Accounts_Update_Column>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

/** Ordering options when selecting data from "accounts". */
export type Accounts_Order_By = {
  access_token?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_token?: InputMaybe<Order_By>;
  provider?: InputMaybe<Order_By>;
  providerAccountId?: InputMaybe<Order_By>;
  provider_type?: InputMaybe<Provider_Type_Order_By>;
  refresh_token?: InputMaybe<Order_By>;
  scope?: InputMaybe<Order_By>;
  session_state?: InputMaybe<Order_By>;
  token_type?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: accounts */
export type Accounts_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "accounts" */
export enum Accounts_Select_Column {
  /** column name */
  AccessToken = 'access_token',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  Id = 'id',
  /** column name */
  IdToken = 'id_token',
  /** column name */
  Provider = 'provider',
  /** column name */
  ProviderAccountId = 'providerAccountId',
  /** column name */
  RefreshToken = 'refresh_token',
  /** column name */
  Scope = 'scope',
  /** column name */
  SessionState = 'session_state',
  /** column name */
  TokenType = 'token_type',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "accounts" */
export type Accounts_Set_Input = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  expires_at?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  id_token?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  providerAccountId?: InputMaybe<Scalars['String']['input']>;
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  session_state?: InputMaybe<Scalars['String']['input']>;
  token_type?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Accounts_Stddev_Fields = {
  __typename?: 'accounts_stddev_fields';
  expires_at?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "accounts" */
export type Accounts_Stddev_Order_By = {
  expires_at?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Accounts_Stddev_Pop_Fields = {
  __typename?: 'accounts_stddev_pop_fields';
  expires_at?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "accounts" */
export type Accounts_Stddev_Pop_Order_By = {
  expires_at?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Accounts_Stddev_Samp_Fields = {
  __typename?: 'accounts_stddev_samp_fields';
  expires_at?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "accounts" */
export type Accounts_Stddev_Samp_Order_By = {
  expires_at?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "accounts" */
export type Accounts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Accounts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Accounts_Stream_Cursor_Value_Input = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  expires_at?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  id_token?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  providerAccountId?: InputMaybe<Scalars['String']['input']>;
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  session_state?: InputMaybe<Scalars['String']['input']>;
  token_type?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Accounts_Sum_Fields = {
  __typename?: 'accounts_sum_fields';
  expires_at?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "accounts" */
export type Accounts_Sum_Order_By = {
  expires_at?: InputMaybe<Order_By>;
};

/** update columns of table "accounts" */
export enum Accounts_Update_Column {
  /** column name */
  AccessToken = 'access_token',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  Id = 'id',
  /** column name */
  IdToken = 'id_token',
  /** column name */
  Provider = 'provider',
  /** column name */
  ProviderAccountId = 'providerAccountId',
  /** column name */
  RefreshToken = 'refresh_token',
  /** column name */
  Scope = 'scope',
  /** column name */
  SessionState = 'session_state',
  /** column name */
  TokenType = 'token_type',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'userId'
}

export type Accounts_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Accounts_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Accounts_Set_Input>;
  /** filter the rows which have to be updated */
  where: Accounts_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Accounts_Var_Pop_Fields = {
  __typename?: 'accounts_var_pop_fields';
  expires_at?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "accounts" */
export type Accounts_Var_Pop_Order_By = {
  expires_at?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Accounts_Var_Samp_Fields = {
  __typename?: 'accounts_var_samp_fields';
  expires_at?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "accounts" */
export type Accounts_Var_Samp_Order_By = {
  expires_at?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Accounts_Variance_Fields = {
  __typename?: 'accounts_variance_fields';
  expires_at?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "accounts" */
export type Accounts_Variance_Order_By = {
  expires_at?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "bytea". All fields are combined with logical 'AND'. */
export type Bytea_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bytea']['input']>;
  _gt?: InputMaybe<Scalars['bytea']['input']>;
  _gte?: InputMaybe<Scalars['bytea']['input']>;
  _in?: InputMaybe<Array<Scalars['bytea']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bytea']['input']>;
  _lte?: InputMaybe<Scalars['bytea']['input']>;
  _neq?: InputMaybe<Scalars['bytea']['input']>;
  _nin?: InputMaybe<Array<Scalars['bytea']['input']>>;
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
  /** delete data from the table: "accounts" */
  delete_accounts?: Maybe<Accounts_Mutation_Response>;
  /** delete single row from the table: "accounts" */
  delete_accounts_by_pk?: Maybe<Accounts>;
  /** delete data from the table: "provider_type" */
  delete_provider_type?: Maybe<Provider_Type_Mutation_Response>;
  /** delete single row from the table: "provider_type" */
  delete_provider_type_by_pk?: Maybe<Provider_Type>;
  /** delete data from the table: "sessions" */
  delete_sessions?: Maybe<Sessions_Mutation_Response>;
  /** delete single row from the table: "sessions" */
  delete_sessions_by_pk?: Maybe<Sessions>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** delete data from the table: "verification_tokens" */
  delete_verification_tokens?: Maybe<Verification_Tokens_Mutation_Response>;
  /** delete single row from the table: "verification_tokens" */
  delete_verification_tokens_by_pk?: Maybe<Verification_Tokens>;
  /** delete data from the table: "webauthn_challenges" */
  delete_webauthn_challenges?: Maybe<Webauthn_Challenges_Mutation_Response>;
  /** delete single row from the table: "webauthn_challenges" */
  delete_webauthn_challenges_by_pk?: Maybe<Webauthn_Challenges>;
  /** delete data from the table: "webauthn_credentials" */
  delete_webauthn_credentials?: Maybe<Webauthn_Credentials_Mutation_Response>;
  /** delete single row from the table: "webauthn_credentials" */
  delete_webauthn_credentials_by_pk?: Maybe<Webauthn_Credentials>;
  /** insert data into the table: "accounts" */
  insert_accounts?: Maybe<Accounts_Mutation_Response>;
  /** insert a single row into the table: "accounts" */
  insert_accounts_one?: Maybe<Accounts>;
  /** insert data into the table: "provider_type" */
  insert_provider_type?: Maybe<Provider_Type_Mutation_Response>;
  /** insert a single row into the table: "provider_type" */
  insert_provider_type_one?: Maybe<Provider_Type>;
  /** insert data into the table: "sessions" */
  insert_sessions?: Maybe<Sessions_Mutation_Response>;
  /** insert a single row into the table: "sessions" */
  insert_sessions_one?: Maybe<Sessions>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** insert data into the table: "verification_tokens" */
  insert_verification_tokens?: Maybe<Verification_Tokens_Mutation_Response>;
  /** insert a single row into the table: "verification_tokens" */
  insert_verification_tokens_one?: Maybe<Verification_Tokens>;
  /** insert data into the table: "webauthn_challenges" */
  insert_webauthn_challenges?: Maybe<Webauthn_Challenges_Mutation_Response>;
  /** insert a single row into the table: "webauthn_challenges" */
  insert_webauthn_challenges_one?: Maybe<Webauthn_Challenges>;
  /** insert data into the table: "webauthn_credentials" */
  insert_webauthn_credentials?: Maybe<Webauthn_Credentials_Mutation_Response>;
  /** insert a single row into the table: "webauthn_credentials" */
  insert_webauthn_credentials_one?: Maybe<Webauthn_Credentials>;
  /** update data of the table: "accounts" */
  update_accounts?: Maybe<Accounts_Mutation_Response>;
  /** update single row of the table: "accounts" */
  update_accounts_by_pk?: Maybe<Accounts>;
  /** update multiples rows of table: "accounts" */
  update_accounts_many?: Maybe<Array<Maybe<Accounts_Mutation_Response>>>;
  /** update data of the table: "provider_type" */
  update_provider_type?: Maybe<Provider_Type_Mutation_Response>;
  /** update single row of the table: "provider_type" */
  update_provider_type_by_pk?: Maybe<Provider_Type>;
  /** update multiples rows of table: "provider_type" */
  update_provider_type_many?: Maybe<Array<Maybe<Provider_Type_Mutation_Response>>>;
  /** update data of the table: "sessions" */
  update_sessions?: Maybe<Sessions_Mutation_Response>;
  /** update single row of the table: "sessions" */
  update_sessions_by_pk?: Maybe<Sessions>;
  /** update multiples rows of table: "sessions" */
  update_sessions_many?: Maybe<Array<Maybe<Sessions_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
  /** update data of the table: "verification_tokens" */
  update_verification_tokens?: Maybe<Verification_Tokens_Mutation_Response>;
  /** update single row of the table: "verification_tokens" */
  update_verification_tokens_by_pk?: Maybe<Verification_Tokens>;
  /** update multiples rows of table: "verification_tokens" */
  update_verification_tokens_many?: Maybe<Array<Maybe<Verification_Tokens_Mutation_Response>>>;
  /** update data of the table: "webauthn_challenges" */
  update_webauthn_challenges?: Maybe<Webauthn_Challenges_Mutation_Response>;
  /** update single row of the table: "webauthn_challenges" */
  update_webauthn_challenges_by_pk?: Maybe<Webauthn_Challenges>;
  /** update multiples rows of table: "webauthn_challenges" */
  update_webauthn_challenges_many?: Maybe<Array<Maybe<Webauthn_Challenges_Mutation_Response>>>;
  /** update data of the table: "webauthn_credentials" */
  update_webauthn_credentials?: Maybe<Webauthn_Credentials_Mutation_Response>;
  /** update single row of the table: "webauthn_credentials" */
  update_webauthn_credentials_by_pk?: Maybe<Webauthn_Credentials>;
  /** update multiples rows of table: "webauthn_credentials" */
  update_webauthn_credentials_many?: Maybe<Array<Maybe<Webauthn_Credentials_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_AccountsArgs = {
  where: Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Accounts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Provider_TypeArgs = {
  where: Provider_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Provider_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_SessionsArgs = {
  where: Sessions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Sessions_By_PkArgs = {
  sessionToken: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Verification_TokensArgs = {
  where: Verification_Tokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Verification_Tokens_By_PkArgs = {
  token: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Webauthn_ChallengesArgs = {
  where: Webauthn_Challenges_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Webauthn_Challenges_By_PkArgs = {
  user_id: Scalars['uuid']['input'];
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
export type Mutation_RootInsert_AccountsArgs = {
  objects: Array<Accounts_Insert_Input>;
  on_conflict?: InputMaybe<Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Accounts_OneArgs = {
  object: Accounts_Insert_Input;
  on_conflict?: InputMaybe<Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Provider_TypeArgs = {
  objects: Array<Provider_Type_Insert_Input>;
  on_conflict?: InputMaybe<Provider_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Provider_Type_OneArgs = {
  object: Provider_Type_Insert_Input;
  on_conflict?: InputMaybe<Provider_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SessionsArgs = {
  objects: Array<Sessions_Insert_Input>;
  on_conflict?: InputMaybe<Sessions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Sessions_OneArgs = {
  object: Sessions_Insert_Input;
  on_conflict?: InputMaybe<Sessions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Verification_TokensArgs = {
  objects: Array<Verification_Tokens_Insert_Input>;
  on_conflict?: InputMaybe<Verification_Tokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Verification_Tokens_OneArgs = {
  object: Verification_Tokens_Insert_Input;
  on_conflict?: InputMaybe<Verification_Tokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Webauthn_ChallengesArgs = {
  objects: Array<Webauthn_Challenges_Insert_Input>;
  on_conflict?: InputMaybe<Webauthn_Challenges_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Webauthn_Challenges_OneArgs = {
  object: Webauthn_Challenges_Insert_Input;
  on_conflict?: InputMaybe<Webauthn_Challenges_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Webauthn_CredentialsArgs = {
  objects: Array<Webauthn_Credentials_Insert_Input>;
  on_conflict?: InputMaybe<Webauthn_Credentials_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Webauthn_Credentials_OneArgs = {
  object: Webauthn_Credentials_Insert_Input;
  on_conflict?: InputMaybe<Webauthn_Credentials_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_AccountsArgs = {
  _inc?: InputMaybe<Accounts_Inc_Input>;
  _set?: InputMaybe<Accounts_Set_Input>;
  where: Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Accounts_By_PkArgs = {
  _inc?: InputMaybe<Accounts_Inc_Input>;
  _set?: InputMaybe<Accounts_Set_Input>;
  pk_columns: Accounts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Accounts_ManyArgs = {
  updates: Array<Accounts_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Provider_TypeArgs = {
  _set?: InputMaybe<Provider_Type_Set_Input>;
  where: Provider_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Provider_Type_By_PkArgs = {
  _set?: InputMaybe<Provider_Type_Set_Input>;
  pk_columns: Provider_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Provider_Type_ManyArgs = {
  updates: Array<Provider_Type_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_SessionsArgs = {
  _set?: InputMaybe<Sessions_Set_Input>;
  where: Sessions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Sessions_By_PkArgs = {
  _set?: InputMaybe<Sessions_Set_Input>;
  pk_columns: Sessions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Sessions_ManyArgs = {
  updates: Array<Sessions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Verification_TokensArgs = {
  _set?: InputMaybe<Verification_Tokens_Set_Input>;
  where: Verification_Tokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Verification_Tokens_By_PkArgs = {
  _set?: InputMaybe<Verification_Tokens_Set_Input>;
  pk_columns: Verification_Tokens_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Verification_Tokens_ManyArgs = {
  updates: Array<Verification_Tokens_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Webauthn_ChallengesArgs = {
  _set?: InputMaybe<Webauthn_Challenges_Set_Input>;
  where: Webauthn_Challenges_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Webauthn_Challenges_By_PkArgs = {
  _set?: InputMaybe<Webauthn_Challenges_Set_Input>;
  pk_columns: Webauthn_Challenges_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Webauthn_Challenges_ManyArgs = {
  updates: Array<Webauthn_Challenges_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Webauthn_CredentialsArgs = {
  _inc?: InputMaybe<Webauthn_Credentials_Inc_Input>;
  _set?: InputMaybe<Webauthn_Credentials_Set_Input>;
  where: Webauthn_Credentials_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Webauthn_Credentials_By_PkArgs = {
  _inc?: InputMaybe<Webauthn_Credentials_Inc_Input>;
  _set?: InputMaybe<Webauthn_Credentials_Set_Input>;
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

/** columns and relationships of "provider_type" */
export type Provider_Type = {
  __typename?: 'provider_type';
  /** An array relationship */
  accounts: Array<Accounts>;
  /** An aggregate relationship */
  accounts_aggregate: Accounts_Aggregate;
  value: Scalars['String']['output'];
};


/** columns and relationships of "provider_type" */
export type Provider_TypeAccountsArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


/** columns and relationships of "provider_type" */
export type Provider_TypeAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

/** aggregated selection of "provider_type" */
export type Provider_Type_Aggregate = {
  __typename?: 'provider_type_aggregate';
  aggregate?: Maybe<Provider_Type_Aggregate_Fields>;
  nodes: Array<Provider_Type>;
};

/** aggregate fields of "provider_type" */
export type Provider_Type_Aggregate_Fields = {
  __typename?: 'provider_type_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Provider_Type_Max_Fields>;
  min?: Maybe<Provider_Type_Min_Fields>;
};


/** aggregate fields of "provider_type" */
export type Provider_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Provider_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "provider_type". All fields are combined with a logical 'AND'. */
export type Provider_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Provider_Type_Bool_Exp>>;
  _not?: InputMaybe<Provider_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Provider_Type_Bool_Exp>>;
  accounts?: InputMaybe<Accounts_Bool_Exp>;
  accounts_aggregate?: InputMaybe<Accounts_Aggregate_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "provider_type" */
export enum Provider_Type_Constraint {
  /** unique or primary key constraint on columns "value" */
  ProviderTypePkey = 'provider_type_pkey'
}

/** input type for inserting data into table "provider_type" */
export type Provider_Type_Insert_Input = {
  accounts?: InputMaybe<Accounts_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Provider_Type_Max_Fields = {
  __typename?: 'provider_type_max_fields';
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Provider_Type_Min_Fields = {
  __typename?: 'provider_type_min_fields';
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "provider_type" */
export type Provider_Type_Mutation_Response = {
  __typename?: 'provider_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Provider_Type>;
};

/** input type for inserting object relation for remote table "provider_type" */
export type Provider_Type_Obj_Rel_Insert_Input = {
  data: Provider_Type_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Provider_Type_On_Conflict>;
};

/** on_conflict condition type for table "provider_type" */
export type Provider_Type_On_Conflict = {
  constraint: Provider_Type_Constraint;
  update_columns?: Array<Provider_Type_Update_Column>;
  where?: InputMaybe<Provider_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "provider_type". */
export type Provider_Type_Order_By = {
  accounts_aggregate?: InputMaybe<Accounts_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: provider_type */
export type Provider_Type_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "provider_type" */
export enum Provider_Type_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "provider_type" */
export type Provider_Type_Set_Input = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "provider_type" */
export type Provider_Type_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Provider_Type_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Provider_Type_Stream_Cursor_Value_Input = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "provider_type" */
export enum Provider_Type_Update_Column {
  /** column name */
  Value = 'value'
}

export type Provider_Type_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Provider_Type_Set_Input>;
  /** filter the rows which have to be updated */
  where: Provider_Type_Bool_Exp;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** An array relationship */
  accounts: Array<Accounts>;
  /** An aggregate relationship */
  accounts_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>;
  /** fetch data from the table: "provider_type" */
  provider_type: Array<Provider_Type>;
  /** fetch aggregated fields from the table: "provider_type" */
  provider_type_aggregate: Provider_Type_Aggregate;
  /** fetch data from the table: "provider_type" using primary key columns */
  provider_type_by_pk?: Maybe<Provider_Type>;
  /** An array relationship */
  sessions: Array<Sessions>;
  /** An aggregate relationship */
  sessions_aggregate: Sessions_Aggregate;
  /** fetch data from the table: "sessions" using primary key columns */
  sessions_by_pk?: Maybe<Sessions>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "verification_tokens" */
  verification_tokens: Array<Verification_Tokens>;
  /** fetch aggregated fields from the table: "verification_tokens" */
  verification_tokens_aggregate: Verification_Tokens_Aggregate;
  /** fetch data from the table: "verification_tokens" using primary key columns */
  verification_tokens_by_pk?: Maybe<Verification_Tokens>;
  /** fetch data from the table: "webauthn_challenges" */
  webauthn_challenges: Array<Webauthn_Challenges>;
  /** fetch aggregated fields from the table: "webauthn_challenges" */
  webauthn_challenges_aggregate: Webauthn_Challenges_Aggregate;
  /** fetch data from the table: "webauthn_challenges" using primary key columns */
  webauthn_challenges_by_pk?: Maybe<Webauthn_Challenges>;
  /** An array relationship */
  webauthn_credentials: Array<Webauthn_Credentials>;
  /** An aggregate relationship */
  webauthn_credentials_aggregate: Webauthn_Credentials_Aggregate;
  /** fetch data from the table: "webauthn_credentials" using primary key columns */
  webauthn_credentials_by_pk?: Maybe<Webauthn_Credentials>;
};


export type Query_RootAccountsArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Query_RootAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Query_RootAccounts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootProvider_TypeArgs = {
  distinct_on?: InputMaybe<Array<Provider_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Provider_Type_Order_By>>;
  where?: InputMaybe<Provider_Type_Bool_Exp>;
};


export type Query_RootProvider_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Provider_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Provider_Type_Order_By>>;
  where?: InputMaybe<Provider_Type_Bool_Exp>;
};


export type Query_RootProvider_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootSessionsArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};


export type Query_RootSessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};


export type Query_RootSessions_By_PkArgs = {
  sessionToken: Scalars['String']['input'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootVerification_TokensArgs = {
  distinct_on?: InputMaybe<Array<Verification_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Verification_Tokens_Order_By>>;
  where?: InputMaybe<Verification_Tokens_Bool_Exp>;
};


export type Query_RootVerification_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Verification_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Verification_Tokens_Order_By>>;
  where?: InputMaybe<Verification_Tokens_Bool_Exp>;
};


export type Query_RootVerification_Tokens_By_PkArgs = {
  token: Scalars['String']['input'];
};


export type Query_RootWebauthn_ChallengesArgs = {
  distinct_on?: InputMaybe<Array<Webauthn_Challenges_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Webauthn_Challenges_Order_By>>;
  where?: InputMaybe<Webauthn_Challenges_Bool_Exp>;
};


export type Query_RootWebauthn_Challenges_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Webauthn_Challenges_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Webauthn_Challenges_Order_By>>;
  where?: InputMaybe<Webauthn_Challenges_Bool_Exp>;
};


export type Query_RootWebauthn_Challenges_By_PkArgs = {
  user_id: Scalars['uuid']['input'];
};


export type Query_RootWebauthn_CredentialsArgs = {
  distinct_on?: InputMaybe<Array<Webauthn_Credentials_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Webauthn_Credentials_Order_By>>;
  where?: InputMaybe<Webauthn_Credentials_Bool_Exp>;
};


export type Query_RootWebauthn_Credentials_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Webauthn_Credentials_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Webauthn_Credentials_Order_By>>;
  where?: InputMaybe<Webauthn_Credentials_Bool_Exp>;
};


export type Query_RootWebauthn_Credentials_By_PkArgs = {
  credential_id: Scalars['String']['input'];
};

/** columns and relationships of "sessions" */
export type Sessions = {
  __typename?: 'sessions';
  expires: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  sessionToken: Scalars['String']['output'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid']['output'];
};

/** aggregated selection of "sessions" */
export type Sessions_Aggregate = {
  __typename?: 'sessions_aggregate';
  aggregate?: Maybe<Sessions_Aggregate_Fields>;
  nodes: Array<Sessions>;
};

export type Sessions_Aggregate_Bool_Exp = {
  count?: InputMaybe<Sessions_Aggregate_Bool_Exp_Count>;
};

export type Sessions_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Sessions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Sessions_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "sessions" */
export type Sessions_Aggregate_Fields = {
  __typename?: 'sessions_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Sessions_Max_Fields>;
  min?: Maybe<Sessions_Min_Fields>;
};


/** aggregate fields of "sessions" */
export type Sessions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Sessions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "sessions" */
export type Sessions_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Sessions_Max_Order_By>;
  min?: InputMaybe<Sessions_Min_Order_By>;
};

/** input type for inserting array relation for remote table "sessions" */
export type Sessions_Arr_Rel_Insert_Input = {
  data: Array<Sessions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Sessions_On_Conflict>;
};

/** Boolean expression to filter rows from the table "sessions". All fields are combined with a logical 'AND'. */
export type Sessions_Bool_Exp = {
  _and?: InputMaybe<Array<Sessions_Bool_Exp>>;
  _not?: InputMaybe<Sessions_Bool_Exp>;
  _or?: InputMaybe<Array<Sessions_Bool_Exp>>;
  expires?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  sessionToken?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "sessions" */
export enum Sessions_Constraint {
  /** unique or primary key constraint on columns "sessionToken" */
  SessionsPkey = 'sessions_pkey'
}

/** input type for inserting data into table "sessions" */
export type Sessions_Insert_Input = {
  expires?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  sessionToken?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Sessions_Max_Fields = {
  __typename?: 'sessions_max_fields';
  expires?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  sessionToken?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "sessions" */
export type Sessions_Max_Order_By = {
  expires?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  sessionToken?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Sessions_Min_Fields = {
  __typename?: 'sessions_min_fields';
  expires?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  sessionToken?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "sessions" */
export type Sessions_Min_Order_By = {
  expires?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  sessionToken?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "sessions" */
export type Sessions_Mutation_Response = {
  __typename?: 'sessions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Sessions>;
};

/** on_conflict condition type for table "sessions" */
export type Sessions_On_Conflict = {
  constraint: Sessions_Constraint;
  update_columns?: Array<Sessions_Update_Column>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};

/** Ordering options when selecting data from "sessions". */
export type Sessions_Order_By = {
  expires?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  sessionToken?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: sessions */
export type Sessions_Pk_Columns_Input = {
  sessionToken: Scalars['String']['input'];
};

/** select columns of table "sessions" */
export enum Sessions_Select_Column {
  /** column name */
  Expires = 'expires',
  /** column name */
  Id = 'id',
  /** column name */
  SessionToken = 'sessionToken',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "sessions" */
export type Sessions_Set_Input = {
  expires?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  sessionToken?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "sessions" */
export type Sessions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Sessions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Sessions_Stream_Cursor_Value_Input = {
  expires?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  sessionToken?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "sessions" */
export enum Sessions_Update_Column {
  /** column name */
  Expires = 'expires',
  /** column name */
  Id = 'id',
  /** column name */
  SessionToken = 'sessionToken',
  /** column name */
  UserId = 'userId'
}

export type Sessions_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Sessions_Set_Input>;
  /** filter the rows which have to be updated */
  where: Sessions_Bool_Exp;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  accounts: Array<Accounts>;
  /** An aggregate relationship */
  accounts_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>;
  /** fetch data from the table in a streaming manner: "accounts" */
  accounts_stream: Array<Accounts>;
  /** fetch data from the table: "provider_type" */
  provider_type: Array<Provider_Type>;
  /** fetch aggregated fields from the table: "provider_type" */
  provider_type_aggregate: Provider_Type_Aggregate;
  /** fetch data from the table: "provider_type" using primary key columns */
  provider_type_by_pk?: Maybe<Provider_Type>;
  /** fetch data from the table in a streaming manner: "provider_type" */
  provider_type_stream: Array<Provider_Type>;
  /** An array relationship */
  sessions: Array<Sessions>;
  /** An aggregate relationship */
  sessions_aggregate: Sessions_Aggregate;
  /** fetch data from the table: "sessions" using primary key columns */
  sessions_by_pk?: Maybe<Sessions>;
  /** fetch data from the table in a streaming manner: "sessions" */
  sessions_stream: Array<Sessions>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
  /** fetch data from the table: "verification_tokens" */
  verification_tokens: Array<Verification_Tokens>;
  /** fetch aggregated fields from the table: "verification_tokens" */
  verification_tokens_aggregate: Verification_Tokens_Aggregate;
  /** fetch data from the table: "verification_tokens" using primary key columns */
  verification_tokens_by_pk?: Maybe<Verification_Tokens>;
  /** fetch data from the table in a streaming manner: "verification_tokens" */
  verification_tokens_stream: Array<Verification_Tokens>;
  /** fetch data from the table: "webauthn_challenges" */
  webauthn_challenges: Array<Webauthn_Challenges>;
  /** fetch aggregated fields from the table: "webauthn_challenges" */
  webauthn_challenges_aggregate: Webauthn_Challenges_Aggregate;
  /** fetch data from the table: "webauthn_challenges" using primary key columns */
  webauthn_challenges_by_pk?: Maybe<Webauthn_Challenges>;
  /** fetch data from the table in a streaming manner: "webauthn_challenges" */
  webauthn_challenges_stream: Array<Webauthn_Challenges>;
  /** An array relationship */
  webauthn_credentials: Array<Webauthn_Credentials>;
  /** An aggregate relationship */
  webauthn_credentials_aggregate: Webauthn_Credentials_Aggregate;
  /** fetch data from the table: "webauthn_credentials" using primary key columns */
  webauthn_credentials_by_pk?: Maybe<Webauthn_Credentials>;
  /** fetch data from the table in a streaming manner: "webauthn_credentials" */
  webauthn_credentials_stream: Array<Webauthn_Credentials>;
};


export type Subscription_RootAccountsArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Subscription_RootAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Subscription_RootAccounts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAccounts_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Accounts_Stream_Cursor_Input>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Subscription_RootProvider_TypeArgs = {
  distinct_on?: InputMaybe<Array<Provider_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Provider_Type_Order_By>>;
  where?: InputMaybe<Provider_Type_Bool_Exp>;
};


export type Subscription_RootProvider_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Provider_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Provider_Type_Order_By>>;
  where?: InputMaybe<Provider_Type_Bool_Exp>;
};


export type Subscription_RootProvider_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootProvider_Type_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Provider_Type_Stream_Cursor_Input>>;
  where?: InputMaybe<Provider_Type_Bool_Exp>;
};


export type Subscription_RootSessionsArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};


export type Subscription_RootSessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};


export type Subscription_RootSessions_By_PkArgs = {
  sessionToken: Scalars['String']['input'];
};


export type Subscription_RootSessions_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Sessions_Stream_Cursor_Input>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
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


export type Subscription_RootVerification_TokensArgs = {
  distinct_on?: InputMaybe<Array<Verification_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Verification_Tokens_Order_By>>;
  where?: InputMaybe<Verification_Tokens_Bool_Exp>;
};


export type Subscription_RootVerification_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Verification_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Verification_Tokens_Order_By>>;
  where?: InputMaybe<Verification_Tokens_Bool_Exp>;
};


export type Subscription_RootVerification_Tokens_By_PkArgs = {
  token: Scalars['String']['input'];
};


export type Subscription_RootVerification_Tokens_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Verification_Tokens_Stream_Cursor_Input>>;
  where?: InputMaybe<Verification_Tokens_Bool_Exp>;
};


export type Subscription_RootWebauthn_ChallengesArgs = {
  distinct_on?: InputMaybe<Array<Webauthn_Challenges_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Webauthn_Challenges_Order_By>>;
  where?: InputMaybe<Webauthn_Challenges_Bool_Exp>;
};


export type Subscription_RootWebauthn_Challenges_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Webauthn_Challenges_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Webauthn_Challenges_Order_By>>;
  where?: InputMaybe<Webauthn_Challenges_Bool_Exp>;
};


export type Subscription_RootWebauthn_Challenges_By_PkArgs = {
  user_id: Scalars['uuid']['input'];
};


export type Subscription_RootWebauthn_Challenges_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Webauthn_Challenges_Stream_Cursor_Input>>;
  where?: InputMaybe<Webauthn_Challenges_Bool_Exp>;
};


export type Subscription_RootWebauthn_CredentialsArgs = {
  distinct_on?: InputMaybe<Array<Webauthn_Credentials_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Webauthn_Credentials_Order_By>>;
  where?: InputMaybe<Webauthn_Credentials_Bool_Exp>;
};


export type Subscription_RootWebauthn_Credentials_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Webauthn_Credentials_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Webauthn_Credentials_Order_By>>;
  where?: InputMaybe<Webauthn_Credentials_Bool_Exp>;
};


export type Subscription_RootWebauthn_Credentials_By_PkArgs = {
  credential_id: Scalars['String']['input'];
};


export type Subscription_RootWebauthn_Credentials_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Webauthn_Credentials_Stream_Cursor_Input>>;
  where?: InputMaybe<Webauthn_Credentials_Bool_Exp>;
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

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  /** An array relationship */
  accounts: Array<Accounts>;
  /** An aggregate relationship */
  accounts_aggregate: Accounts_Aggregate;
  email: Scalars['String']['output'];
  emailVerified?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['uuid']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  sessions: Array<Sessions>;
  /** An aggregate relationship */
  sessions_aggregate: Sessions_Aggregate;
  /** An array relationship */
  webauthn_credentials: Array<Webauthn_Credentials>;
  /** An aggregate relationship */
  webauthn_credentials_aggregate: Webauthn_Credentials_Aggregate;
};


/** columns and relationships of "users" */
export type UsersAccountsArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersSessionsArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersSessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersWebauthn_CredentialsArgs = {
  distinct_on?: InputMaybe<Array<Webauthn_Credentials_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Webauthn_Credentials_Order_By>>;
  where?: InputMaybe<Webauthn_Credentials_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersWebauthn_Credentials_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Webauthn_Credentials_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Webauthn_Credentials_Order_By>>;
  where?: InputMaybe<Webauthn_Credentials_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  accounts?: InputMaybe<Accounts_Bool_Exp>;
  accounts_aggregate?: InputMaybe<Accounts_Aggregate_Bool_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  emailVerified?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  sessions?: InputMaybe<Sessions_Bool_Exp>;
  sessions_aggregate?: InputMaybe<Sessions_Aggregate_Bool_Exp>;
  webauthn_credentials?: InputMaybe<Webauthn_Credentials_Bool_Exp>;
  webauthn_credentials_aggregate?: InputMaybe<Webauthn_Credentials_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  accounts?: InputMaybe<Accounts_Arr_Rel_Insert_Input>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sessions?: InputMaybe<Sessions_Arr_Rel_Insert_Input>;
  webauthn_credentials?: InputMaybe<Webauthn_Credentials_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  email?: Maybe<Scalars['String']['output']>;
  emailVerified?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  email?: Maybe<Scalars['String']['output']>;
  emailVerified?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  accounts_aggregate?: InputMaybe<Accounts_Aggregate_Order_By>;
  email?: InputMaybe<Order_By>;
  emailVerified?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  sessions_aggregate?: InputMaybe<Sessions_Aggregate_Order_By>;
  webauthn_credentials_aggregate?: InputMaybe<Webauthn_Credentials_Aggregate_Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

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
  emailVerified?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name'
}

export type Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
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

/** columns and relationships of "verification_tokens" */
export type Verification_Tokens = {
  __typename?: 'verification_tokens';
  expires: Scalars['timestamptz']['output'];
  identifier: Scalars['String']['output'];
  token: Scalars['String']['output'];
};

/** aggregated selection of "verification_tokens" */
export type Verification_Tokens_Aggregate = {
  __typename?: 'verification_tokens_aggregate';
  aggregate?: Maybe<Verification_Tokens_Aggregate_Fields>;
  nodes: Array<Verification_Tokens>;
};

/** aggregate fields of "verification_tokens" */
export type Verification_Tokens_Aggregate_Fields = {
  __typename?: 'verification_tokens_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Verification_Tokens_Max_Fields>;
  min?: Maybe<Verification_Tokens_Min_Fields>;
};


/** aggregate fields of "verification_tokens" */
export type Verification_Tokens_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Verification_Tokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "verification_tokens". All fields are combined with a logical 'AND'. */
export type Verification_Tokens_Bool_Exp = {
  _and?: InputMaybe<Array<Verification_Tokens_Bool_Exp>>;
  _not?: InputMaybe<Verification_Tokens_Bool_Exp>;
  _or?: InputMaybe<Array<Verification_Tokens_Bool_Exp>>;
  expires?: InputMaybe<Timestamptz_Comparison_Exp>;
  identifier?: InputMaybe<String_Comparison_Exp>;
  token?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "verification_tokens" */
export enum Verification_Tokens_Constraint {
  /** unique or primary key constraint on columns "token" */
  VerificationTokensPkey = 'verification_tokens_pkey'
}

/** input type for inserting data into table "verification_tokens" */
export type Verification_Tokens_Insert_Input = {
  expires?: InputMaybe<Scalars['timestamptz']['input']>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Verification_Tokens_Max_Fields = {
  __typename?: 'verification_tokens_max_fields';
  expires?: Maybe<Scalars['timestamptz']['output']>;
  identifier?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Verification_Tokens_Min_Fields = {
  __typename?: 'verification_tokens_min_fields';
  expires?: Maybe<Scalars['timestamptz']['output']>;
  identifier?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "verification_tokens" */
export type Verification_Tokens_Mutation_Response = {
  __typename?: 'verification_tokens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Verification_Tokens>;
};

/** on_conflict condition type for table "verification_tokens" */
export type Verification_Tokens_On_Conflict = {
  constraint: Verification_Tokens_Constraint;
  update_columns?: Array<Verification_Tokens_Update_Column>;
  where?: InputMaybe<Verification_Tokens_Bool_Exp>;
};

/** Ordering options when selecting data from "verification_tokens". */
export type Verification_Tokens_Order_By = {
  expires?: InputMaybe<Order_By>;
  identifier?: InputMaybe<Order_By>;
  token?: InputMaybe<Order_By>;
};

/** primary key columns input for table: verification_tokens */
export type Verification_Tokens_Pk_Columns_Input = {
  token: Scalars['String']['input'];
};

/** select columns of table "verification_tokens" */
export enum Verification_Tokens_Select_Column {
  /** column name */
  Expires = 'expires',
  /** column name */
  Identifier = 'identifier',
  /** column name */
  Token = 'token'
}

/** input type for updating data in table "verification_tokens" */
export type Verification_Tokens_Set_Input = {
  expires?: InputMaybe<Scalars['timestamptz']['input']>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "verification_tokens" */
export type Verification_Tokens_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Verification_Tokens_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Verification_Tokens_Stream_Cursor_Value_Input = {
  expires?: InputMaybe<Scalars['timestamptz']['input']>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "verification_tokens" */
export enum Verification_Tokens_Update_Column {
  /** column name */
  Expires = 'expires',
  /** column name */
  Identifier = 'identifier',
  /** column name */
  Token = 'token'
}

export type Verification_Tokens_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Verification_Tokens_Set_Input>;
  /** filter the rows which have to be updated */
  where: Verification_Tokens_Bool_Exp;
};

/** columns and relationships of "webauthn_challenges" */
export type Webauthn_Challenges = {
  __typename?: 'webauthn_challenges';
  challenge: Scalars['String']['output'];
  user_id: Scalars['uuid']['output'];
};

/** aggregated selection of "webauthn_challenges" */
export type Webauthn_Challenges_Aggregate = {
  __typename?: 'webauthn_challenges_aggregate';
  aggregate?: Maybe<Webauthn_Challenges_Aggregate_Fields>;
  nodes: Array<Webauthn_Challenges>;
};

/** aggregate fields of "webauthn_challenges" */
export type Webauthn_Challenges_Aggregate_Fields = {
  __typename?: 'webauthn_challenges_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Webauthn_Challenges_Max_Fields>;
  min?: Maybe<Webauthn_Challenges_Min_Fields>;
};


/** aggregate fields of "webauthn_challenges" */
export type Webauthn_Challenges_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Webauthn_Challenges_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "webauthn_challenges". All fields are combined with a logical 'AND'. */
export type Webauthn_Challenges_Bool_Exp = {
  _and?: InputMaybe<Array<Webauthn_Challenges_Bool_Exp>>;
  _not?: InputMaybe<Webauthn_Challenges_Bool_Exp>;
  _or?: InputMaybe<Array<Webauthn_Challenges_Bool_Exp>>;
  challenge?: InputMaybe<String_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "webauthn_challenges" */
export enum Webauthn_Challenges_Constraint {
  /** unique or primary key constraint on columns "user_id" */
  WebauthnChallengesPkey = 'webauthn_challenges_pkey'
}

/** input type for inserting data into table "webauthn_challenges" */
export type Webauthn_Challenges_Insert_Input = {
  challenge?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Webauthn_Challenges_Max_Fields = {
  __typename?: 'webauthn_challenges_max_fields';
  challenge?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Webauthn_Challenges_Min_Fields = {
  __typename?: 'webauthn_challenges_min_fields';
  challenge?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "webauthn_challenges" */
export type Webauthn_Challenges_Mutation_Response = {
  __typename?: 'webauthn_challenges_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Webauthn_Challenges>;
};

/** on_conflict condition type for table "webauthn_challenges" */
export type Webauthn_Challenges_On_Conflict = {
  constraint: Webauthn_Challenges_Constraint;
  update_columns?: Array<Webauthn_Challenges_Update_Column>;
  where?: InputMaybe<Webauthn_Challenges_Bool_Exp>;
};

/** Ordering options when selecting data from "webauthn_challenges". */
export type Webauthn_Challenges_Order_By = {
  challenge?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: webauthn_challenges */
export type Webauthn_Challenges_Pk_Columns_Input = {
  user_id: Scalars['uuid']['input'];
};

/** select columns of table "webauthn_challenges" */
export enum Webauthn_Challenges_Select_Column {
  /** column name */
  Challenge = 'challenge',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "webauthn_challenges" */
export type Webauthn_Challenges_Set_Input = {
  challenge?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "webauthn_challenges" */
export type Webauthn_Challenges_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Webauthn_Challenges_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Webauthn_Challenges_Stream_Cursor_Value_Input = {
  challenge?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "webauthn_challenges" */
export enum Webauthn_Challenges_Update_Column {
  /** column name */
  Challenge = 'challenge',
  /** column name */
  UserId = 'user_id'
}

export type Webauthn_Challenges_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Webauthn_Challenges_Set_Input>;
  /** filter the rows which have to be updated */
  where: Webauthn_Challenges_Bool_Exp;
};

/** columns and relationships of "webauthn_credentials" */
export type Webauthn_Credentials = {
  __typename?: 'webauthn_credentials';
  counter: Scalars['Int']['output'];
  credential_id: Scalars['String']['output'];
  public_key: Scalars['bytea']['output'];
  transports: Array<Scalars['String']['output']>;
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
};

/** aggregated selection of "webauthn_credentials" */
export type Webauthn_Credentials_Aggregate = {
  __typename?: 'webauthn_credentials_aggregate';
  aggregate?: Maybe<Webauthn_Credentials_Aggregate_Fields>;
  nodes: Array<Webauthn_Credentials>;
};

export type Webauthn_Credentials_Aggregate_Bool_Exp = {
  count?: InputMaybe<Webauthn_Credentials_Aggregate_Bool_Exp_Count>;
};

export type Webauthn_Credentials_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Webauthn_Credentials_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Webauthn_Credentials_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "webauthn_credentials" */
export type Webauthn_Credentials_Aggregate_Fields = {
  __typename?: 'webauthn_credentials_aggregate_fields';
  avg?: Maybe<Webauthn_Credentials_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Webauthn_Credentials_Max_Fields>;
  min?: Maybe<Webauthn_Credentials_Min_Fields>;
  stddev?: Maybe<Webauthn_Credentials_Stddev_Fields>;
  stddev_pop?: Maybe<Webauthn_Credentials_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Webauthn_Credentials_Stddev_Samp_Fields>;
  sum?: Maybe<Webauthn_Credentials_Sum_Fields>;
  var_pop?: Maybe<Webauthn_Credentials_Var_Pop_Fields>;
  var_samp?: Maybe<Webauthn_Credentials_Var_Samp_Fields>;
  variance?: Maybe<Webauthn_Credentials_Variance_Fields>;
};


/** aggregate fields of "webauthn_credentials" */
export type Webauthn_Credentials_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Webauthn_Credentials_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "webauthn_credentials" */
export type Webauthn_Credentials_Aggregate_Order_By = {
  avg?: InputMaybe<Webauthn_Credentials_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Webauthn_Credentials_Max_Order_By>;
  min?: InputMaybe<Webauthn_Credentials_Min_Order_By>;
  stddev?: InputMaybe<Webauthn_Credentials_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Webauthn_Credentials_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Webauthn_Credentials_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Webauthn_Credentials_Sum_Order_By>;
  var_pop?: InputMaybe<Webauthn_Credentials_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Webauthn_Credentials_Var_Samp_Order_By>;
  variance?: InputMaybe<Webauthn_Credentials_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "webauthn_credentials" */
export type Webauthn_Credentials_Arr_Rel_Insert_Input = {
  data: Array<Webauthn_Credentials_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Webauthn_Credentials_On_Conflict>;
};

/** aggregate avg on columns */
export type Webauthn_Credentials_Avg_Fields = {
  __typename?: 'webauthn_credentials_avg_fields';
  counter?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "webauthn_credentials" */
export type Webauthn_Credentials_Avg_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "webauthn_credentials". All fields are combined with a logical 'AND'. */
export type Webauthn_Credentials_Bool_Exp = {
  _and?: InputMaybe<Array<Webauthn_Credentials_Bool_Exp>>;
  _not?: InputMaybe<Webauthn_Credentials_Bool_Exp>;
  _or?: InputMaybe<Array<Webauthn_Credentials_Bool_Exp>>;
  counter?: InputMaybe<Int_Comparison_Exp>;
  credential_id?: InputMaybe<String_Comparison_Exp>;
  public_key?: InputMaybe<Bytea_Comparison_Exp>;
  transports?: InputMaybe<String_Array_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "webauthn_credentials" */
export enum Webauthn_Credentials_Constraint {
  /** unique or primary key constraint on columns "credential_id" */
  CredentialsPkey = 'credentials_pkey'
}

/** input type for incrementing numeric columns in table "webauthn_credentials" */
export type Webauthn_Credentials_Inc_Input = {
  counter?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "webauthn_credentials" */
export type Webauthn_Credentials_Insert_Input = {
  counter?: InputMaybe<Scalars['Int']['input']>;
  credential_id?: InputMaybe<Scalars['String']['input']>;
  public_key?: InputMaybe<Scalars['bytea']['input']>;
  transports?: InputMaybe<Array<Scalars['String']['input']>>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Webauthn_Credentials_Max_Fields = {
  __typename?: 'webauthn_credentials_max_fields';
  counter?: Maybe<Scalars['Int']['output']>;
  credential_id?: Maybe<Scalars['String']['output']>;
  transports?: Maybe<Array<Scalars['String']['output']>>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "webauthn_credentials" */
export type Webauthn_Credentials_Max_Order_By = {
  counter?: InputMaybe<Order_By>;
  credential_id?: InputMaybe<Order_By>;
  transports?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Webauthn_Credentials_Min_Fields = {
  __typename?: 'webauthn_credentials_min_fields';
  counter?: Maybe<Scalars['Int']['output']>;
  credential_id?: Maybe<Scalars['String']['output']>;
  transports?: Maybe<Array<Scalars['String']['output']>>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "webauthn_credentials" */
export type Webauthn_Credentials_Min_Order_By = {
  counter?: InputMaybe<Order_By>;
  credential_id?: InputMaybe<Order_By>;
  transports?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "webauthn_credentials" */
export type Webauthn_Credentials_Mutation_Response = {
  __typename?: 'webauthn_credentials_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Webauthn_Credentials>;
};

/** on_conflict condition type for table "webauthn_credentials" */
export type Webauthn_Credentials_On_Conflict = {
  constraint: Webauthn_Credentials_Constraint;
  update_columns?: Array<Webauthn_Credentials_Update_Column>;
  where?: InputMaybe<Webauthn_Credentials_Bool_Exp>;
};

/** Ordering options when selecting data from "webauthn_credentials". */
export type Webauthn_Credentials_Order_By = {
  counter?: InputMaybe<Order_By>;
  credential_id?: InputMaybe<Order_By>;
  public_key?: InputMaybe<Order_By>;
  transports?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: webauthn_credentials */
export type Webauthn_Credentials_Pk_Columns_Input = {
  credential_id: Scalars['String']['input'];
};

/** select columns of table "webauthn_credentials" */
export enum Webauthn_Credentials_Select_Column {
  /** column name */
  Counter = 'counter',
  /** column name */
  CredentialId = 'credential_id',
  /** column name */
  PublicKey = 'public_key',
  /** column name */
  Transports = 'transports',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "webauthn_credentials" */
export type Webauthn_Credentials_Set_Input = {
  counter?: InputMaybe<Scalars['Int']['input']>;
  credential_id?: InputMaybe<Scalars['String']['input']>;
  public_key?: InputMaybe<Scalars['bytea']['input']>;
  transports?: InputMaybe<Array<Scalars['String']['input']>>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Webauthn_Credentials_Stddev_Fields = {
  __typename?: 'webauthn_credentials_stddev_fields';
  counter?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "webauthn_credentials" */
export type Webauthn_Credentials_Stddev_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Webauthn_Credentials_Stddev_Pop_Fields = {
  __typename?: 'webauthn_credentials_stddev_pop_fields';
  counter?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "webauthn_credentials" */
export type Webauthn_Credentials_Stddev_Pop_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Webauthn_Credentials_Stddev_Samp_Fields = {
  __typename?: 'webauthn_credentials_stddev_samp_fields';
  counter?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "webauthn_credentials" */
export type Webauthn_Credentials_Stddev_Samp_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "webauthn_credentials" */
export type Webauthn_Credentials_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Webauthn_Credentials_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Webauthn_Credentials_Stream_Cursor_Value_Input = {
  counter?: InputMaybe<Scalars['Int']['input']>;
  credential_id?: InputMaybe<Scalars['String']['input']>;
  public_key?: InputMaybe<Scalars['bytea']['input']>;
  transports?: InputMaybe<Array<Scalars['String']['input']>>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Webauthn_Credentials_Sum_Fields = {
  __typename?: 'webauthn_credentials_sum_fields';
  counter?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "webauthn_credentials" */
export type Webauthn_Credentials_Sum_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** update columns of table "webauthn_credentials" */
export enum Webauthn_Credentials_Update_Column {
  /** column name */
  Counter = 'counter',
  /** column name */
  CredentialId = 'credential_id',
  /** column name */
  PublicKey = 'public_key',
  /** column name */
  Transports = 'transports',
  /** column name */
  UserId = 'user_id'
}

export type Webauthn_Credentials_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Webauthn_Credentials_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Webauthn_Credentials_Set_Input>;
  /** filter the rows which have to be updated */
  where: Webauthn_Credentials_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Webauthn_Credentials_Var_Pop_Fields = {
  __typename?: 'webauthn_credentials_var_pop_fields';
  counter?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "webauthn_credentials" */
export type Webauthn_Credentials_Var_Pop_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Webauthn_Credentials_Var_Samp_Fields = {
  __typename?: 'webauthn_credentials_var_samp_fields';
  counter?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "webauthn_credentials" */
export type Webauthn_Credentials_Var_Samp_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Webauthn_Credentials_Variance_Fields = {
  __typename?: 'webauthn_credentials_variance_fields';
  counter?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "webauthn_credentials" */
export type Webauthn_Credentials_Variance_Order_By = {
  counter?: InputMaybe<Order_By>;
};

export type GetWebauthnCredentialsForUserQueryVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type GetWebauthnCredentialsForUserQuery = { __typename?: 'query_root', webauthn_credentials: Array<{ __typename?: 'webauthn_credentials', credential_id: string, user_id: any, transports: Array<string>, public_key: any, counter: number }> };

export type GetWebauthnCredentialsByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetWebauthnCredentialsByIdQuery = { __typename?: 'query_root', webauthn_credentials_by_pk?: { __typename?: 'webauthn_credentials', credential_id: string, user_id: any, transports: Array<string>, public_key: any, counter: number } | null };

export type SaveWebauthnCredentialsChallengeMutationVariables = Exact<{
  userId: Scalars['uuid']['input'];
  challenge: Scalars['String']['input'];
}>;


export type SaveWebauthnCredentialsChallengeMutation = { __typename?: 'mutation_root', insert_webauthn_challenges_one?: { __typename?: 'webauthn_challenges', user_id: any } | null };

export type GetWebauthnCredentialsChallengeQueryVariables = Exact<{
  userId: Scalars['uuid']['input'];
}>;


export type GetWebauthnCredentialsChallengeQuery = { __typename?: 'query_root', webauthn_challenges_by_pk?: { __typename?: 'webauthn_challenges', challenge: string } | null };

export type SaveWebauthnCredentialsMutationVariables = Exact<{
  userId: Scalars['uuid']['input'];
  transports?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  counter: Scalars['Int']['input'];
  credentialId: Scalars['String']['input'];
  public_key?: InputMaybe<Scalars['bytea']['input']>;
}>;


export type SaveWebauthnCredentialsMutation = { __typename?: 'mutation_root', insert_webauthn_credentials_one?: { __typename?: 'webauthn_credentials', user_id: any } | null };

export type UpdateWebauthnCredentialsCounterMutationVariables = Exact<{
  counter: Scalars['Int']['input'];
  credentialId: Scalars['String']['input'];
}>;


export type UpdateWebauthnCredentialsCounterMutation = { __typename?: 'mutation_root', update_webauthn_credentials_by_pk?: { __typename?: 'webauthn_credentials', counter: number } | null };


 const GetWebauthnCredentialsForUserDocument = `
    query GetWebauthnCredentialsForUser($email: String!) {
  webauthn_credentials(where: {user: {email: {_eq: $email}}}) {
    credential_id
    user_id
    transports
    public_key
    counter
  }
}
    `;
 const GetWebauthnCredentialsByIdDocument = `
    query GetWebauthnCredentialsById($id: String!) {
  webauthn_credentials_by_pk(credential_id: $id) {
    credential_id
    user_id
    transports
    public_key
    counter
  }
}
    `;
 const SaveWebauthnCredentialsChallengeDocument = `
    mutation SaveWebauthnCredentialsChallenge($userId: uuid!, $challenge: String!) {
  insert_webauthn_challenges_one(
    object: {challenge: $challenge, user_id: $userId}
    on_conflict: {constraint: webauthn_challenges_pkey, update_columns: [challenge]}
  ) {
    user_id
  }
}
    `;
 const GetWebauthnCredentialsChallengeDocument = `
    query GetWebauthnCredentialsChallenge($userId: uuid!) {
  webauthn_challenges_by_pk(user_id: $userId) {
    challenge
  }
}
    `;
 const SaveWebauthnCredentialsDocument = `
    mutation SaveWebauthnCredentials($userId: uuid!, $transports: [String!], $counter: Int!, $credentialId: String!, $public_key: bytea) {
  insert_webauthn_credentials_one(
    object: {counter: $counter, credential_id: $credentialId, public_key: $public_key, transports: $transports, user_id: $userId}
  ) {
    user_id
  }
}
    `;
 const UpdateWebauthnCredentialsCounterDocument = `
    mutation UpdateWebauthnCredentialsCounter($counter: Int!, $credentialId: String!) {
  update_webauthn_credentials_by_pk(
    pk_columns: {credential_id: $credentialId}
    _set: {counter: $counter}
  ) {
    counter
  }
}
    `;
export type Requester<C = {}, E = unknown> = <R, V>(doc: string, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    GetWebauthnCredentialsForUser(variables: GetWebauthnCredentialsForUserQueryVariables, options?: C): Promise<GetWebauthnCredentialsForUserQuery> {
      return requester<GetWebauthnCredentialsForUserQuery, GetWebauthnCredentialsForUserQueryVariables>(GetWebauthnCredentialsForUserDocument, variables, options) as Promise<GetWebauthnCredentialsForUserQuery>;
    },
    GetWebauthnCredentialsById(variables: GetWebauthnCredentialsByIdQueryVariables, options?: C): Promise<GetWebauthnCredentialsByIdQuery> {
      return requester<GetWebauthnCredentialsByIdQuery, GetWebauthnCredentialsByIdQueryVariables>(GetWebauthnCredentialsByIdDocument, variables, options) as Promise<GetWebauthnCredentialsByIdQuery>;
    },
    SaveWebauthnCredentialsChallenge(variables: SaveWebauthnCredentialsChallengeMutationVariables, options?: C): Promise<SaveWebauthnCredentialsChallengeMutation> {
      return requester<SaveWebauthnCredentialsChallengeMutation, SaveWebauthnCredentialsChallengeMutationVariables>(SaveWebauthnCredentialsChallengeDocument, variables, options) as Promise<SaveWebauthnCredentialsChallengeMutation>;
    },
    GetWebauthnCredentialsChallenge(variables: GetWebauthnCredentialsChallengeQueryVariables, options?: C): Promise<GetWebauthnCredentialsChallengeQuery> {
      return requester<GetWebauthnCredentialsChallengeQuery, GetWebauthnCredentialsChallengeQueryVariables>(GetWebauthnCredentialsChallengeDocument, variables, options) as Promise<GetWebauthnCredentialsChallengeQuery>;
    },
    SaveWebauthnCredentials(variables: SaveWebauthnCredentialsMutationVariables, options?: C): Promise<SaveWebauthnCredentialsMutation> {
      return requester<SaveWebauthnCredentialsMutation, SaveWebauthnCredentialsMutationVariables>(SaveWebauthnCredentialsDocument, variables, options) as Promise<SaveWebauthnCredentialsMutation>;
    },
    UpdateWebauthnCredentialsCounter(variables: UpdateWebauthnCredentialsCounterMutationVariables, options?: C): Promise<UpdateWebauthnCredentialsCounterMutation> {
      return requester<UpdateWebauthnCredentialsCounterMutation, UpdateWebauthnCredentialsCounterMutationVariables>(UpdateWebauthnCredentialsCounterDocument, variables, options) as Promise<UpdateWebauthnCredentialsCounterMutation>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
export const apiSdk = getSdk(fetchRequester());