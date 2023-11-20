import { fetchRequester } from "../FetchRequester";
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
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** An array relationship */
  webauthn_credentials: Array<Webauthn_Credentials>;
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


export type Query_RootWebauthn_CredentialsArgs = {
  distinct_on?: InputMaybe<Array<Webauthn_Credentials_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Webauthn_Credentials_Order_By>>;
  where?: InputMaybe<Webauthn_Credentials_Bool_Exp>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
  /** An array relationship */
  webauthn_credentials: Array<Webauthn_Credentials>;
  /** fetch data from the table in a streaming manner: "webauthn_credentials" */
  webauthn_credentials_stream: Array<Webauthn_Credentials>;
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


export type Subscription_RootWebauthn_CredentialsArgs = {
  distinct_on?: InputMaybe<Array<Webauthn_Credentials_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Webauthn_Credentials_Order_By>>;
  where?: InputMaybe<Webauthn_Credentials_Bool_Exp>;
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
  email: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  name?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  webauthn_credentials: Array<Webauthn_Credentials>;
};


/** columns and relationships of "users" */
export type UsersWebauthn_CredentialsArgs = {
  distinct_on?: InputMaybe<Array<Webauthn_Credentials_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Webauthn_Credentials_Order_By>>;
  where?: InputMaybe<Webauthn_Credentials_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  webauthn_credentials?: InputMaybe<Webauthn_Credentials_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  webauthn_credentials_aggregate?: InputMaybe<Webauthn_Credentials_Aggregate_Order_By>;
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

/** columns and relationships of "webauthn_credentials" */
export type Webauthn_Credentials = {
  __typename?: 'webauthn_credentials';
  aaguid: Scalars['String']['output'];
  created_at: Scalars['timestamptz']['output'];
  last_used?: Maybe<Scalars['timestamptz']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  user: Users;
};

/** order by aggregate values of table "webauthn_credentials" */
export type Webauthn_Credentials_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Webauthn_Credentials_Max_Order_By>;
  min?: InputMaybe<Webauthn_Credentials_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "webauthn_credentials". All fields are combined with a logical 'AND'. */
export type Webauthn_Credentials_Bool_Exp = {
  _and?: InputMaybe<Array<Webauthn_Credentials_Bool_Exp>>;
  _not?: InputMaybe<Webauthn_Credentials_Bool_Exp>;
  _or?: InputMaybe<Array<Webauthn_Credentials_Bool_Exp>>;
  aaguid?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  last_used?: InputMaybe<Timestamptz_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
};

/** order by max() on columns of table "webauthn_credentials" */
export type Webauthn_Credentials_Max_Order_By = {
  aaguid?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  last_used?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "webauthn_credentials" */
export type Webauthn_Credentials_Min_Order_By = {
  aaguid?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  last_used?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "webauthn_credentials". */
export type Webauthn_Credentials_Order_By = {
  aaguid?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  last_used?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
};

/** select columns of table "webauthn_credentials" */
export enum Webauthn_Credentials_Select_Column {
  /** column name */
  Aaguid = 'aaguid',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  LastUsed = 'last_used',
  /** column name */
  Name = 'name'
}

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
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  last_used?: InputMaybe<Scalars['timestamptz']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type User_GetCurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type User_GetCurrentUserQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: any, name?: string | null, email: string }> };

export type GetPasskeysQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPasskeysQuery = { __typename?: 'query_root', webauthn_credentials: Array<{ __typename?: 'webauthn_credentials', aaguid: string, created_at: any, last_used?: any | null, name?: string | null }> };


 const User_GetCurrentUserDocument = `
    query User_GetCurrentUser {
  users {
    id
    name
    email
  }
}
    `;
 const GetPasskeysDocument = `
    query GetPasskeys {
  webauthn_credentials {
    aaguid
    created_at
    last_used
    name
  }
}
    `;
export type Requester<C = {}, E = unknown> = <R, V>(doc: string, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    User_GetCurrentUser(variables?: User_GetCurrentUserQueryVariables, options?: C): Promise<User_GetCurrentUserQuery> {
      return requester<User_GetCurrentUserQuery, User_GetCurrentUserQueryVariables>(User_GetCurrentUserDocument, variables, options) as Promise<User_GetCurrentUserQuery>;
    },
    GetPasskeys(variables?: GetPasskeysQueryVariables, options?: C): Promise<GetPasskeysQuery> {
      return requester<GetPasskeysQuery, GetPasskeysQueryVariables>(GetPasskeysDocument, variables, options) as Promise<GetPasskeysQuery>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
export const userSdk = getSdk(fetchRequester('user'));