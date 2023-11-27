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
  jsonb: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
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

/** columns and relationships of "features" */
export type Features = {
  __typename?: 'features';
  expiration: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  options: Maybe<Scalars['jsonb']['output']>;
  /** An array relationship */
  tenant_features: Array<Tenant_Features>;
  /** An aggregate relationship */
  tenant_features_aggregate: Tenant_Features_Aggregate;
  /** An array relationship */
  user_features: Array<User_Features>;
  /** An aggregate relationship */
  user_features_aggregate: User_Features_Aggregate;
  /** An array relationship */
  user_tenant_features: Array<User_Tenant_Features>;
  /** An aggregate relationship */
  user_tenant_features_aggregate: User_Tenant_Features_Aggregate;
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
export type FeaturesTenant_Features_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tenant_Features_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tenant_Features_Order_By>>;
  where?: InputMaybe<Tenant_Features_Bool_Exp>;
};


/** columns and relationships of "features" */
export type FeaturesUser_FeaturesArgs = {
  distinct_on?: InputMaybe<Array<User_Features_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Features_Order_By>>;
  where?: InputMaybe<User_Features_Bool_Exp>;
};


/** columns and relationships of "features" */
export type FeaturesUser_Features_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Features_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Features_Order_By>>;
  where?: InputMaybe<User_Features_Bool_Exp>;
};


/** columns and relationships of "features" */
export type FeaturesUser_Tenant_FeaturesArgs = {
  distinct_on?: InputMaybe<Array<User_Tenant_Features_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Tenant_Features_Order_By>>;
  where?: InputMaybe<User_Tenant_Features_Bool_Exp>;
};


/** columns and relationships of "features" */
export type FeaturesUser_Tenant_Features_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Tenant_Features_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Tenant_Features_Order_By>>;
  where?: InputMaybe<User_Tenant_Features_Bool_Exp>;
};

/** aggregated selection of "features" */
export type Features_Aggregate = {
  __typename?: 'features_aggregate';
  aggregate: Maybe<Features_Aggregate_Fields>;
  nodes: Array<Features>;
};

/** aggregate fields of "features" */
export type Features_Aggregate_Fields = {
  __typename?: 'features_aggregate_fields';
  count: Scalars['Int']['output'];
  max: Maybe<Features_Max_Fields>;
  min: Maybe<Features_Min_Fields>;
};


/** aggregate fields of "features" */
export type Features_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Features_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Features_Append_Input = {
  options?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Boolean expression to filter rows from the table "features". All fields are combined with a logical 'AND'. */
export type Features_Bool_Exp = {
  _and?: InputMaybe<Array<Features_Bool_Exp>>;
  _not?: InputMaybe<Features_Bool_Exp>;
  _or?: InputMaybe<Array<Features_Bool_Exp>>;
  expiration?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  options?: InputMaybe<Jsonb_Comparison_Exp>;
  tenant_features?: InputMaybe<Tenant_Features_Bool_Exp>;
  tenant_features_aggregate?: InputMaybe<Tenant_Features_Aggregate_Bool_Exp>;
  user_features?: InputMaybe<User_Features_Bool_Exp>;
  user_features_aggregate?: InputMaybe<User_Features_Aggregate_Bool_Exp>;
  user_tenant_features?: InputMaybe<User_Tenant_Features_Bool_Exp>;
  user_tenant_features_aggregate?: InputMaybe<User_Tenant_Features_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "features" */
export enum Features_Constraint {
  /** unique or primary key constraint on columns "id" */
  FeaturesPkey = 'features_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Features_Delete_At_Path_Input = {
  options?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Features_Delete_Elem_Input = {
  options?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Features_Delete_Key_Input = {
  options?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "features" */
export type Features_Insert_Input = {
  expiration?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  options?: InputMaybe<Scalars['jsonb']['input']>;
  tenant_features?: InputMaybe<Tenant_Features_Arr_Rel_Insert_Input>;
  user_features?: InputMaybe<User_Features_Arr_Rel_Insert_Input>;
  user_tenant_features?: InputMaybe<User_Tenant_Features_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Features_Max_Fields = {
  __typename?: 'features_max_fields';
  expiration: Maybe<Scalars['timestamptz']['output']>;
  id: Maybe<Scalars['uuid']['output']>;
  name: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Features_Min_Fields = {
  __typename?: 'features_min_fields';
  expiration: Maybe<Scalars['timestamptz']['output']>;
  id: Maybe<Scalars['uuid']['output']>;
  name: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "features" */
export type Features_Mutation_Response = {
  __typename?: 'features_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Features>;
};

/** input type for inserting object relation for remote table "features" */
export type Features_Obj_Rel_Insert_Input = {
  data: Features_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Features_On_Conflict>;
};

/** on_conflict condition type for table "features" */
export type Features_On_Conflict = {
  constraint: Features_Constraint;
  update_columns?: Array<Features_Update_Column>;
  where?: InputMaybe<Features_Bool_Exp>;
};

/** Ordering options when selecting data from "features". */
export type Features_Order_By = {
  expiration?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  options?: InputMaybe<Order_By>;
  tenant_features_aggregate?: InputMaybe<Tenant_Features_Aggregate_Order_By>;
  user_features_aggregate?: InputMaybe<User_Features_Aggregate_Order_By>;
  user_tenant_features_aggregate?: InputMaybe<User_Tenant_Features_Aggregate_Order_By>;
};

/** primary key columns input for table: features */
export type Features_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Features_Prepend_Input = {
  options?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "features" */
export enum Features_Select_Column {
  /** column name */
  Expiration = 'expiration',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Options = 'options'
}

/** input type for updating data in table "features" */
export type Features_Set_Input = {
  expiration?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  options?: InputMaybe<Scalars['jsonb']['input']>;
};

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
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  options?: InputMaybe<Scalars['jsonb']['input']>;
};

/** update columns of table "features" */
export enum Features_Update_Column {
  /** column name */
  Expiration = 'expiration',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Options = 'options'
}

export type Features_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Features_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Features_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Features_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Features_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Features_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Features_Set_Input>;
  /** filter the rows which have to be updated */
  where: Features_Bool_Exp;
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
  /** delete data from the table: "features" */
  delete_features: Maybe<Features_Mutation_Response>;
  /** delete single row from the table: "features" */
  delete_features_by_pk: Maybe<Features>;
  /** delete data from the table: "provider_type" */
  delete_provider_type: Maybe<Provider_Type_Mutation_Response>;
  /** delete single row from the table: "provider_type" */
  delete_provider_type_by_pk: Maybe<Provider_Type>;
  /** delete data from the table: "sessions" */
  delete_sessions: Maybe<Sessions_Mutation_Response>;
  /** delete single row from the table: "sessions" */
  delete_sessions_by_pk: Maybe<Sessions>;
  /** delete data from the table: "tenant" */
  delete_tenant: Maybe<Tenant_Mutation_Response>;
  /** delete single row from the table: "tenant" */
  delete_tenant_by_pk: Maybe<Tenant>;
  /** delete data from the table: "tenant_features" */
  delete_tenant_features: Maybe<Tenant_Features_Mutation_Response>;
  /** delete single row from the table: "tenant_features" */
  delete_tenant_features_by_pk: Maybe<Tenant_Features>;
  /** delete data from the table: "tenant_users" */
  delete_tenant_users: Maybe<Tenant_Users_Mutation_Response>;
  /** delete single row from the table: "tenant_users" */
  delete_tenant_users_by_pk: Maybe<Tenant_Users>;
  /** delete data from the table: "user_features" */
  delete_user_features: Maybe<User_Features_Mutation_Response>;
  /** delete single row from the table: "user_features" */
  delete_user_features_by_pk: Maybe<User_Features>;
  /** delete data from the table: "user_provider_accounts" */
  delete_user_provider_accounts: Maybe<User_Provider_Accounts_Mutation_Response>;
  /** delete single row from the table: "user_provider_accounts" */
  delete_user_provider_accounts_by_pk: Maybe<User_Provider_Accounts>;
  /** delete data from the table: "user_tenant_features" */
  delete_user_tenant_features: Maybe<User_Tenant_Features_Mutation_Response>;
  /** delete single row from the table: "user_tenant_features" */
  delete_user_tenant_features_by_pk: Maybe<User_Tenant_Features>;
  /** delete data from the table: "users" */
  delete_users: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk: Maybe<Users>;
  /** delete data from the table: "verification_tokens" */
  delete_verification_tokens: Maybe<Verification_Tokens_Mutation_Response>;
  /** delete single row from the table: "verification_tokens" */
  delete_verification_tokens_by_pk: Maybe<Verification_Tokens>;
  /** delete data from the table: "webauthn_challenges" */
  delete_webauthn_challenges: Maybe<Webauthn_Challenges_Mutation_Response>;
  /** delete single row from the table: "webauthn_challenges" */
  delete_webauthn_challenges_by_pk: Maybe<Webauthn_Challenges>;
  /** delete data from the table: "webauthn_credentials" */
  delete_webauthn_credentials: Maybe<Webauthn_Credentials_Mutation_Response>;
  /** delete single row from the table: "webauthn_credentials" */
  delete_webauthn_credentials_by_pk: Maybe<Webauthn_Credentials>;
  /** insert data into the table: "features" */
  insert_features: Maybe<Features_Mutation_Response>;
  /** insert a single row into the table: "features" */
  insert_features_one: Maybe<Features>;
  /** insert data into the table: "provider_type" */
  insert_provider_type: Maybe<Provider_Type_Mutation_Response>;
  /** insert a single row into the table: "provider_type" */
  insert_provider_type_one: Maybe<Provider_Type>;
  /** insert data into the table: "sessions" */
  insert_sessions: Maybe<Sessions_Mutation_Response>;
  /** insert a single row into the table: "sessions" */
  insert_sessions_one: Maybe<Sessions>;
  /** insert data into the table: "tenant" */
  insert_tenant: Maybe<Tenant_Mutation_Response>;
  /** insert data into the table: "tenant_features" */
  insert_tenant_features: Maybe<Tenant_Features_Mutation_Response>;
  /** insert a single row into the table: "tenant_features" */
  insert_tenant_features_one: Maybe<Tenant_Features>;
  /** insert a single row into the table: "tenant" */
  insert_tenant_one: Maybe<Tenant>;
  /** insert data into the table: "tenant_users" */
  insert_tenant_users: Maybe<Tenant_Users_Mutation_Response>;
  /** insert a single row into the table: "tenant_users" */
  insert_tenant_users_one: Maybe<Tenant_Users>;
  /** insert data into the table: "user_features" */
  insert_user_features: Maybe<User_Features_Mutation_Response>;
  /** insert a single row into the table: "user_features" */
  insert_user_features_one: Maybe<User_Features>;
  /** insert data into the table: "user_provider_accounts" */
  insert_user_provider_accounts: Maybe<User_Provider_Accounts_Mutation_Response>;
  /** insert a single row into the table: "user_provider_accounts" */
  insert_user_provider_accounts_one: Maybe<User_Provider_Accounts>;
  /** insert data into the table: "user_tenant_features" */
  insert_user_tenant_features: Maybe<User_Tenant_Features_Mutation_Response>;
  /** insert a single row into the table: "user_tenant_features" */
  insert_user_tenant_features_one: Maybe<User_Tenant_Features>;
  /** insert data into the table: "users" */
  insert_users: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one: Maybe<Users>;
  /** insert data into the table: "verification_tokens" */
  insert_verification_tokens: Maybe<Verification_Tokens_Mutation_Response>;
  /** insert a single row into the table: "verification_tokens" */
  insert_verification_tokens_one: Maybe<Verification_Tokens>;
  /** insert data into the table: "webauthn_challenges" */
  insert_webauthn_challenges: Maybe<Webauthn_Challenges_Mutation_Response>;
  /** insert a single row into the table: "webauthn_challenges" */
  insert_webauthn_challenges_one: Maybe<Webauthn_Challenges>;
  /** insert data into the table: "webauthn_credentials" */
  insert_webauthn_credentials: Maybe<Webauthn_Credentials_Mutation_Response>;
  /** insert a single row into the table: "webauthn_credentials" */
  insert_webauthn_credentials_one: Maybe<Webauthn_Credentials>;
  /** update data of the table: "features" */
  update_features: Maybe<Features_Mutation_Response>;
  /** update single row of the table: "features" */
  update_features_by_pk: Maybe<Features>;
  /** update multiples rows of table: "features" */
  update_features_many: Maybe<Array<Maybe<Features_Mutation_Response>>>;
  /** update data of the table: "provider_type" */
  update_provider_type: Maybe<Provider_Type_Mutation_Response>;
  /** update single row of the table: "provider_type" */
  update_provider_type_by_pk: Maybe<Provider_Type>;
  /** update multiples rows of table: "provider_type" */
  update_provider_type_many: Maybe<Array<Maybe<Provider_Type_Mutation_Response>>>;
  /** update data of the table: "sessions" */
  update_sessions: Maybe<Sessions_Mutation_Response>;
  /** update single row of the table: "sessions" */
  update_sessions_by_pk: Maybe<Sessions>;
  /** update multiples rows of table: "sessions" */
  update_sessions_many: Maybe<Array<Maybe<Sessions_Mutation_Response>>>;
  /** update data of the table: "tenant" */
  update_tenant: Maybe<Tenant_Mutation_Response>;
  /** update single row of the table: "tenant" */
  update_tenant_by_pk: Maybe<Tenant>;
  /** update data of the table: "tenant_features" */
  update_tenant_features: Maybe<Tenant_Features_Mutation_Response>;
  /** update single row of the table: "tenant_features" */
  update_tenant_features_by_pk: Maybe<Tenant_Features>;
  /** update multiples rows of table: "tenant_features" */
  update_tenant_features_many: Maybe<Array<Maybe<Tenant_Features_Mutation_Response>>>;
  /** update multiples rows of table: "tenant" */
  update_tenant_many: Maybe<Array<Maybe<Tenant_Mutation_Response>>>;
  /** update data of the table: "tenant_users" */
  update_tenant_users: Maybe<Tenant_Users_Mutation_Response>;
  /** update single row of the table: "tenant_users" */
  update_tenant_users_by_pk: Maybe<Tenant_Users>;
  /** update multiples rows of table: "tenant_users" */
  update_tenant_users_many: Maybe<Array<Maybe<Tenant_Users_Mutation_Response>>>;
  /** update data of the table: "user_features" */
  update_user_features: Maybe<User_Features_Mutation_Response>;
  /** update single row of the table: "user_features" */
  update_user_features_by_pk: Maybe<User_Features>;
  /** update multiples rows of table: "user_features" */
  update_user_features_many: Maybe<Array<Maybe<User_Features_Mutation_Response>>>;
  /** update data of the table: "user_provider_accounts" */
  update_user_provider_accounts: Maybe<User_Provider_Accounts_Mutation_Response>;
  /** update single row of the table: "user_provider_accounts" */
  update_user_provider_accounts_by_pk: Maybe<User_Provider_Accounts>;
  /** update multiples rows of table: "user_provider_accounts" */
  update_user_provider_accounts_many: Maybe<Array<Maybe<User_Provider_Accounts_Mutation_Response>>>;
  /** update data of the table: "user_tenant_features" */
  update_user_tenant_features: Maybe<User_Tenant_Features_Mutation_Response>;
  /** update single row of the table: "user_tenant_features" */
  update_user_tenant_features_by_pk: Maybe<User_Tenant_Features>;
  /** update multiples rows of table: "user_tenant_features" */
  update_user_tenant_features_many: Maybe<Array<Maybe<User_Tenant_Features_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many: Maybe<Array<Maybe<Users_Mutation_Response>>>;
  /** update data of the table: "verification_tokens" */
  update_verification_tokens: Maybe<Verification_Tokens_Mutation_Response>;
  /** update single row of the table: "verification_tokens" */
  update_verification_tokens_by_pk: Maybe<Verification_Tokens>;
  /** update multiples rows of table: "verification_tokens" */
  update_verification_tokens_many: Maybe<Array<Maybe<Verification_Tokens_Mutation_Response>>>;
  /** update data of the table: "webauthn_challenges" */
  update_webauthn_challenges: Maybe<Webauthn_Challenges_Mutation_Response>;
  /** update single row of the table: "webauthn_challenges" */
  update_webauthn_challenges_by_pk: Maybe<Webauthn_Challenges>;
  /** update multiples rows of table: "webauthn_challenges" */
  update_webauthn_challenges_many: Maybe<Array<Maybe<Webauthn_Challenges_Mutation_Response>>>;
  /** update data of the table: "webauthn_credentials" */
  update_webauthn_credentials: Maybe<Webauthn_Credentials_Mutation_Response>;
  /** update single row of the table: "webauthn_credentials" */
  update_webauthn_credentials_by_pk: Maybe<Webauthn_Credentials>;
  /** update multiples rows of table: "webauthn_credentials" */
  update_webauthn_credentials_many: Maybe<Array<Maybe<Webauthn_Credentials_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_FeaturesArgs = {
  where: Features_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Features_By_PkArgs = {
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
export type Mutation_RootDelete_TenantArgs = {
  where: Tenant_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tenant_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Tenant_FeaturesArgs = {
  where: Tenant_Features_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tenant_Features_By_PkArgs = {
  feature_id: Scalars['uuid']['input'];
  tenant_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Tenant_UsersArgs = {
  where: Tenant_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tenant_Users_By_PkArgs = {
  tenant_id: Scalars['uuid']['input'];
  user_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_User_FeaturesArgs = {
  where: User_Features_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Features_By_PkArgs = {
  feature_id: Scalars['uuid']['input'];
  user_id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_User_Provider_AccountsArgs = {
  where: User_Provider_Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Provider_Accounts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_User_Tenant_FeaturesArgs = {
  where: User_Tenant_Features_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Tenant_Features_By_PkArgs = {
  feature_id: Scalars['uuid']['input'];
  tenant_id: Scalars['uuid']['input'];
  user_id: Scalars['uuid']['input'];
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
export type Mutation_RootInsert_FeaturesArgs = {
  objects: Array<Features_Insert_Input>;
  on_conflict?: InputMaybe<Features_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Features_OneArgs = {
  object: Features_Insert_Input;
  on_conflict?: InputMaybe<Features_On_Conflict>;
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
export type Mutation_RootInsert_TenantArgs = {
  objects: Array<Tenant_Insert_Input>;
  on_conflict?: InputMaybe<Tenant_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tenant_FeaturesArgs = {
  objects: Array<Tenant_Features_Insert_Input>;
  on_conflict?: InputMaybe<Tenant_Features_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tenant_Features_OneArgs = {
  object: Tenant_Features_Insert_Input;
  on_conflict?: InputMaybe<Tenant_Features_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tenant_OneArgs = {
  object: Tenant_Insert_Input;
  on_conflict?: InputMaybe<Tenant_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tenant_UsersArgs = {
  objects: Array<Tenant_Users_Insert_Input>;
  on_conflict?: InputMaybe<Tenant_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tenant_Users_OneArgs = {
  object: Tenant_Users_Insert_Input;
  on_conflict?: InputMaybe<Tenant_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_FeaturesArgs = {
  objects: Array<User_Features_Insert_Input>;
  on_conflict?: InputMaybe<User_Features_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Features_OneArgs = {
  object: User_Features_Insert_Input;
  on_conflict?: InputMaybe<User_Features_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Provider_AccountsArgs = {
  objects: Array<User_Provider_Accounts_Insert_Input>;
  on_conflict?: InputMaybe<User_Provider_Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Provider_Accounts_OneArgs = {
  object: User_Provider_Accounts_Insert_Input;
  on_conflict?: InputMaybe<User_Provider_Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Tenant_FeaturesArgs = {
  objects: Array<User_Tenant_Features_Insert_Input>;
  on_conflict?: InputMaybe<User_Tenant_Features_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Tenant_Features_OneArgs = {
  object: User_Tenant_Features_Insert_Input;
  on_conflict?: InputMaybe<User_Tenant_Features_On_Conflict>;
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
export type Mutation_RootUpdate_FeaturesArgs = {
  _append?: InputMaybe<Features_Append_Input>;
  _delete_at_path?: InputMaybe<Features_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Features_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Features_Delete_Key_Input>;
  _prepend?: InputMaybe<Features_Prepend_Input>;
  _set?: InputMaybe<Features_Set_Input>;
  where: Features_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Features_By_PkArgs = {
  _append?: InputMaybe<Features_Append_Input>;
  _delete_at_path?: InputMaybe<Features_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Features_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Features_Delete_Key_Input>;
  _prepend?: InputMaybe<Features_Prepend_Input>;
  _set?: InputMaybe<Features_Set_Input>;
  pk_columns: Features_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Features_ManyArgs = {
  updates: Array<Features_Updates>;
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
export type Mutation_RootUpdate_TenantArgs = {
  _set?: InputMaybe<Tenant_Set_Input>;
  where: Tenant_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tenant_By_PkArgs = {
  _set?: InputMaybe<Tenant_Set_Input>;
  pk_columns: Tenant_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tenant_FeaturesArgs = {
  _set?: InputMaybe<Tenant_Features_Set_Input>;
  where: Tenant_Features_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tenant_Features_By_PkArgs = {
  _set?: InputMaybe<Tenant_Features_Set_Input>;
  pk_columns: Tenant_Features_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tenant_Features_ManyArgs = {
  updates: Array<Tenant_Features_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Tenant_ManyArgs = {
  updates: Array<Tenant_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Tenant_UsersArgs = {
  _set?: InputMaybe<Tenant_Users_Set_Input>;
  where: Tenant_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tenant_Users_By_PkArgs = {
  _set?: InputMaybe<Tenant_Users_Set_Input>;
  pk_columns: Tenant_Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tenant_Users_ManyArgs = {
  updates: Array<Tenant_Users_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_FeaturesArgs = {
  _set?: InputMaybe<User_Features_Set_Input>;
  where: User_Features_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Features_By_PkArgs = {
  _set?: InputMaybe<User_Features_Set_Input>;
  pk_columns: User_Features_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Features_ManyArgs = {
  updates: Array<User_Features_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_Provider_AccountsArgs = {
  _inc?: InputMaybe<User_Provider_Accounts_Inc_Input>;
  _set?: InputMaybe<User_Provider_Accounts_Set_Input>;
  where: User_Provider_Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Provider_Accounts_By_PkArgs = {
  _inc?: InputMaybe<User_Provider_Accounts_Inc_Input>;
  _set?: InputMaybe<User_Provider_Accounts_Set_Input>;
  pk_columns: User_Provider_Accounts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Provider_Accounts_ManyArgs = {
  updates: Array<User_Provider_Accounts_Updates>;
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
  accounts: Array<User_Provider_Accounts>;
  /** An aggregate relationship */
  accounts_aggregate: User_Provider_Accounts_Aggregate;
  value: Scalars['String']['output'];
};


/** columns and relationships of "provider_type" */
export type Provider_TypeAccountsArgs = {
  distinct_on?: InputMaybe<Array<User_Provider_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Provider_Accounts_Order_By>>;
  where?: InputMaybe<User_Provider_Accounts_Bool_Exp>;
};


/** columns and relationships of "provider_type" */
export type Provider_TypeAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Provider_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Provider_Accounts_Order_By>>;
  where?: InputMaybe<User_Provider_Accounts_Bool_Exp>;
};

/** aggregated selection of "provider_type" */
export type Provider_Type_Aggregate = {
  __typename?: 'provider_type_aggregate';
  aggregate: Maybe<Provider_Type_Aggregate_Fields>;
  nodes: Array<Provider_Type>;
};

/** aggregate fields of "provider_type" */
export type Provider_Type_Aggregate_Fields = {
  __typename?: 'provider_type_aggregate_fields';
  count: Scalars['Int']['output'];
  max: Maybe<Provider_Type_Max_Fields>;
  min: Maybe<Provider_Type_Min_Fields>;
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
  accounts?: InputMaybe<User_Provider_Accounts_Bool_Exp>;
  accounts_aggregate?: InputMaybe<User_Provider_Accounts_Aggregate_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "provider_type" */
export enum Provider_Type_Constraint {
  /** unique or primary key constraint on columns "value" */
  ProviderTypePkey = 'provider_type_pkey'
}

/** input type for inserting data into table "provider_type" */
export type Provider_Type_Insert_Input = {
  accounts?: InputMaybe<User_Provider_Accounts_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Provider_Type_Max_Fields = {
  __typename?: 'provider_type_max_fields';
  value: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Provider_Type_Min_Fields = {
  __typename?: 'provider_type_min_fields';
  value: Maybe<Scalars['String']['output']>;
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
  accounts_aggregate?: InputMaybe<User_Provider_Accounts_Aggregate_Order_By>;
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
  /** fetch data from the table: "features" */
  features: Array<Features>;
  /** fetch aggregated fields from the table: "features" */
  features_aggregate: Features_Aggregate;
  /** fetch data from the table: "features" using primary key columns */
  features_by_pk: Maybe<Features>;
  /** fetch data from the table: "provider_type" */
  provider_type: Array<Provider_Type>;
  /** fetch aggregated fields from the table: "provider_type" */
  provider_type_aggregate: Provider_Type_Aggregate;
  /** fetch data from the table: "provider_type" using primary key columns */
  provider_type_by_pk: Maybe<Provider_Type>;
  /** An array relationship */
  sessions: Array<Sessions>;
  /** An aggregate relationship */
  sessions_aggregate: Sessions_Aggregate;
  /** fetch data from the table: "sessions" using primary key columns */
  sessions_by_pk: Maybe<Sessions>;
  /** fetch data from the table: "tenant" */
  tenant: Array<Tenant>;
  /** fetch aggregated fields from the table: "tenant" */
  tenant_aggregate: Tenant_Aggregate;
  /** fetch data from the table: "tenant" using primary key columns */
  tenant_by_pk: Maybe<Tenant>;
  /** An array relationship */
  tenant_features: Array<Tenant_Features>;
  /** An aggregate relationship */
  tenant_features_aggregate: Tenant_Features_Aggregate;
  /** fetch data from the table: "tenant_features" using primary key columns */
  tenant_features_by_pk: Maybe<Tenant_Features>;
  /** fetch data from the table: "tenant_users" */
  tenant_users: Array<Tenant_Users>;
  /** fetch aggregated fields from the table: "tenant_users" */
  tenant_users_aggregate: Tenant_Users_Aggregate;
  /** fetch data from the table: "tenant_users" using primary key columns */
  tenant_users_by_pk: Maybe<Tenant_Users>;
  /** An array relationship */
  user_features: Array<User_Features>;
  /** An aggregate relationship */
  user_features_aggregate: User_Features_Aggregate;
  /** fetch data from the table: "user_features" using primary key columns */
  user_features_by_pk: Maybe<User_Features>;
  /** fetch data from the table: "user_provider_accounts" */
  user_provider_accounts: Array<User_Provider_Accounts>;
  /** fetch aggregated fields from the table: "user_provider_accounts" */
  user_provider_accounts_aggregate: User_Provider_Accounts_Aggregate;
  /** fetch data from the table: "user_provider_accounts" using primary key columns */
  user_provider_accounts_by_pk: Maybe<User_Provider_Accounts>;
  /** An array relationship */
  user_tenant_features: Array<User_Tenant_Features>;
  /** An aggregate relationship */
  user_tenant_features_aggregate: User_Tenant_Features_Aggregate;
  /** fetch data from the table: "user_tenant_features" using primary key columns */
  user_tenant_features_by_pk: Maybe<User_Tenant_Features>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk: Maybe<Users>;
  /** fetch data from the table: "verification_tokens" */
  verification_tokens: Array<Verification_Tokens>;
  /** fetch aggregated fields from the table: "verification_tokens" */
  verification_tokens_aggregate: Verification_Tokens_Aggregate;
  /** fetch data from the table: "verification_tokens" using primary key columns */
  verification_tokens_by_pk: Maybe<Verification_Tokens>;
  /** fetch data from the table: "webauthn_challenges" */
  webauthn_challenges: Array<Webauthn_Challenges>;
  /** fetch aggregated fields from the table: "webauthn_challenges" */
  webauthn_challenges_aggregate: Webauthn_Challenges_Aggregate;
  /** fetch data from the table: "webauthn_challenges" using primary key columns */
  webauthn_challenges_by_pk: Maybe<Webauthn_Challenges>;
  /** An array relationship */
  webauthn_credentials: Array<Webauthn_Credentials>;
  /** An aggregate relationship */
  webauthn_credentials_aggregate: Webauthn_Credentials_Aggregate;
  /** fetch data from the table: "webauthn_credentials" using primary key columns */
  webauthn_credentials_by_pk: Maybe<Webauthn_Credentials>;
};


export type Query_RootFeaturesArgs = {
  distinct_on?: InputMaybe<Array<Features_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Features_Order_By>>;
  where?: InputMaybe<Features_Bool_Exp>;
};


export type Query_RootFeatures_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Features_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Features_Order_By>>;
  where?: InputMaybe<Features_Bool_Exp>;
};


export type Query_RootFeatures_By_PkArgs = {
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


export type Query_RootTenantArgs = {
  distinct_on?: InputMaybe<Array<Tenant_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tenant_Order_By>>;
  where?: InputMaybe<Tenant_Bool_Exp>;
};


export type Query_RootTenant_AggregateArgs = {
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


export type Query_RootTenant_Features_AggregateArgs = {
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


export type Query_RootTenant_Users_AggregateArgs = {
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


export type Query_RootUser_FeaturesArgs = {
  distinct_on?: InputMaybe<Array<User_Features_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Features_Order_By>>;
  where?: InputMaybe<User_Features_Bool_Exp>;
};


export type Query_RootUser_Features_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Features_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Features_Order_By>>;
  where?: InputMaybe<User_Features_Bool_Exp>;
};


export type Query_RootUser_Features_By_PkArgs = {
  feature_id: Scalars['uuid']['input'];
  user_id: Scalars['uuid']['input'];
};


export type Query_RootUser_Provider_AccountsArgs = {
  distinct_on?: InputMaybe<Array<User_Provider_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Provider_Accounts_Order_By>>;
  where?: InputMaybe<User_Provider_Accounts_Bool_Exp>;
};


export type Query_RootUser_Provider_Accounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Provider_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Provider_Accounts_Order_By>>;
  where?: InputMaybe<User_Provider_Accounts_Bool_Exp>;
};


export type Query_RootUser_Provider_Accounts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootUser_Tenant_FeaturesArgs = {
  distinct_on?: InputMaybe<Array<User_Tenant_Features_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Tenant_Features_Order_By>>;
  where?: InputMaybe<User_Tenant_Features_Bool_Exp>;
};


export type Query_RootUser_Tenant_Features_AggregateArgs = {
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
  aggregate: Maybe<Sessions_Aggregate_Fields>;
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
  max: Maybe<Sessions_Max_Fields>;
  min: Maybe<Sessions_Min_Fields>;
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
  expires: Maybe<Scalars['timestamptz']['output']>;
  id: Maybe<Scalars['uuid']['output']>;
  sessionToken: Maybe<Scalars['String']['output']>;
  userId: Maybe<Scalars['uuid']['output']>;
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
  expires: Maybe<Scalars['timestamptz']['output']>;
  id: Maybe<Scalars['uuid']['output']>;
  sessionToken: Maybe<Scalars['String']['output']>;
  userId: Maybe<Scalars['uuid']['output']>;
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
  /** fetch data from the table: "features" */
  features: Array<Features>;
  /** fetch aggregated fields from the table: "features" */
  features_aggregate: Features_Aggregate;
  /** fetch data from the table: "features" using primary key columns */
  features_by_pk: Maybe<Features>;
  /** fetch data from the table in a streaming manner: "features" */
  features_stream: Array<Features>;
  /** fetch data from the table: "provider_type" */
  provider_type: Array<Provider_Type>;
  /** fetch aggregated fields from the table: "provider_type" */
  provider_type_aggregate: Provider_Type_Aggregate;
  /** fetch data from the table: "provider_type" using primary key columns */
  provider_type_by_pk: Maybe<Provider_Type>;
  /** fetch data from the table in a streaming manner: "provider_type" */
  provider_type_stream: Array<Provider_Type>;
  /** An array relationship */
  sessions: Array<Sessions>;
  /** An aggregate relationship */
  sessions_aggregate: Sessions_Aggregate;
  /** fetch data from the table: "sessions" using primary key columns */
  sessions_by_pk: Maybe<Sessions>;
  /** fetch data from the table in a streaming manner: "sessions" */
  sessions_stream: Array<Sessions>;
  /** fetch data from the table: "tenant" */
  tenant: Array<Tenant>;
  /** fetch aggregated fields from the table: "tenant" */
  tenant_aggregate: Tenant_Aggregate;
  /** fetch data from the table: "tenant" using primary key columns */
  tenant_by_pk: Maybe<Tenant>;
  /** An array relationship */
  tenant_features: Array<Tenant_Features>;
  /** An aggregate relationship */
  tenant_features_aggregate: Tenant_Features_Aggregate;
  /** fetch data from the table: "tenant_features" using primary key columns */
  tenant_features_by_pk: Maybe<Tenant_Features>;
  /** fetch data from the table in a streaming manner: "tenant_features" */
  tenant_features_stream: Array<Tenant_Features>;
  /** fetch data from the table in a streaming manner: "tenant" */
  tenant_stream: Array<Tenant>;
  /** fetch data from the table: "tenant_users" */
  tenant_users: Array<Tenant_Users>;
  /** fetch aggregated fields from the table: "tenant_users" */
  tenant_users_aggregate: Tenant_Users_Aggregate;
  /** fetch data from the table: "tenant_users" using primary key columns */
  tenant_users_by_pk: Maybe<Tenant_Users>;
  /** fetch data from the table in a streaming manner: "tenant_users" */
  tenant_users_stream: Array<Tenant_Users>;
  /** An array relationship */
  user_features: Array<User_Features>;
  /** An aggregate relationship */
  user_features_aggregate: User_Features_Aggregate;
  /** fetch data from the table: "user_features" using primary key columns */
  user_features_by_pk: Maybe<User_Features>;
  /** fetch data from the table in a streaming manner: "user_features" */
  user_features_stream: Array<User_Features>;
  /** fetch data from the table: "user_provider_accounts" */
  user_provider_accounts: Array<User_Provider_Accounts>;
  /** fetch aggregated fields from the table: "user_provider_accounts" */
  user_provider_accounts_aggregate: User_Provider_Accounts_Aggregate;
  /** fetch data from the table: "user_provider_accounts" using primary key columns */
  user_provider_accounts_by_pk: Maybe<User_Provider_Accounts>;
  /** fetch data from the table in a streaming manner: "user_provider_accounts" */
  user_provider_accounts_stream: Array<User_Provider_Accounts>;
  /** An array relationship */
  user_tenant_features: Array<User_Tenant_Features>;
  /** An aggregate relationship */
  user_tenant_features_aggregate: User_Tenant_Features_Aggregate;
  /** fetch data from the table: "user_tenant_features" using primary key columns */
  user_tenant_features_by_pk: Maybe<User_Tenant_Features>;
  /** fetch data from the table in a streaming manner: "user_tenant_features" */
  user_tenant_features_stream: Array<User_Tenant_Features>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
  /** fetch data from the table: "verification_tokens" */
  verification_tokens: Array<Verification_Tokens>;
  /** fetch aggregated fields from the table: "verification_tokens" */
  verification_tokens_aggregate: Verification_Tokens_Aggregate;
  /** fetch data from the table: "verification_tokens" using primary key columns */
  verification_tokens_by_pk: Maybe<Verification_Tokens>;
  /** fetch data from the table in a streaming manner: "verification_tokens" */
  verification_tokens_stream: Array<Verification_Tokens>;
  /** fetch data from the table: "webauthn_challenges" */
  webauthn_challenges: Array<Webauthn_Challenges>;
  /** fetch aggregated fields from the table: "webauthn_challenges" */
  webauthn_challenges_aggregate: Webauthn_Challenges_Aggregate;
  /** fetch data from the table: "webauthn_challenges" using primary key columns */
  webauthn_challenges_by_pk: Maybe<Webauthn_Challenges>;
  /** fetch data from the table in a streaming manner: "webauthn_challenges" */
  webauthn_challenges_stream: Array<Webauthn_Challenges>;
  /** An array relationship */
  webauthn_credentials: Array<Webauthn_Credentials>;
  /** An aggregate relationship */
  webauthn_credentials_aggregate: Webauthn_Credentials_Aggregate;
  /** fetch data from the table: "webauthn_credentials" using primary key columns */
  webauthn_credentials_by_pk: Maybe<Webauthn_Credentials>;
  /** fetch data from the table in a streaming manner: "webauthn_credentials" */
  webauthn_credentials_stream: Array<Webauthn_Credentials>;
};


export type Subscription_RootFeaturesArgs = {
  distinct_on?: InputMaybe<Array<Features_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Features_Order_By>>;
  where?: InputMaybe<Features_Bool_Exp>;
};


export type Subscription_RootFeatures_AggregateArgs = {
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


export type Subscription_RootTenantArgs = {
  distinct_on?: InputMaybe<Array<Tenant_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tenant_Order_By>>;
  where?: InputMaybe<Tenant_Bool_Exp>;
};


export type Subscription_RootTenant_AggregateArgs = {
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


export type Subscription_RootTenant_Features_AggregateArgs = {
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


export type Subscription_RootTenant_Users_AggregateArgs = {
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


export type Subscription_RootUser_FeaturesArgs = {
  distinct_on?: InputMaybe<Array<User_Features_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Features_Order_By>>;
  where?: InputMaybe<User_Features_Bool_Exp>;
};


export type Subscription_RootUser_Features_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Features_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Features_Order_By>>;
  where?: InputMaybe<User_Features_Bool_Exp>;
};


export type Subscription_RootUser_Features_By_PkArgs = {
  feature_id: Scalars['uuid']['input'];
  user_id: Scalars['uuid']['input'];
};


export type Subscription_RootUser_Features_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Features_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Features_Bool_Exp>;
};


export type Subscription_RootUser_Provider_AccountsArgs = {
  distinct_on?: InputMaybe<Array<User_Provider_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Provider_Accounts_Order_By>>;
  where?: InputMaybe<User_Provider_Accounts_Bool_Exp>;
};


export type Subscription_RootUser_Provider_Accounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Provider_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Provider_Accounts_Order_By>>;
  where?: InputMaybe<User_Provider_Accounts_Bool_Exp>;
};


export type Subscription_RootUser_Provider_Accounts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootUser_Provider_Accounts_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Provider_Accounts_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Provider_Accounts_Bool_Exp>;
};


export type Subscription_RootUser_Tenant_FeaturesArgs = {
  distinct_on?: InputMaybe<Array<User_Tenant_Features_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Tenant_Features_Order_By>>;
  where?: InputMaybe<User_Tenant_Features_Bool_Exp>;
};


export type Subscription_RootUser_Tenant_Features_AggregateArgs = {
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

/** columns and relationships of "tenant" */
export type Tenant = {
  __typename?: 'tenant';
  /** An array relationship */
  features: Array<Tenant_Features>;
  /** An aggregate relationship */
  features_aggregate: Tenant_Features_Aggregate;
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  stripe_customer_id: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  users: Array<Tenant_Users>;
  /** An aggregate relationship */
  users_aggregate: Tenant_Users_Aggregate;
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
export type TenantFeatures_AggregateArgs = {
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


/** columns and relationships of "tenant" */
export type TenantUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tenant_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tenant_Users_Order_By>>;
  where?: InputMaybe<Tenant_Users_Bool_Exp>;
};

/** aggregated selection of "tenant" */
export type Tenant_Aggregate = {
  __typename?: 'tenant_aggregate';
  aggregate: Maybe<Tenant_Aggregate_Fields>;
  nodes: Array<Tenant>;
};

/** aggregate fields of "tenant" */
export type Tenant_Aggregate_Fields = {
  __typename?: 'tenant_aggregate_fields';
  count: Scalars['Int']['output'];
  max: Maybe<Tenant_Max_Fields>;
  min: Maybe<Tenant_Min_Fields>;
};


/** aggregate fields of "tenant" */
export type Tenant_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tenant_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "tenant". All fields are combined with a logical 'AND'. */
export type Tenant_Bool_Exp = {
  _and?: InputMaybe<Array<Tenant_Bool_Exp>>;
  _not?: InputMaybe<Tenant_Bool_Exp>;
  _or?: InputMaybe<Array<Tenant_Bool_Exp>>;
  features?: InputMaybe<Tenant_Features_Bool_Exp>;
  features_aggregate?: InputMaybe<Tenant_Features_Aggregate_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  stripe_customer_id?: InputMaybe<String_Comparison_Exp>;
  users?: InputMaybe<Tenant_Users_Bool_Exp>;
  users_aggregate?: InputMaybe<Tenant_Users_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "tenant" */
export enum Tenant_Constraint {
  /** unique or primary key constraint on columns "id" */
  AccountsPkey1 = 'accounts_pkey1'
}

/** columns and relationships of "tenant_features" */
export type Tenant_Features = {
  __typename?: 'tenant_features';
  /** An object relationship */
  feature: Features;
  feature_id: Scalars['uuid']['output'];
  tenant_id: Scalars['uuid']['output'];
};

/** aggregated selection of "tenant_features" */
export type Tenant_Features_Aggregate = {
  __typename?: 'tenant_features_aggregate';
  aggregate: Maybe<Tenant_Features_Aggregate_Fields>;
  nodes: Array<Tenant_Features>;
};

export type Tenant_Features_Aggregate_Bool_Exp = {
  count?: InputMaybe<Tenant_Features_Aggregate_Bool_Exp_Count>;
};

export type Tenant_Features_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Tenant_Features_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Tenant_Features_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "tenant_features" */
export type Tenant_Features_Aggregate_Fields = {
  __typename?: 'tenant_features_aggregate_fields';
  count: Scalars['Int']['output'];
  max: Maybe<Tenant_Features_Max_Fields>;
  min: Maybe<Tenant_Features_Min_Fields>;
};


/** aggregate fields of "tenant_features" */
export type Tenant_Features_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tenant_Features_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "tenant_features" */
export type Tenant_Features_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Tenant_Features_Max_Order_By>;
  min?: InputMaybe<Tenant_Features_Min_Order_By>;
};

/** input type for inserting array relation for remote table "tenant_features" */
export type Tenant_Features_Arr_Rel_Insert_Input = {
  data: Array<Tenant_Features_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Tenant_Features_On_Conflict>;
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

/** unique or primary key constraints on table "tenant_features" */
export enum Tenant_Features_Constraint {
  /** unique or primary key constraint on columns "feature_id", "tenant_id" */
  TenantFeaturesPkey = 'tenant_features_pkey'
}

/** input type for inserting data into table "tenant_features" */
export type Tenant_Features_Insert_Input = {
  feature?: InputMaybe<Features_Obj_Rel_Insert_Input>;
  feature_id?: InputMaybe<Scalars['uuid']['input']>;
  tenant_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Tenant_Features_Max_Fields = {
  __typename?: 'tenant_features_max_fields';
  feature_id: Maybe<Scalars['uuid']['output']>;
  tenant_id: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "tenant_features" */
export type Tenant_Features_Max_Order_By = {
  feature_id?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Tenant_Features_Min_Fields = {
  __typename?: 'tenant_features_min_fields';
  feature_id: Maybe<Scalars['uuid']['output']>;
  tenant_id: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "tenant_features" */
export type Tenant_Features_Min_Order_By = {
  feature_id?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "tenant_features" */
export type Tenant_Features_Mutation_Response = {
  __typename?: 'tenant_features_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Tenant_Features>;
};

/** on_conflict condition type for table "tenant_features" */
export type Tenant_Features_On_Conflict = {
  constraint: Tenant_Features_Constraint;
  update_columns?: Array<Tenant_Features_Update_Column>;
  where?: InputMaybe<Tenant_Features_Bool_Exp>;
};

/** Ordering options when selecting data from "tenant_features". */
export type Tenant_Features_Order_By = {
  feature?: InputMaybe<Features_Order_By>;
  feature_id?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: tenant_features */
export type Tenant_Features_Pk_Columns_Input = {
  feature_id: Scalars['uuid']['input'];
  tenant_id: Scalars['uuid']['input'];
};

/** select columns of table "tenant_features" */
export enum Tenant_Features_Select_Column {
  /** column name */
  FeatureId = 'feature_id',
  /** column name */
  TenantId = 'tenant_id'
}

/** input type for updating data in table "tenant_features" */
export type Tenant_Features_Set_Input = {
  feature_id?: InputMaybe<Scalars['uuid']['input']>;
  tenant_id?: InputMaybe<Scalars['uuid']['input']>;
};

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

/** update columns of table "tenant_features" */
export enum Tenant_Features_Update_Column {
  /** column name */
  FeatureId = 'feature_id',
  /** column name */
  TenantId = 'tenant_id'
}

export type Tenant_Features_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Tenant_Features_Set_Input>;
  /** filter the rows which have to be updated */
  where: Tenant_Features_Bool_Exp;
};

/** input type for inserting data into table "tenant" */
export type Tenant_Insert_Input = {
  features?: InputMaybe<Tenant_Features_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  stripe_customer_id?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Tenant_Users_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Tenant_Max_Fields = {
  __typename?: 'tenant_max_fields';
  id: Maybe<Scalars['uuid']['output']>;
  name: Maybe<Scalars['String']['output']>;
  stripe_customer_id: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Tenant_Min_Fields = {
  __typename?: 'tenant_min_fields';
  id: Maybe<Scalars['uuid']['output']>;
  name: Maybe<Scalars['String']['output']>;
  stripe_customer_id: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "tenant" */
export type Tenant_Mutation_Response = {
  __typename?: 'tenant_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Tenant>;
};

/** input type for inserting object relation for remote table "tenant" */
export type Tenant_Obj_Rel_Insert_Input = {
  data: Tenant_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Tenant_On_Conflict>;
};

/** on_conflict condition type for table "tenant" */
export type Tenant_On_Conflict = {
  constraint: Tenant_Constraint;
  update_columns?: Array<Tenant_Update_Column>;
  where?: InputMaybe<Tenant_Bool_Exp>;
};

/** Ordering options when selecting data from "tenant". */
export type Tenant_Order_By = {
  features_aggregate?: InputMaybe<Tenant_Features_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  stripe_customer_id?: InputMaybe<Order_By>;
  users_aggregate?: InputMaybe<Tenant_Users_Aggregate_Order_By>;
};

/** primary key columns input for table: tenant */
export type Tenant_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "tenant" */
export enum Tenant_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  StripeCustomerId = 'stripe_customer_id'
}

/** input type for updating data in table "tenant" */
export type Tenant_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  stripe_customer_id?: InputMaybe<Scalars['String']['input']>;
};

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
  stripe_customer_id?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "tenant" */
export enum Tenant_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  StripeCustomerId = 'stripe_customer_id'
}

export type Tenant_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Tenant_Set_Input>;
  /** filter the rows which have to be updated */
  where: Tenant_Bool_Exp;
};

/** columns and relationships of "tenant_users" */
export type Tenant_Users = {
  __typename?: 'tenant_users';
  default: Scalars['Boolean']['output'];
  /** An object relationship */
  tenant: Tenant;
  tenant_id: Scalars['uuid']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
  /** An array relationship */
  user_tenant_features: Array<User_Tenant_Features>;
  /** An aggregate relationship */
  user_tenant_features_aggregate: User_Tenant_Features_Aggregate;
};


/** columns and relationships of "tenant_users" */
export type Tenant_UsersUser_Tenant_FeaturesArgs = {
  distinct_on?: InputMaybe<Array<User_Tenant_Features_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Tenant_Features_Order_By>>;
  where?: InputMaybe<User_Tenant_Features_Bool_Exp>;
};


/** columns and relationships of "tenant_users" */
export type Tenant_UsersUser_Tenant_Features_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Tenant_Features_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Tenant_Features_Order_By>>;
  where?: InputMaybe<User_Tenant_Features_Bool_Exp>;
};

/** aggregated selection of "tenant_users" */
export type Tenant_Users_Aggregate = {
  __typename?: 'tenant_users_aggregate';
  aggregate: Maybe<Tenant_Users_Aggregate_Fields>;
  nodes: Array<Tenant_Users>;
};

export type Tenant_Users_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Tenant_Users_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Tenant_Users_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Tenant_Users_Aggregate_Bool_Exp_Count>;
};

export type Tenant_Users_Aggregate_Bool_Exp_Bool_And = {
  arguments: Tenant_Users_Select_Column_Tenant_Users_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Tenant_Users_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Tenant_Users_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Tenant_Users_Select_Column_Tenant_Users_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Tenant_Users_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Tenant_Users_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Tenant_Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Tenant_Users_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "tenant_users" */
export type Tenant_Users_Aggregate_Fields = {
  __typename?: 'tenant_users_aggregate_fields';
  count: Scalars['Int']['output'];
  max: Maybe<Tenant_Users_Max_Fields>;
  min: Maybe<Tenant_Users_Min_Fields>;
};


/** aggregate fields of "tenant_users" */
export type Tenant_Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tenant_Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "tenant_users" */
export type Tenant_Users_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Tenant_Users_Max_Order_By>;
  min?: InputMaybe<Tenant_Users_Min_Order_By>;
};

/** input type for inserting array relation for remote table "tenant_users" */
export type Tenant_Users_Arr_Rel_Insert_Input = {
  data: Array<Tenant_Users_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Tenant_Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "tenant_users". All fields are combined with a logical 'AND'. */
export type Tenant_Users_Bool_Exp = {
  _and?: InputMaybe<Array<Tenant_Users_Bool_Exp>>;
  _not?: InputMaybe<Tenant_Users_Bool_Exp>;
  _or?: InputMaybe<Array<Tenant_Users_Bool_Exp>>;
  default?: InputMaybe<Boolean_Comparison_Exp>;
  tenant?: InputMaybe<Tenant_Bool_Exp>;
  tenant_id?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
  user_tenant_features?: InputMaybe<User_Tenant_Features_Bool_Exp>;
  user_tenant_features_aggregate?: InputMaybe<User_Tenant_Features_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "tenant_users" */
export enum Tenant_Users_Constraint {
  /** unique or primary key constraint on columns "user_id", "tenant_id" */
  TenantUsersPkey = 'tenant_users_pkey'
}

/** input type for inserting data into table "tenant_users" */
export type Tenant_Users_Insert_Input = {
  default?: InputMaybe<Scalars['Boolean']['input']>;
  tenant?: InputMaybe<Tenant_Obj_Rel_Insert_Input>;
  tenant_id?: InputMaybe<Scalars['uuid']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
  user_tenant_features?: InputMaybe<User_Tenant_Features_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Tenant_Users_Max_Fields = {
  __typename?: 'tenant_users_max_fields';
  tenant_id: Maybe<Scalars['uuid']['output']>;
  user_id: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "tenant_users" */
export type Tenant_Users_Max_Order_By = {
  tenant_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Tenant_Users_Min_Fields = {
  __typename?: 'tenant_users_min_fields';
  tenant_id: Maybe<Scalars['uuid']['output']>;
  user_id: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "tenant_users" */
export type Tenant_Users_Min_Order_By = {
  tenant_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "tenant_users" */
export type Tenant_Users_Mutation_Response = {
  __typename?: 'tenant_users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Tenant_Users>;
};

/** on_conflict condition type for table "tenant_users" */
export type Tenant_Users_On_Conflict = {
  constraint: Tenant_Users_Constraint;
  update_columns?: Array<Tenant_Users_Update_Column>;
  where?: InputMaybe<Tenant_Users_Bool_Exp>;
};

/** Ordering options when selecting data from "tenant_users". */
export type Tenant_Users_Order_By = {
  default?: InputMaybe<Order_By>;
  tenant?: InputMaybe<Tenant_Order_By>;
  tenant_id?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
  user_tenant_features_aggregate?: InputMaybe<User_Tenant_Features_Aggregate_Order_By>;
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

/** select "tenant_users_aggregate_bool_exp_bool_and_arguments_columns" columns of table "tenant_users" */
export enum Tenant_Users_Select_Column_Tenant_Users_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Default = 'default'
}

/** select "tenant_users_aggregate_bool_exp_bool_or_arguments_columns" columns of table "tenant_users" */
export enum Tenant_Users_Select_Column_Tenant_Users_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Default = 'default'
}

/** input type for updating data in table "tenant_users" */
export type Tenant_Users_Set_Input = {
  default?: InputMaybe<Scalars['Boolean']['input']>;
  tenant_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "tenant_users" */
export type Tenant_Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Tenant_Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tenant_Users_Stream_Cursor_Value_Input = {
  default?: InputMaybe<Scalars['Boolean']['input']>;
  tenant_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "tenant_users" */
export enum Tenant_Users_Update_Column {
  /** column name */
  Default = 'default',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  UserId = 'user_id'
}

export type Tenant_Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Tenant_Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Tenant_Users_Bool_Exp;
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

/** columns and relationships of "user_features" */
export type User_Features = {
  __typename?: 'user_features';
  /** An object relationship */
  feature: Features;
  feature_id: Scalars['uuid']['output'];
  user_id: Scalars['uuid']['output'];
};

/** aggregated selection of "user_features" */
export type User_Features_Aggregate = {
  __typename?: 'user_features_aggregate';
  aggregate: Maybe<User_Features_Aggregate_Fields>;
  nodes: Array<User_Features>;
};

export type User_Features_Aggregate_Bool_Exp = {
  count?: InputMaybe<User_Features_Aggregate_Bool_Exp_Count>;
};

export type User_Features_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<User_Features_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<User_Features_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "user_features" */
export type User_Features_Aggregate_Fields = {
  __typename?: 'user_features_aggregate_fields';
  count: Scalars['Int']['output'];
  max: Maybe<User_Features_Max_Fields>;
  min: Maybe<User_Features_Min_Fields>;
};


/** aggregate fields of "user_features" */
export type User_Features_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Features_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "user_features" */
export type User_Features_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Features_Max_Order_By>;
  min?: InputMaybe<User_Features_Min_Order_By>;
};

/** input type for inserting array relation for remote table "user_features" */
export type User_Features_Arr_Rel_Insert_Input = {
  data: Array<User_Features_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Features_On_Conflict>;
};

/** Boolean expression to filter rows from the table "user_features". All fields are combined with a logical 'AND'. */
export type User_Features_Bool_Exp = {
  _and?: InputMaybe<Array<User_Features_Bool_Exp>>;
  _not?: InputMaybe<User_Features_Bool_Exp>;
  _or?: InputMaybe<Array<User_Features_Bool_Exp>>;
  feature?: InputMaybe<Features_Bool_Exp>;
  feature_id?: InputMaybe<Uuid_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_features" */
export enum User_Features_Constraint {
  /** unique or primary key constraint on columns "user_id", "feature_id" */
  UserFeaturesPkey1 = 'user_features_pkey1'
}

/** input type for inserting data into table "user_features" */
export type User_Features_Insert_Input = {
  feature?: InputMaybe<Features_Obj_Rel_Insert_Input>;
  feature_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type User_Features_Max_Fields = {
  __typename?: 'user_features_max_fields';
  feature_id: Maybe<Scalars['uuid']['output']>;
  user_id: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "user_features" */
export type User_Features_Max_Order_By = {
  feature_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Features_Min_Fields = {
  __typename?: 'user_features_min_fields';
  feature_id: Maybe<Scalars['uuid']['output']>;
  user_id: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "user_features" */
export type User_Features_Min_Order_By = {
  feature_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user_features" */
export type User_Features_Mutation_Response = {
  __typename?: 'user_features_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Features>;
};

/** on_conflict condition type for table "user_features" */
export type User_Features_On_Conflict = {
  constraint: User_Features_Constraint;
  update_columns?: Array<User_Features_Update_Column>;
  where?: InputMaybe<User_Features_Bool_Exp>;
};

/** Ordering options when selecting data from "user_features". */
export type User_Features_Order_By = {
  feature?: InputMaybe<Features_Order_By>;
  feature_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_features */
export type User_Features_Pk_Columns_Input = {
  feature_id: Scalars['uuid']['input'];
  user_id: Scalars['uuid']['input'];
};

/** select columns of table "user_features" */
export enum User_Features_Select_Column {
  /** column name */
  FeatureId = 'feature_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "user_features" */
export type User_Features_Set_Input = {
  feature_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "user_features" */
export type User_Features_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Features_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Features_Stream_Cursor_Value_Input = {
  feature_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "user_features" */
export enum User_Features_Update_Column {
  /** column name */
  FeatureId = 'feature_id',
  /** column name */
  UserId = 'user_id'
}

export type User_Features_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Features_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Features_Bool_Exp;
};

/** columns and relationships of "user_provider_accounts" */
export type User_Provider_Accounts = {
  __typename?: 'user_provider_accounts';
  access_token: Maybe<Scalars['String']['output']>;
  expires_at: Maybe<Scalars['Int']['output']>;
  id: Scalars['uuid']['output'];
  id_token: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  providerAccountId: Scalars['String']['output'];
  /** An object relationship */
  provider_type: Provider_Type;
  refresh_token: Maybe<Scalars['String']['output']>;
  scope: Maybe<Scalars['String']['output']>;
  session_state: Maybe<Scalars['String']['output']>;
  token_type: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid']['output'];
};

/** aggregated selection of "user_provider_accounts" */
export type User_Provider_Accounts_Aggregate = {
  __typename?: 'user_provider_accounts_aggregate';
  aggregate: Maybe<User_Provider_Accounts_Aggregate_Fields>;
  nodes: Array<User_Provider_Accounts>;
};

export type User_Provider_Accounts_Aggregate_Bool_Exp = {
  count?: InputMaybe<User_Provider_Accounts_Aggregate_Bool_Exp_Count>;
};

export type User_Provider_Accounts_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<User_Provider_Accounts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<User_Provider_Accounts_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "user_provider_accounts" */
export type User_Provider_Accounts_Aggregate_Fields = {
  __typename?: 'user_provider_accounts_aggregate_fields';
  avg: Maybe<User_Provider_Accounts_Avg_Fields>;
  count: Scalars['Int']['output'];
  max: Maybe<User_Provider_Accounts_Max_Fields>;
  min: Maybe<User_Provider_Accounts_Min_Fields>;
  stddev: Maybe<User_Provider_Accounts_Stddev_Fields>;
  stddev_pop: Maybe<User_Provider_Accounts_Stddev_Pop_Fields>;
  stddev_samp: Maybe<User_Provider_Accounts_Stddev_Samp_Fields>;
  sum: Maybe<User_Provider_Accounts_Sum_Fields>;
  var_pop: Maybe<User_Provider_Accounts_Var_Pop_Fields>;
  var_samp: Maybe<User_Provider_Accounts_Var_Samp_Fields>;
  variance: Maybe<User_Provider_Accounts_Variance_Fields>;
};


/** aggregate fields of "user_provider_accounts" */
export type User_Provider_Accounts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Provider_Accounts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "user_provider_accounts" */
export type User_Provider_Accounts_Aggregate_Order_By = {
  avg?: InputMaybe<User_Provider_Accounts_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Provider_Accounts_Max_Order_By>;
  min?: InputMaybe<User_Provider_Accounts_Min_Order_By>;
  stddev?: InputMaybe<User_Provider_Accounts_Stddev_Order_By>;
  stddev_pop?: InputMaybe<User_Provider_Accounts_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<User_Provider_Accounts_Stddev_Samp_Order_By>;
  sum?: InputMaybe<User_Provider_Accounts_Sum_Order_By>;
  var_pop?: InputMaybe<User_Provider_Accounts_Var_Pop_Order_By>;
  var_samp?: InputMaybe<User_Provider_Accounts_Var_Samp_Order_By>;
  variance?: InputMaybe<User_Provider_Accounts_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user_provider_accounts" */
export type User_Provider_Accounts_Arr_Rel_Insert_Input = {
  data: Array<User_Provider_Accounts_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Provider_Accounts_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Provider_Accounts_Avg_Fields = {
  __typename?: 'user_provider_accounts_avg_fields';
  expires_at: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "user_provider_accounts" */
export type User_Provider_Accounts_Avg_Order_By = {
  expires_at?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user_provider_accounts". All fields are combined with a logical 'AND'. */
export type User_Provider_Accounts_Bool_Exp = {
  _and?: InputMaybe<Array<User_Provider_Accounts_Bool_Exp>>;
  _not?: InputMaybe<User_Provider_Accounts_Bool_Exp>;
  _or?: InputMaybe<Array<User_Provider_Accounts_Bool_Exp>>;
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

/** unique or primary key constraints on table "user_provider_accounts" */
export enum User_Provider_Accounts_Constraint {
  /** unique or primary key constraint on columns "id" */
  AccountsPkey = 'accounts_pkey'
}

/** input type for incrementing numeric columns in table "user_provider_accounts" */
export type User_Provider_Accounts_Inc_Input = {
  expires_at?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "user_provider_accounts" */
export type User_Provider_Accounts_Insert_Input = {
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
export type User_Provider_Accounts_Max_Fields = {
  __typename?: 'user_provider_accounts_max_fields';
  access_token: Maybe<Scalars['String']['output']>;
  expires_at: Maybe<Scalars['Int']['output']>;
  id: Maybe<Scalars['uuid']['output']>;
  id_token: Maybe<Scalars['String']['output']>;
  provider: Maybe<Scalars['String']['output']>;
  providerAccountId: Maybe<Scalars['String']['output']>;
  refresh_token: Maybe<Scalars['String']['output']>;
  scope: Maybe<Scalars['String']['output']>;
  session_state: Maybe<Scalars['String']['output']>;
  token_type: Maybe<Scalars['String']['output']>;
  type: Maybe<Scalars['String']['output']>;
  userId: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "user_provider_accounts" */
export type User_Provider_Accounts_Max_Order_By = {
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
export type User_Provider_Accounts_Min_Fields = {
  __typename?: 'user_provider_accounts_min_fields';
  access_token: Maybe<Scalars['String']['output']>;
  expires_at: Maybe<Scalars['Int']['output']>;
  id: Maybe<Scalars['uuid']['output']>;
  id_token: Maybe<Scalars['String']['output']>;
  provider: Maybe<Scalars['String']['output']>;
  providerAccountId: Maybe<Scalars['String']['output']>;
  refresh_token: Maybe<Scalars['String']['output']>;
  scope: Maybe<Scalars['String']['output']>;
  session_state: Maybe<Scalars['String']['output']>;
  token_type: Maybe<Scalars['String']['output']>;
  type: Maybe<Scalars['String']['output']>;
  userId: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "user_provider_accounts" */
export type User_Provider_Accounts_Min_Order_By = {
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

/** response of any mutation on the table "user_provider_accounts" */
export type User_Provider_Accounts_Mutation_Response = {
  __typename?: 'user_provider_accounts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Provider_Accounts>;
};

/** on_conflict condition type for table "user_provider_accounts" */
export type User_Provider_Accounts_On_Conflict = {
  constraint: User_Provider_Accounts_Constraint;
  update_columns?: Array<User_Provider_Accounts_Update_Column>;
  where?: InputMaybe<User_Provider_Accounts_Bool_Exp>;
};

/** Ordering options when selecting data from "user_provider_accounts". */
export type User_Provider_Accounts_Order_By = {
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

/** primary key columns input for table: user_provider_accounts */
export type User_Provider_Accounts_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "user_provider_accounts" */
export enum User_Provider_Accounts_Select_Column {
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

/** input type for updating data in table "user_provider_accounts" */
export type User_Provider_Accounts_Set_Input = {
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
export type User_Provider_Accounts_Stddev_Fields = {
  __typename?: 'user_provider_accounts_stddev_fields';
  expires_at: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "user_provider_accounts" */
export type User_Provider_Accounts_Stddev_Order_By = {
  expires_at?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Provider_Accounts_Stddev_Pop_Fields = {
  __typename?: 'user_provider_accounts_stddev_pop_fields';
  expires_at: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "user_provider_accounts" */
export type User_Provider_Accounts_Stddev_Pop_Order_By = {
  expires_at?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Provider_Accounts_Stddev_Samp_Fields = {
  __typename?: 'user_provider_accounts_stddev_samp_fields';
  expires_at: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "user_provider_accounts" */
export type User_Provider_Accounts_Stddev_Samp_Order_By = {
  expires_at?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "user_provider_accounts" */
export type User_Provider_Accounts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Provider_Accounts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Provider_Accounts_Stream_Cursor_Value_Input = {
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
export type User_Provider_Accounts_Sum_Fields = {
  __typename?: 'user_provider_accounts_sum_fields';
  expires_at: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "user_provider_accounts" */
export type User_Provider_Accounts_Sum_Order_By = {
  expires_at?: InputMaybe<Order_By>;
};

/** update columns of table "user_provider_accounts" */
export enum User_Provider_Accounts_Update_Column {
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

export type User_Provider_Accounts_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<User_Provider_Accounts_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Provider_Accounts_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Provider_Accounts_Bool_Exp;
};

/** aggregate var_pop on columns */
export type User_Provider_Accounts_Var_Pop_Fields = {
  __typename?: 'user_provider_accounts_var_pop_fields';
  expires_at: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "user_provider_accounts" */
export type User_Provider_Accounts_Var_Pop_Order_By = {
  expires_at?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Provider_Accounts_Var_Samp_Fields = {
  __typename?: 'user_provider_accounts_var_samp_fields';
  expires_at: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "user_provider_accounts" */
export type User_Provider_Accounts_Var_Samp_Order_By = {
  expires_at?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Provider_Accounts_Variance_Fields = {
  __typename?: 'user_provider_accounts_variance_fields';
  expires_at: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "user_provider_accounts" */
export type User_Provider_Accounts_Variance_Order_By = {
  expires_at?: InputMaybe<Order_By>;
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

/** aggregated selection of "user_tenant_features" */
export type User_Tenant_Features_Aggregate = {
  __typename?: 'user_tenant_features_aggregate';
  aggregate: Maybe<User_Tenant_Features_Aggregate_Fields>;
  nodes: Array<User_Tenant_Features>;
};

export type User_Tenant_Features_Aggregate_Bool_Exp = {
  count?: InputMaybe<User_Tenant_Features_Aggregate_Bool_Exp_Count>;
};

export type User_Tenant_Features_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<User_Tenant_Features_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<User_Tenant_Features_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "user_tenant_features" */
export type User_Tenant_Features_Aggregate_Fields = {
  __typename?: 'user_tenant_features_aggregate_fields';
  count: Scalars['Int']['output'];
  max: Maybe<User_Tenant_Features_Max_Fields>;
  min: Maybe<User_Tenant_Features_Min_Fields>;
};


/** aggregate fields of "user_tenant_features" */
export type User_Tenant_Features_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Tenant_Features_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "user_tenant_features" */
export type User_Tenant_Features_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Tenant_Features_Max_Order_By>;
  min?: InputMaybe<User_Tenant_Features_Min_Order_By>;
};

/** input type for inserting array relation for remote table "user_tenant_features" */
export type User_Tenant_Features_Arr_Rel_Insert_Input = {
  data: Array<User_Tenant_Features_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Tenant_Features_On_Conflict>;
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

/** unique or primary key constraints on table "user_tenant_features" */
export enum User_Tenant_Features_Constraint {
  /** unique or primary key constraint on columns "user_id", "feature_id", "tenant_id" */
  UserFeaturesPkey = 'user_features_pkey'
}

/** input type for inserting data into table "user_tenant_features" */
export type User_Tenant_Features_Insert_Input = {
  feature?: InputMaybe<Features_Obj_Rel_Insert_Input>;
  feature_id?: InputMaybe<Scalars['uuid']['input']>;
  tenant_id?: InputMaybe<Scalars['uuid']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type User_Tenant_Features_Max_Fields = {
  __typename?: 'user_tenant_features_max_fields';
  feature_id: Maybe<Scalars['uuid']['output']>;
  tenant_id: Maybe<Scalars['uuid']['output']>;
  user_id: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "user_tenant_features" */
export type User_Tenant_Features_Max_Order_By = {
  feature_id?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Tenant_Features_Min_Fields = {
  __typename?: 'user_tenant_features_min_fields';
  feature_id: Maybe<Scalars['uuid']['output']>;
  tenant_id: Maybe<Scalars['uuid']['output']>;
  user_id: Maybe<Scalars['uuid']['output']>;
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

/** on_conflict condition type for table "user_tenant_features" */
export type User_Tenant_Features_On_Conflict = {
  constraint: User_Tenant_Features_Constraint;
  update_columns?: Array<User_Tenant_Features_Update_Column>;
  where?: InputMaybe<User_Tenant_Features_Bool_Exp>;
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
  tenant_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
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

/** update columns of table "user_tenant_features" */
export enum User_Tenant_Features_Update_Column {
  /** column name */
  FeatureId = 'feature_id',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  UserId = 'user_id'
}

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
  emailVerified: Maybe<Scalars['timestamptz']['output']>;
  /** An array relationship */
  features: Array<User_Features>;
  /** An aggregate relationship */
  features_aggregate: User_Features_Aggregate;
  id: Scalars['uuid']['output'];
  image: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  provider_accounts: Array<User_Provider_Accounts>;
  /** An aggregate relationship */
  provider_accounts_aggregate: User_Provider_Accounts_Aggregate;
  /** An array relationship */
  sessions: Array<Sessions>;
  /** An aggregate relationship */
  sessions_aggregate: Sessions_Aggregate;
  /** An array relationship */
  tenants: Array<Tenant_Users>;
  /** An aggregate relationship */
  tenants_aggregate: Tenant_Users_Aggregate;
  /** An array relationship */
  webauthn_credentials: Array<Webauthn_Credentials>;
  /** An aggregate relationship */
  webauthn_credentials_aggregate: Webauthn_Credentials_Aggregate;
};


/** columns and relationships of "users" */
export type UsersFeaturesArgs = {
  distinct_on?: InputMaybe<Array<User_Features_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Features_Order_By>>;
  where?: InputMaybe<User_Features_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersFeatures_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Features_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Features_Order_By>>;
  where?: InputMaybe<User_Features_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersProvider_AccountsArgs = {
  distinct_on?: InputMaybe<Array<User_Provider_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Provider_Accounts_Order_By>>;
  where?: InputMaybe<User_Provider_Accounts_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersProvider_Accounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Provider_Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Provider_Accounts_Order_By>>;
  where?: InputMaybe<User_Provider_Accounts_Bool_Exp>;
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
export type UsersTenantsArgs = {
  distinct_on?: InputMaybe<Array<Tenant_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tenant_Users_Order_By>>;
  where?: InputMaybe<Tenant_Users_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersTenants_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tenant_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Tenant_Users_Order_By>>;
  where?: InputMaybe<Tenant_Users_Bool_Exp>;
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
  aggregate: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int']['output'];
  max: Maybe<Users_Max_Fields>;
  min: Maybe<Users_Min_Fields>;
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
  email?: InputMaybe<String_Comparison_Exp>;
  emailVerified?: InputMaybe<Timestamptz_Comparison_Exp>;
  features?: InputMaybe<User_Features_Bool_Exp>;
  features_aggregate?: InputMaybe<User_Features_Aggregate_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  provider_accounts?: InputMaybe<User_Provider_Accounts_Bool_Exp>;
  provider_accounts_aggregate?: InputMaybe<User_Provider_Accounts_Aggregate_Bool_Exp>;
  sessions?: InputMaybe<Sessions_Bool_Exp>;
  sessions_aggregate?: InputMaybe<Sessions_Aggregate_Bool_Exp>;
  tenants?: InputMaybe<Tenant_Users_Bool_Exp>;
  tenants_aggregate?: InputMaybe<Tenant_Users_Aggregate_Bool_Exp>;
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
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['timestamptz']['input']>;
  features?: InputMaybe<User_Features_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  provider_accounts?: InputMaybe<User_Provider_Accounts_Arr_Rel_Insert_Input>;
  sessions?: InputMaybe<Sessions_Arr_Rel_Insert_Input>;
  tenants?: InputMaybe<Tenant_Users_Arr_Rel_Insert_Input>;
  webauthn_credentials?: InputMaybe<Webauthn_Credentials_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  email: Maybe<Scalars['String']['output']>;
  emailVerified: Maybe<Scalars['timestamptz']['output']>;
  id: Maybe<Scalars['uuid']['output']>;
  image: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  email: Maybe<Scalars['String']['output']>;
  emailVerified: Maybe<Scalars['timestamptz']['output']>;
  id: Maybe<Scalars['uuid']['output']>;
  image: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
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
  email?: InputMaybe<Order_By>;
  emailVerified?: InputMaybe<Order_By>;
  features_aggregate?: InputMaybe<User_Features_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  provider_accounts_aggregate?: InputMaybe<User_Provider_Accounts_Aggregate_Order_By>;
  sessions_aggregate?: InputMaybe<Sessions_Aggregate_Order_By>;
  tenants_aggregate?: InputMaybe<Tenant_Users_Aggregate_Order_By>;
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
  aggregate: Maybe<Verification_Tokens_Aggregate_Fields>;
  nodes: Array<Verification_Tokens>;
};

/** aggregate fields of "verification_tokens" */
export type Verification_Tokens_Aggregate_Fields = {
  __typename?: 'verification_tokens_aggregate_fields';
  count: Scalars['Int']['output'];
  max: Maybe<Verification_Tokens_Max_Fields>;
  min: Maybe<Verification_Tokens_Min_Fields>;
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
  expires: Maybe<Scalars['timestamptz']['output']>;
  identifier: Maybe<Scalars['String']['output']>;
  token: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Verification_Tokens_Min_Fields = {
  __typename?: 'verification_tokens_min_fields';
  expires: Maybe<Scalars['timestamptz']['output']>;
  identifier: Maybe<Scalars['String']['output']>;
  token: Maybe<Scalars['String']['output']>;
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
  aggregate: Maybe<Webauthn_Challenges_Aggregate_Fields>;
  nodes: Array<Webauthn_Challenges>;
};

/** aggregate fields of "webauthn_challenges" */
export type Webauthn_Challenges_Aggregate_Fields = {
  __typename?: 'webauthn_challenges_aggregate_fields';
  count: Scalars['Int']['output'];
  max: Maybe<Webauthn_Challenges_Max_Fields>;
  min: Maybe<Webauthn_Challenges_Min_Fields>;
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
  challenge: Maybe<Scalars['String']['output']>;
  user_id: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Webauthn_Challenges_Min_Fields = {
  __typename?: 'webauthn_challenges_min_fields';
  challenge: Maybe<Scalars['String']['output']>;
  user_id: Maybe<Scalars['uuid']['output']>;
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
  aaguid: Scalars['String']['output'];
  counter: Scalars['Int']['output'];
  created_at: Scalars['timestamptz']['output'];
  credential_id: Scalars['String']['output'];
  last_used: Maybe<Scalars['timestamptz']['output']>;
  name: Maybe<Scalars['String']['output']>;
  public_key: Scalars['bytea']['output'];
  transports: Array<Scalars['String']['output']>;
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
};

/** aggregated selection of "webauthn_credentials" */
export type Webauthn_Credentials_Aggregate = {
  __typename?: 'webauthn_credentials_aggregate';
  aggregate: Maybe<Webauthn_Credentials_Aggregate_Fields>;
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
  avg: Maybe<Webauthn_Credentials_Avg_Fields>;
  count: Scalars['Int']['output'];
  max: Maybe<Webauthn_Credentials_Max_Fields>;
  min: Maybe<Webauthn_Credentials_Min_Fields>;
  stddev: Maybe<Webauthn_Credentials_Stddev_Fields>;
  stddev_pop: Maybe<Webauthn_Credentials_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Webauthn_Credentials_Stddev_Samp_Fields>;
  sum: Maybe<Webauthn_Credentials_Sum_Fields>;
  var_pop: Maybe<Webauthn_Credentials_Var_Pop_Fields>;
  var_samp: Maybe<Webauthn_Credentials_Var_Samp_Fields>;
  variance: Maybe<Webauthn_Credentials_Variance_Fields>;
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
  counter: Maybe<Scalars['Float']['output']>;
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
  aaguid?: InputMaybe<String_Comparison_Exp>;
  counter?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  credential_id?: InputMaybe<String_Comparison_Exp>;
  last_used?: InputMaybe<Timestamptz_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
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
  aaguid?: InputMaybe<Scalars['String']['input']>;
  counter?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  credential_id?: InputMaybe<Scalars['String']['input']>;
  last_used?: InputMaybe<Scalars['timestamptz']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  public_key?: InputMaybe<Scalars['bytea']['input']>;
  transports?: InputMaybe<Array<Scalars['String']['input']>>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Webauthn_Credentials_Max_Fields = {
  __typename?: 'webauthn_credentials_max_fields';
  aaguid: Maybe<Scalars['String']['output']>;
  counter: Maybe<Scalars['Int']['output']>;
  created_at: Maybe<Scalars['timestamptz']['output']>;
  credential_id: Maybe<Scalars['String']['output']>;
  last_used: Maybe<Scalars['timestamptz']['output']>;
  name: Maybe<Scalars['String']['output']>;
  transports: Maybe<Array<Scalars['String']['output']>>;
  user_id: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "webauthn_credentials" */
export type Webauthn_Credentials_Max_Order_By = {
  aaguid?: InputMaybe<Order_By>;
  counter?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  credential_id?: InputMaybe<Order_By>;
  last_used?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  transports?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Webauthn_Credentials_Min_Fields = {
  __typename?: 'webauthn_credentials_min_fields';
  aaguid: Maybe<Scalars['String']['output']>;
  counter: Maybe<Scalars['Int']['output']>;
  created_at: Maybe<Scalars['timestamptz']['output']>;
  credential_id: Maybe<Scalars['String']['output']>;
  last_used: Maybe<Scalars['timestamptz']['output']>;
  name: Maybe<Scalars['String']['output']>;
  transports: Maybe<Array<Scalars['String']['output']>>;
  user_id: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "webauthn_credentials" */
export type Webauthn_Credentials_Min_Order_By = {
  aaguid?: InputMaybe<Order_By>;
  counter?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  credential_id?: InputMaybe<Order_By>;
  last_used?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
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
  aaguid?: InputMaybe<Order_By>;
  counter?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  credential_id?: InputMaybe<Order_By>;
  last_used?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
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
  Aaguid = 'aaguid',
  /** column name */
  Counter = 'counter',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CredentialId = 'credential_id',
  /** column name */
  LastUsed = 'last_used',
  /** column name */
  Name = 'name',
  /** column name */
  PublicKey = 'public_key',
  /** column name */
  Transports = 'transports',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "webauthn_credentials" */
export type Webauthn_Credentials_Set_Input = {
  aaguid?: InputMaybe<Scalars['String']['input']>;
  counter?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  credential_id?: InputMaybe<Scalars['String']['input']>;
  last_used?: InputMaybe<Scalars['timestamptz']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  public_key?: InputMaybe<Scalars['bytea']['input']>;
  transports?: InputMaybe<Array<Scalars['String']['input']>>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Webauthn_Credentials_Stddev_Fields = {
  __typename?: 'webauthn_credentials_stddev_fields';
  counter: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "webauthn_credentials" */
export type Webauthn_Credentials_Stddev_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Webauthn_Credentials_Stddev_Pop_Fields = {
  __typename?: 'webauthn_credentials_stddev_pop_fields';
  counter: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "webauthn_credentials" */
export type Webauthn_Credentials_Stddev_Pop_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Webauthn_Credentials_Stddev_Samp_Fields = {
  __typename?: 'webauthn_credentials_stddev_samp_fields';
  counter: Maybe<Scalars['Float']['output']>;
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
  aaguid?: InputMaybe<Scalars['String']['input']>;
  counter?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  credential_id?: InputMaybe<Scalars['String']['input']>;
  last_used?: InputMaybe<Scalars['timestamptz']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  public_key?: InputMaybe<Scalars['bytea']['input']>;
  transports?: InputMaybe<Array<Scalars['String']['input']>>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Webauthn_Credentials_Sum_Fields = {
  __typename?: 'webauthn_credentials_sum_fields';
  counter: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "webauthn_credentials" */
export type Webauthn_Credentials_Sum_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** update columns of table "webauthn_credentials" */
export enum Webauthn_Credentials_Update_Column {
  /** column name */
  Aaguid = 'aaguid',
  /** column name */
  Counter = 'counter',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CredentialId = 'credential_id',
  /** column name */
  LastUsed = 'last_used',
  /** column name */
  Name = 'name',
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
  counter: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "webauthn_credentials" */
export type Webauthn_Credentials_Var_Pop_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Webauthn_Credentials_Var_Samp_Fields = {
  __typename?: 'webauthn_credentials_var_samp_fields';
  counter: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "webauthn_credentials" */
export type Webauthn_Credentials_Var_Samp_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Webauthn_Credentials_Variance_Fields = {
  __typename?: 'webauthn_credentials_variance_fields';
  counter: Maybe<Scalars['Float']['output']>;
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


export type GetWebauthnCredentialsByIdQuery = { __typename?: 'query_root', webauthn_credentials_by_pk: { __typename?: 'webauthn_credentials', credential_id: string, user_id: any, transports: Array<string>, public_key: any, counter: number, user: { __typename?: 'users', email: string } } | null };

export type SaveWebauthnCredentialsChallengeMutationVariables = Exact<{
  userId: Scalars['uuid']['input'];
  challenge: Scalars['String']['input'];
}>;


export type SaveWebauthnCredentialsChallengeMutation = { __typename?: 'mutation_root', insert_webauthn_challenges_one: { __typename?: 'webauthn_challenges', user_id: any } | null };

export type GetWebauthnCredentialsChallengeQueryVariables = Exact<{
  userId: Scalars['uuid']['input'];
}>;


export type GetWebauthnCredentialsChallengeQuery = { __typename?: 'query_root', webauthn_challenges_by_pk: { __typename?: 'webauthn_challenges', challenge: string } | null };

export type SaveWebauthnCredentialsMutationVariables = Exact<{
  userId: Scalars['uuid']['input'];
  transports?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  counter: Scalars['Int']['input'];
  credentialId: Scalars['String']['input'];
  public_key?: InputMaybe<Scalars['bytea']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  aaguid: Scalars['String']['input'];
}>;


export type SaveWebauthnCredentialsMutation = { __typename?: 'mutation_root', insert_webauthn_credentials_one: { __typename?: 'webauthn_credentials', user_id: any } | null };

export type UpdateWebauthnCredentialsCounterMutationVariables = Exact<{
  counter: Scalars['Int']['input'];
  credentialId: Scalars['String']['input'];
}>;


export type UpdateWebauthnCredentialsCounterMutation = { __typename?: 'mutation_root', update_webauthn_credentials_by_pk: { __typename?: 'webauthn_credentials', counter: number } | null };

export type GetUserTenantsQueryVariables = Exact<{
  userId: Scalars['uuid']['input'];
}>;


export type GetUserTenantsQuery = { __typename?: 'query_root', users_by_pk: { __typename?: 'users', tenants: Array<{ __typename?: 'tenant_users', tenant_id: any, default: boolean, user_tenant_features: Array<{ __typename?: 'user_tenant_features', feature: { __typename?: 'features', name: string } }> }> } | null };

export type NextAuthHasura_UserFragment = { __typename?: 'users', id: any, name: string | null, email: string, emailVerified: any | null, image: string | null };

export type NextAuthHasura_SessionFragment = { __typename?: 'sessions', id: any, userId: any, expires: any, sessionToken: string };

export type NextAuthHasura_AccountFragment = { __typename?: 'user_provider_accounts', id: any, type: string, scope: string | null, userId: any, id_token: string | null, provider: string, expires_at: number | null, token_type: string | null, access_token: string | null, refresh_token: string | null, session_state: string | null, providerAccountId: string };

export type NextAuthHasura_VerificationTokenFragment = { __typename?: 'verification_tokens', token: string, expires: any, identifier: string };

export type NextAuthHasura_GetSessionAndUserQueryVariables = Exact<{
  sessionToken: Scalars['String']['input'];
}>;


export type NextAuthHasura_GetSessionAndUserQuery = { __typename?: 'query_root', sessions: Array<{ __typename?: 'sessions', id: any, userId: any, expires: any, sessionToken: string, user: { __typename?: 'users', id: any, name: string | null, email: string, emailVerified: any | null, image: string | null } }> };

export type NextAuthHasura_GetSessionQueryVariables = Exact<{
  sessionToken: Scalars['String']['input'];
}>;


export type NextAuthHasura_GetSessionQuery = { __typename?: 'query_root', sessions_by_pk: { __typename?: 'sessions', id: any, userId: any, expires: any, sessionToken: string } | null };

export type NextAuthHasura_CreateSessionMutationVariables = Exact<{
  data: Sessions_Insert_Input;
}>;


export type NextAuthHasura_CreateSessionMutation = { __typename?: 'mutation_root', insert_sessions_one: { __typename?: 'sessions', id: any, userId: any, expires: any, sessionToken: string } | null };

export type NextAuthHasura_UpdateSessionMutationVariables = Exact<{
  sessionToken?: InputMaybe<Scalars['String']['input']>;
  data: Sessions_Set_Input;
}>;


export type NextAuthHasura_UpdateSessionMutation = { __typename?: 'mutation_root', update_sessions: { __typename?: 'sessions_mutation_response', returning: Array<{ __typename?: 'sessions', id: any, userId: any, expires: any, sessionToken: string }> } | null };

export type NextAuthHasura_DeleteSessionMutationVariables = Exact<{
  sessionToken: Scalars['String']['input'];
}>;


export type NextAuthHasura_DeleteSessionMutation = { __typename?: 'mutation_root', delete_sessions: { __typename?: 'sessions_mutation_response', returning: Array<{ __typename?: 'sessions', id: any, userId: any, expires: any, sessionToken: string }> } | null };

export type NextAuthHasura_GetUserQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type NextAuthHasura_GetUserQuery = { __typename?: 'query_root', users_by_pk: { __typename?: 'users', id: any, name: string | null, email: string, emailVerified: any | null, image: string | null } | null };

export type NextAuthHasura_GetUsersQueryVariables = Exact<{
  where: Users_Bool_Exp;
}>;


export type NextAuthHasura_GetUsersQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: any, name: string | null, email: string, emailVerified: any | null, image: string | null }> };

export type NextAuthHasura_CreateUserMutationVariables = Exact<{
  data: Users_Insert_Input;
}>;


export type NextAuthHasura_CreateUserMutation = { __typename?: 'mutation_root', insert_users_one: { __typename?: 'users', id: any, name: string | null, email: string, emailVerified: any | null, image: string | null } | null };

export type NextAuthHasura_UpdateUserMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  data: Users_Set_Input;
}>;


export type NextAuthHasura_UpdateUserMutation = { __typename?: 'mutation_root', update_users_by_pk: { __typename?: 'users', id: any, name: string | null, email: string, emailVerified: any | null, image: string | null } | null };

export type NextAuthHasura_DeleteUserMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type NextAuthHasura_DeleteUserMutation = { __typename?: 'mutation_root', delete_users_by_pk: { __typename?: 'users', id: any, name: string | null, email: string, emailVerified: any | null, image: string | null } | null };

export type NextAuthHasura_CreateVerificationTokenMutationVariables = Exact<{
  data: Verification_Tokens_Insert_Input;
}>;


export type NextAuthHasura_CreateVerificationTokenMutation = { __typename?: 'mutation_root', insert_verification_tokens_one: { __typename?: 'verification_tokens', token: string, expires: any, identifier: string } | null };

export type NextAuthHasura_DeleteVerificationTokenMutationVariables = Exact<{
  identifier: Scalars['String']['input'];
  token: Scalars['String']['input'];
}>;


export type NextAuthHasura_DeleteVerificationTokenMutation = { __typename?: 'mutation_root', delete_verification_tokens: { __typename?: 'verification_tokens_mutation_response', returning: Array<{ __typename?: 'verification_tokens', token: string, expires: any, identifier: string }> } | null };

export type NextAuthHasura_GetVerificationTokenQueryVariables = Exact<{
  identifier: Scalars['String']['input'];
  token: Scalars['String']['input'];
}>;


export type NextAuthHasura_GetVerificationTokenQuery = { __typename?: 'query_root', verification_tokens: Array<{ __typename?: 'verification_tokens', token: string, expires: any, identifier: string }> };

export type NextAuthHasura_CreateAccountMutationVariables = Exact<{
  data: User_Provider_Accounts_Insert_Input;
}>;


export type NextAuthHasura_CreateAccountMutation = { __typename?: 'mutation_root', insert_user_provider_accounts_one: { __typename?: 'user_provider_accounts', id: any, type: string, scope: string | null, userId: any, id_token: string | null, provider: string, expires_at: number | null, token_type: string | null, access_token: string | null, refresh_token: string | null, session_state: string | null, providerAccountId: string } | null };

export type NextAuthHasura_DeleteAccountMutationVariables = Exact<{
  provider: Scalars['String']['input'];
  providerAccountId: Scalars['String']['input'];
}>;


export type NextAuthHasura_DeleteAccountMutation = { __typename?: 'mutation_root', delete_user_provider_accounts: { __typename?: 'user_provider_accounts_mutation_response', returning: Array<{ __typename?: 'user_provider_accounts', id: any, type: string, scope: string | null, userId: any, id_token: string | null, provider: string, expires_at: number | null, token_type: string | null, access_token: string | null, refresh_token: string | null, session_state: string | null, providerAccountId: string }> } | null };

export type NextAuthHasura_GetAccountQueryVariables = Exact<{
  provider: Scalars['String']['input'];
  providerAccountId: Scalars['String']['input'];
}>;


export type NextAuthHasura_GetAccountQuery = { __typename?: 'query_root', user_provider_accounts: Array<{ __typename?: 'user_provider_accounts', id: any, type: string, scope: string | null, userId: any, id_token: string | null, provider: string, expires_at: number | null, token_type: string | null, access_token: string | null, refresh_token: string | null, session_state: string | null, providerAccountId: string }> };

export type FeatureFragment = { __typename?: 'features', name: string, options: any | null, expiration: any | null };

export type GetUserFeaturesQueryVariables = Exact<{
  userId: Scalars['uuid']['input'];
  tenantId: Scalars['uuid']['input'];
}>;


export type GetUserFeaturesQuery = { __typename?: 'query_root', users_by_pk: { __typename?: 'users', features: Array<{ __typename?: 'user_features', feature: { __typename?: 'features', name: string, options: any | null, expiration: any | null } }>, tenants: Array<{ __typename?: 'tenant_users', user_tenant_features: Array<{ __typename?: 'user_tenant_features', feature: { __typename?: 'features', name: string, options: any | null, expiration: any | null } }> }> } | null };

export type GetStripeCustomerIdQueryVariables = Exact<{
  tenantId: Scalars['uuid']['input'];
}>;


export type GetStripeCustomerIdQuery = { __typename?: 'query_root', tenant_by_pk: { __typename?: 'tenant', stripe_customer_id: string | null } | null };

export type AddUserTenantFeatureMutationVariables = Exact<{
  feature: Features_Insert_Input;
  userId: Scalars['uuid']['input'];
  tenantId: Scalars['uuid']['input'];
}>;


export type AddUserTenantFeatureMutation = { __typename?: 'mutation_root', insert_user_tenant_features_one: { __typename?: 'user_tenant_features', feature_id: any, user_id: any, tenant_id: any } | null };

export type DeleteUserTenantFeatureMutationVariables = Exact<{
  featureName: Scalars['String']['input'];
  userId: Scalars['uuid']['input'];
  tenantId: Scalars['uuid']['input'];
}>;


export type DeleteUserTenantFeatureMutation = { __typename?: 'mutation_root', delete_features: { __typename?: 'features_mutation_response', affected_rows: number } | null };

export const NextAuthHasura_UserFragmentDoc = `
    fragment NextAuthHasura_User on users {
  id
  name
  email
  emailVerified
  image
}
    `;
export const NextAuthHasura_SessionFragmentDoc = `
    fragment NextAuthHasura_Session on sessions {
  id
  userId
  expires
  sessionToken
}
    `;
export const NextAuthHasura_AccountFragmentDoc = `
    fragment NextAuthHasura_Account on user_provider_accounts {
  id
  type
  scope
  userId
  id_token
  provider
  expires_at
  token_type
  access_token
  refresh_token
  session_state
  providerAccountId
}
    `;
export const NextAuthHasura_VerificationTokenFragmentDoc = `
    fragment NextAuthHasura_VerificationToken on verification_tokens {
  token
  expires
  identifier
}
    `;
export const FeatureFragmentDoc = `
    fragment Feature on features {
  name
  options
  expiration
}
    `;
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
    user {
      email
    }
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
    mutation SaveWebauthnCredentials($userId: uuid!, $transports: [String!], $counter: Int!, $credentialId: String!, $public_key: bytea, $name: String, $aaguid: String!) {
  insert_webauthn_credentials_one(
    object: {counter: $counter, credential_id: $credentialId, public_key: $public_key, transports: $transports, user_id: $userId, name: $name, aaguid: $aaguid}
  ) {
    user_id
  }
}
    `;
 const UpdateWebauthnCredentialsCounterDocument = `
    mutation UpdateWebauthnCredentialsCounter($counter: Int!, $credentialId: String!) {
  update_webauthn_credentials_by_pk(
    pk_columns: {credential_id: $credentialId}
    _set: {counter: $counter, last_used: "now()"}
  ) {
    counter
  }
}
    `;
 const GetUserTenantsDocument = `
    query GetUserTenants($userId: uuid!) {
  users_by_pk(id: $userId) {
    tenants {
      tenant_id
      default
      user_tenant_features {
        feature {
          name
        }
      }
    }
  }
}
    `;
 const NextAuthHasura_GetSessionAndUserDocument = `
    query NextAuthHasura_GetSessionAndUser($sessionToken: String!) {
  sessions(where: {sessionToken: {_eq: $sessionToken}}) {
    ...NextAuthHasura_Session
    user {
      ...NextAuthHasura_User
    }
  }
}
    ${NextAuthHasura_SessionFragmentDoc}
${NextAuthHasura_UserFragmentDoc}`;
 const NextAuthHasura_GetSessionDocument = `
    query NextAuthHasura_GetSession($sessionToken: String!) {
  sessions_by_pk(sessionToken: $sessionToken) {
    ...NextAuthHasura_Session
  }
}
    ${NextAuthHasura_SessionFragmentDoc}`;
 const NextAuthHasura_CreateSessionDocument = `
    mutation NextAuthHasura_CreateSession($data: sessions_insert_input!) {
  insert_sessions_one(object: $data) {
    ...NextAuthHasura_Session
  }
}
    ${NextAuthHasura_SessionFragmentDoc}`;
 const NextAuthHasura_UpdateSessionDocument = `
    mutation NextAuthHasura_UpdateSession($sessionToken: String, $data: sessions_set_input!) {
  update_sessions(where: {sessionToken: {_eq: $sessionToken}}, _set: $data) {
    returning {
      ...NextAuthHasura_Session
    }
  }
}
    ${NextAuthHasura_SessionFragmentDoc}`;
 const NextAuthHasura_DeleteSessionDocument = `
    mutation NextAuthHasura_DeleteSession($sessionToken: String!) {
  delete_sessions(where: {sessionToken: {_eq: $sessionToken}}) {
    returning {
      ...NextAuthHasura_Session
    }
  }
}
    ${NextAuthHasura_SessionFragmentDoc}`;
 const NextAuthHasura_GetUserDocument = `
    query NextAuthHasura_GetUser($id: uuid!) {
  users_by_pk(id: $id) {
    ...NextAuthHasura_User
  }
}
    ${NextAuthHasura_UserFragmentDoc}`;
 const NextAuthHasura_GetUsersDocument = `
    query NextAuthHasura_GetUsers($where: users_bool_exp!) {
  users(where: $where) {
    ...NextAuthHasura_User
  }
}
    ${NextAuthHasura_UserFragmentDoc}`;
 const NextAuthHasura_CreateUserDocument = `
    mutation NextAuthHasura_CreateUser($data: users_insert_input!) {
  insert_users_one(object: $data) {
    ...NextAuthHasura_User
  }
}
    ${NextAuthHasura_UserFragmentDoc}`;
 const NextAuthHasura_UpdateUserDocument = `
    mutation NextAuthHasura_UpdateUser($id: uuid!, $data: users_set_input!) {
  update_users_by_pk(pk_columns: {id: $id}, _set: $data) {
    ...NextAuthHasura_User
  }
}
    ${NextAuthHasura_UserFragmentDoc}`;
 const NextAuthHasura_DeleteUserDocument = `
    mutation NextAuthHasura_DeleteUser($id: uuid!) {
  delete_users_by_pk(id: $id) {
    ...NextAuthHasura_User
  }
}
    ${NextAuthHasura_UserFragmentDoc}`;
 const NextAuthHasura_CreateVerificationTokenDocument = `
    mutation NextAuthHasura_CreateVerificationToken($data: verification_tokens_insert_input!) {
  insert_verification_tokens_one(object: $data) {
    ...NextAuthHasura_VerificationToken
  }
}
    ${NextAuthHasura_VerificationTokenFragmentDoc}`;
 const NextAuthHasura_DeleteVerificationTokenDocument = `
    mutation NextAuthHasura_DeleteVerificationToken($identifier: String!, $token: String!) {
  delete_verification_tokens(
    where: {token: {_eq: $token}, identifier: {_eq: $identifier}}
  ) {
    returning {
      ...NextAuthHasura_VerificationToken
    }
  }
}
    ${NextAuthHasura_VerificationTokenFragmentDoc}`;
 const NextAuthHasura_GetVerificationTokenDocument = `
    query NextAuthHasura_GetVerificationToken($identifier: String!, $token: String!) {
  verification_tokens(
    where: {token: {_eq: $token}, identifier: {_eq: $identifier}}
  ) {
    ...NextAuthHasura_VerificationToken
  }
}
    ${NextAuthHasura_VerificationTokenFragmentDoc}`;
 const NextAuthHasura_CreateAccountDocument = `
    mutation NextAuthHasura_CreateAccount($data: user_provider_accounts_insert_input!) {
  insert_user_provider_accounts_one(object: $data) {
    ...NextAuthHasura_Account
  }
}
    ${NextAuthHasura_AccountFragmentDoc}`;
 const NextAuthHasura_DeleteAccountDocument = `
    mutation NextAuthHasura_DeleteAccount($provider: String!, $providerAccountId: String!) {
  delete_user_provider_accounts(
    where: {provider: {_eq: $provider}, providerAccountId: {_eq: $providerAccountId}}
  ) {
    returning {
      ...NextAuthHasura_Account
    }
  }
}
    ${NextAuthHasura_AccountFragmentDoc}`;
 const NextAuthHasura_GetAccountDocument = `
    query NextAuthHasura_GetAccount($provider: String!, $providerAccountId: String!) {
  user_provider_accounts(
    where: {provider: {_eq: $provider}, providerAccountId: {_eq: $providerAccountId}}
  ) {
    ...NextAuthHasura_Account
  }
}
    ${NextAuthHasura_AccountFragmentDoc}`;
 const GetUserFeaturesDocument = `
    query GetUserFeatures($userId: uuid!, $tenantId: uuid!) {
  users_by_pk(id: $userId) {
    features(
      where: {feature: {_or: [{expiration: {_is_null: true}}, {expiration: {_gt: "now()"}}]}}
    ) {
      feature {
        ...Feature
      }
    }
    tenants(where: {tenant_id: {_eq: $tenantId}}) {
      user_tenant_features {
        feature {
          ...Feature
        }
      }
    }
  }
}
    ${FeatureFragmentDoc}`;
 const GetStripeCustomerIdDocument = `
    query GetStripeCustomerId($tenantId: uuid!) {
  tenant_by_pk(id: $tenantId) {
    stripe_customer_id
  }
}
    `;
 const AddUserTenantFeatureDocument = `
    mutation AddUserTenantFeature($feature: features_insert_input!, $userId: uuid!, $tenantId: uuid!) {
  insert_user_tenant_features_one(
    object: {feature: {data: $feature}, tenant_id: $tenantId, user_id: $userId}
  ) {
    feature_id
    user_id
    tenant_id
  }
}
    `;
 const DeleteUserTenantFeatureDocument = `
    mutation DeleteUserTenantFeature($featureName: String!, $userId: uuid!, $tenantId: uuid!) {
  delete_features(
    where: {name: {_eq: $featureName}, user_tenant_features: {user_id: {_eq: $userId}, tenant_id: {_eq: $tenantId}}}
  ) {
    affected_rows
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
    },
    GetUserTenants(variables: GetUserTenantsQueryVariables, options?: C): Promise<GetUserTenantsQuery> {
      return requester<GetUserTenantsQuery, GetUserTenantsQueryVariables>(GetUserTenantsDocument, variables, options) as Promise<GetUserTenantsQuery>;
    },
    NextAuthHasura_GetSessionAndUser(variables: NextAuthHasura_GetSessionAndUserQueryVariables, options?: C): Promise<NextAuthHasura_GetSessionAndUserQuery> {
      return requester<NextAuthHasura_GetSessionAndUserQuery, NextAuthHasura_GetSessionAndUserQueryVariables>(NextAuthHasura_GetSessionAndUserDocument, variables, options) as Promise<NextAuthHasura_GetSessionAndUserQuery>;
    },
    NextAuthHasura_GetSession(variables: NextAuthHasura_GetSessionQueryVariables, options?: C): Promise<NextAuthHasura_GetSessionQuery> {
      return requester<NextAuthHasura_GetSessionQuery, NextAuthHasura_GetSessionQueryVariables>(NextAuthHasura_GetSessionDocument, variables, options) as Promise<NextAuthHasura_GetSessionQuery>;
    },
    NextAuthHasura_CreateSession(variables: NextAuthHasura_CreateSessionMutationVariables, options?: C): Promise<NextAuthHasura_CreateSessionMutation> {
      return requester<NextAuthHasura_CreateSessionMutation, NextAuthHasura_CreateSessionMutationVariables>(NextAuthHasura_CreateSessionDocument, variables, options) as Promise<NextAuthHasura_CreateSessionMutation>;
    },
    NextAuthHasura_UpdateSession(variables: NextAuthHasura_UpdateSessionMutationVariables, options?: C): Promise<NextAuthHasura_UpdateSessionMutation> {
      return requester<NextAuthHasura_UpdateSessionMutation, NextAuthHasura_UpdateSessionMutationVariables>(NextAuthHasura_UpdateSessionDocument, variables, options) as Promise<NextAuthHasura_UpdateSessionMutation>;
    },
    NextAuthHasura_DeleteSession(variables: NextAuthHasura_DeleteSessionMutationVariables, options?: C): Promise<NextAuthHasura_DeleteSessionMutation> {
      return requester<NextAuthHasura_DeleteSessionMutation, NextAuthHasura_DeleteSessionMutationVariables>(NextAuthHasura_DeleteSessionDocument, variables, options) as Promise<NextAuthHasura_DeleteSessionMutation>;
    },
    NextAuthHasura_GetUser(variables: NextAuthHasura_GetUserQueryVariables, options?: C): Promise<NextAuthHasura_GetUserQuery> {
      return requester<NextAuthHasura_GetUserQuery, NextAuthHasura_GetUserQueryVariables>(NextAuthHasura_GetUserDocument, variables, options) as Promise<NextAuthHasura_GetUserQuery>;
    },
    NextAuthHasura_GetUsers(variables: NextAuthHasura_GetUsersQueryVariables, options?: C): Promise<NextAuthHasura_GetUsersQuery> {
      return requester<NextAuthHasura_GetUsersQuery, NextAuthHasura_GetUsersQueryVariables>(NextAuthHasura_GetUsersDocument, variables, options) as Promise<NextAuthHasura_GetUsersQuery>;
    },
    NextAuthHasura_CreateUser(variables: NextAuthHasura_CreateUserMutationVariables, options?: C): Promise<NextAuthHasura_CreateUserMutation> {
      return requester<NextAuthHasura_CreateUserMutation, NextAuthHasura_CreateUserMutationVariables>(NextAuthHasura_CreateUserDocument, variables, options) as Promise<NextAuthHasura_CreateUserMutation>;
    },
    NextAuthHasura_UpdateUser(variables: NextAuthHasura_UpdateUserMutationVariables, options?: C): Promise<NextAuthHasura_UpdateUserMutation> {
      return requester<NextAuthHasura_UpdateUserMutation, NextAuthHasura_UpdateUserMutationVariables>(NextAuthHasura_UpdateUserDocument, variables, options) as Promise<NextAuthHasura_UpdateUserMutation>;
    },
    NextAuthHasura_DeleteUser(variables: NextAuthHasura_DeleteUserMutationVariables, options?: C): Promise<NextAuthHasura_DeleteUserMutation> {
      return requester<NextAuthHasura_DeleteUserMutation, NextAuthHasura_DeleteUserMutationVariables>(NextAuthHasura_DeleteUserDocument, variables, options) as Promise<NextAuthHasura_DeleteUserMutation>;
    },
    NextAuthHasura_CreateVerificationToken(variables: NextAuthHasura_CreateVerificationTokenMutationVariables, options?: C): Promise<NextAuthHasura_CreateVerificationTokenMutation> {
      return requester<NextAuthHasura_CreateVerificationTokenMutation, NextAuthHasura_CreateVerificationTokenMutationVariables>(NextAuthHasura_CreateVerificationTokenDocument, variables, options) as Promise<NextAuthHasura_CreateVerificationTokenMutation>;
    },
    NextAuthHasura_DeleteVerificationToken(variables: NextAuthHasura_DeleteVerificationTokenMutationVariables, options?: C): Promise<NextAuthHasura_DeleteVerificationTokenMutation> {
      return requester<NextAuthHasura_DeleteVerificationTokenMutation, NextAuthHasura_DeleteVerificationTokenMutationVariables>(NextAuthHasura_DeleteVerificationTokenDocument, variables, options) as Promise<NextAuthHasura_DeleteVerificationTokenMutation>;
    },
    NextAuthHasura_GetVerificationToken(variables: NextAuthHasura_GetVerificationTokenQueryVariables, options?: C): Promise<NextAuthHasura_GetVerificationTokenQuery> {
      return requester<NextAuthHasura_GetVerificationTokenQuery, NextAuthHasura_GetVerificationTokenQueryVariables>(NextAuthHasura_GetVerificationTokenDocument, variables, options) as Promise<NextAuthHasura_GetVerificationTokenQuery>;
    },
    NextAuthHasura_CreateAccount(variables: NextAuthHasura_CreateAccountMutationVariables, options?: C): Promise<NextAuthHasura_CreateAccountMutation> {
      return requester<NextAuthHasura_CreateAccountMutation, NextAuthHasura_CreateAccountMutationVariables>(NextAuthHasura_CreateAccountDocument, variables, options) as Promise<NextAuthHasura_CreateAccountMutation>;
    },
    NextAuthHasura_DeleteAccount(variables: NextAuthHasura_DeleteAccountMutationVariables, options?: C): Promise<NextAuthHasura_DeleteAccountMutation> {
      return requester<NextAuthHasura_DeleteAccountMutation, NextAuthHasura_DeleteAccountMutationVariables>(NextAuthHasura_DeleteAccountDocument, variables, options) as Promise<NextAuthHasura_DeleteAccountMutation>;
    },
    NextAuthHasura_GetAccount(variables: NextAuthHasura_GetAccountQueryVariables, options?: C): Promise<NextAuthHasura_GetAccountQuery> {
      return requester<NextAuthHasura_GetAccountQuery, NextAuthHasura_GetAccountQueryVariables>(NextAuthHasura_GetAccountDocument, variables, options) as Promise<NextAuthHasura_GetAccountQuery>;
    },
    GetUserFeatures(variables: GetUserFeaturesQueryVariables, options?: C): Promise<GetUserFeaturesQuery> {
      return requester<GetUserFeaturesQuery, GetUserFeaturesQueryVariables>(GetUserFeaturesDocument, variables, options) as Promise<GetUserFeaturesQuery>;
    },
    GetStripeCustomerId(variables: GetStripeCustomerIdQueryVariables, options?: C): Promise<GetStripeCustomerIdQuery> {
      return requester<GetStripeCustomerIdQuery, GetStripeCustomerIdQueryVariables>(GetStripeCustomerIdDocument, variables, options) as Promise<GetStripeCustomerIdQuery>;
    },
    AddUserTenantFeature(variables: AddUserTenantFeatureMutationVariables, options?: C): Promise<AddUserTenantFeatureMutation> {
      return requester<AddUserTenantFeatureMutation, AddUserTenantFeatureMutationVariables>(AddUserTenantFeatureDocument, variables, options) as Promise<AddUserTenantFeatureMutation>;
    },
    DeleteUserTenantFeature(variables: DeleteUserTenantFeatureMutationVariables, options?: C): Promise<DeleteUserTenantFeatureMutation> {
      return requester<DeleteUserTenantFeatureMutation, DeleteUserTenantFeatureMutationVariables>(DeleteUserTenantFeatureDocument, variables, options) as Promise<DeleteUserTenantFeatureMutation>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
export const apiSdk = getSdk(fetchRequester()); export function getApiSdkWithHeaders(headers: any) { return getSdk(fetchRequester(headers));}