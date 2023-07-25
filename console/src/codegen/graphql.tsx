import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Chatroom = {
  __typename?: 'Chatroom';
  callerPhoneNumber: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
  natureCode?: Maybe<NatureCode>;
  resolved: Scalars['Boolean']['output'];
};

/** Autogenerated input type of CreateChatroom */
export type CreateChatroomInput = {
  callerPhoneNumber: Scalars['String']['input'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  label: Scalars['String']['input'];
  natureCodeId?: InputMaybe<Scalars['ID']['input']>;
};

/** Autogenerated return type of CreateChatroom. */
export type CreateChatroomPayload = {
  __typename?: 'CreateChatroomPayload';
  chatroom: Chatroom;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createChatroom?: Maybe<CreateChatroomPayload>;
  resolveChatroom?: Maybe<ResolveChatroomPayload>;
  updateChatroomDescription?: Maybe<UpdateChatroomDescriptionPayload>;
};


export type MutationCreateChatroomArgs = {
  input: CreateChatroomInput;
};


export type MutationResolveChatroomArgs = {
  input: ResolveChatroomInput;
};


export type MutationUpdateChatroomDescriptionArgs = {
  input: UpdateChatroomDescriptionInput;
};

export type NatureCode = {
  __typename?: 'NatureCode';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  chatrooms: Array<Chatroom>;
  natureCodes: Array<NatureCode>;
};


export type QueryChatroomsArgs = {
  resolved?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Autogenerated input type of ResolveChatroom */
export type ResolveChatroomInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Autogenerated return type of ResolveChatroom. */
export type ResolveChatroomPayload = {
  __typename?: 'ResolveChatroomPayload';
  chatroom: Chatroom;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

/** Autogenerated input type of UpdateChatroomDescription */
export type UpdateChatroomDescriptionInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  id: Scalars['ID']['input'];
};

/** Autogenerated return type of UpdateChatroomDescription. */
export type UpdateChatroomDescriptionPayload = {
  __typename?: 'UpdateChatroomDescriptionPayload';
  chatroom: Chatroom;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type ChatroomDataFragment = { __typename?: 'Chatroom', id: string, label: string, description?: string | null, callerPhoneNumber: string, resolved: boolean, natureCode?: { __typename?: 'NatureCode', id: string, name: string } | null };

export type NatureCodeDataFragment = { __typename?: 'NatureCode', id: string, name: string };

export type CreateChatroomMutationVariables = Exact<{
  label: Scalars['String']['input'];
  callerPhoneNumber: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  natureCodeId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type CreateChatroomMutation = { __typename?: 'Mutation', createChatroom?: { __typename?: 'CreateChatroomPayload', chatroom: { __typename?: 'Chatroom', id: string, label: string, description?: string | null, callerPhoneNumber: string, resolved: boolean, natureCode?: { __typename?: 'NatureCode', id: string, name: string } | null } } | null };

export type ResolveChatroomMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ResolveChatroomMutation = { __typename?: 'Mutation', resolveChatroom?: { __typename?: 'ResolveChatroomPayload', chatroom: { __typename?: 'Chatroom', id: string, label: string, description?: string | null, callerPhoneNumber: string, resolved: boolean, natureCode?: { __typename?: 'NatureCode', id: string, name: string } | null } } | null };

export type UpdateChatroomDescriptionMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  description: Scalars['String']['input'];
}>;


export type UpdateChatroomDescriptionMutation = { __typename?: 'Mutation', updateChatroomDescription?: { __typename?: 'UpdateChatroomDescriptionPayload', chatroom: { __typename?: 'Chatroom', id: string, label: string, description?: string | null, callerPhoneNumber: string, resolved: boolean, natureCode?: { __typename?: 'NatureCode', id: string, name: string } | null } } | null };

export type ArchivedChatroomsListQueryVariables = Exact<{ [key: string]: never; }>;


export type ArchivedChatroomsListQuery = { __typename?: 'Query', chatrooms: Array<{ __typename?: 'Chatroom', id: string, label: string, description?: string | null, callerPhoneNumber: string, resolved: boolean, natureCode?: { __typename?: 'NatureCode', id: string, name: string } | null }> };

export type ChatroomsListQueryVariables = Exact<{ [key: string]: never; }>;


export type ChatroomsListQuery = { __typename?: 'Query', chatrooms: Array<{ __typename?: 'Chatroom', id: string, label: string, description?: string | null, callerPhoneNumber: string, resolved: boolean, natureCode?: { __typename?: 'NatureCode', id: string, name: string } | null }> };

export type NatureCodesQueryVariables = Exact<{ [key: string]: never; }>;


export type NatureCodesQuery = { __typename?: 'Query', natureCodes: Array<{ __typename?: 'NatureCode', id: string, name: string }> };

export const NatureCodeDataFragmentDoc = gql`
    fragment NatureCodeData on NatureCode {
  id
  name
}
    `;
export const ChatroomDataFragmentDoc = gql`
    fragment ChatroomData on Chatroom {
  id
  label
  description
  callerPhoneNumber
  resolved
  natureCode {
    ...NatureCodeData
  }
}
    ${NatureCodeDataFragmentDoc}`;
export const CreateChatroomDocument = gql`
    mutation CreateChatroom($label: String!, $callerPhoneNumber: String!, $description: String, $natureCodeId: ID) {
  createChatroom(
    input: {label: $label, callerPhoneNumber: $callerPhoneNumber, description: $description, natureCodeId: $natureCodeId}
  ) {
    chatroom {
      ...ChatroomData
    }
  }
}
    ${ChatroomDataFragmentDoc}`;
export type CreateChatroomMutationFn = Apollo.MutationFunction<CreateChatroomMutation, CreateChatroomMutationVariables>;

/**
 * __useCreateChatroomMutation__
 *
 * To run a mutation, you first call `useCreateChatroomMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateChatroomMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createChatroomMutation, { data, loading, error }] = useCreateChatroomMutation({
 *   variables: {
 *      label: // value for 'label'
 *      callerPhoneNumber: // value for 'callerPhoneNumber'
 *      description: // value for 'description'
 *      natureCodeId: // value for 'natureCodeId'
 *   },
 * });
 */
export function useCreateChatroomMutation(baseOptions?: Apollo.MutationHookOptions<CreateChatroomMutation, CreateChatroomMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateChatroomMutation, CreateChatroomMutationVariables>(CreateChatroomDocument, options);
      }
export type CreateChatroomMutationHookResult = ReturnType<typeof useCreateChatroomMutation>;
export type CreateChatroomMutationResult = Apollo.MutationResult<CreateChatroomMutation>;
export type CreateChatroomMutationOptions = Apollo.BaseMutationOptions<CreateChatroomMutation, CreateChatroomMutationVariables>;
export const ResolveChatroomDocument = gql`
    mutation ResolveChatroom($id: ID!) {
  resolveChatroom(input: {id: $id}) {
    chatroom {
      ...ChatroomData
    }
  }
}
    ${ChatroomDataFragmentDoc}`;
export type ResolveChatroomMutationFn = Apollo.MutationFunction<ResolveChatroomMutation, ResolveChatroomMutationVariables>;

/**
 * __useResolveChatroomMutation__
 *
 * To run a mutation, you first call `useResolveChatroomMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResolveChatroomMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resolveChatroomMutation, { data, loading, error }] = useResolveChatroomMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useResolveChatroomMutation(baseOptions?: Apollo.MutationHookOptions<ResolveChatroomMutation, ResolveChatroomMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResolveChatroomMutation, ResolveChatroomMutationVariables>(ResolveChatroomDocument, options);
      }
export type ResolveChatroomMutationHookResult = ReturnType<typeof useResolveChatroomMutation>;
export type ResolveChatroomMutationResult = Apollo.MutationResult<ResolveChatroomMutation>;
export type ResolveChatroomMutationOptions = Apollo.BaseMutationOptions<ResolveChatroomMutation, ResolveChatroomMutationVariables>;
export const UpdateChatroomDescriptionDocument = gql`
    mutation UpdateChatroomDescription($id: ID!, $description: String!) {
  updateChatroomDescription(input: {id: $id, description: $description}) {
    chatroom {
      ...ChatroomData
    }
  }
}
    ${ChatroomDataFragmentDoc}`;
export type UpdateChatroomDescriptionMutationFn = Apollo.MutationFunction<UpdateChatroomDescriptionMutation, UpdateChatroomDescriptionMutationVariables>;

/**
 * __useUpdateChatroomDescriptionMutation__
 *
 * To run a mutation, you first call `useUpdateChatroomDescriptionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateChatroomDescriptionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateChatroomDescriptionMutation, { data, loading, error }] = useUpdateChatroomDescriptionMutation({
 *   variables: {
 *      id: // value for 'id'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useUpdateChatroomDescriptionMutation(baseOptions?: Apollo.MutationHookOptions<UpdateChatroomDescriptionMutation, UpdateChatroomDescriptionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateChatroomDescriptionMutation, UpdateChatroomDescriptionMutationVariables>(UpdateChatroomDescriptionDocument, options);
      }
export type UpdateChatroomDescriptionMutationHookResult = ReturnType<typeof useUpdateChatroomDescriptionMutation>;
export type UpdateChatroomDescriptionMutationResult = Apollo.MutationResult<UpdateChatroomDescriptionMutation>;
export type UpdateChatroomDescriptionMutationOptions = Apollo.BaseMutationOptions<UpdateChatroomDescriptionMutation, UpdateChatroomDescriptionMutationVariables>;
export const ArchivedChatroomsListDocument = gql`
    query ArchivedChatroomsList {
  chatrooms(resolved: true) {
    ...ChatroomData
  }
}
    ${ChatroomDataFragmentDoc}`;

/**
 * __useArchivedChatroomsListQuery__
 *
 * To run a query within a React component, call `useArchivedChatroomsListQuery` and pass it any options that fit your needs.
 * When your component renders, `useArchivedChatroomsListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArchivedChatroomsListQuery({
 *   variables: {
 *   },
 * });
 */
export function useArchivedChatroomsListQuery(baseOptions?: Apollo.QueryHookOptions<ArchivedChatroomsListQuery, ArchivedChatroomsListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ArchivedChatroomsListQuery, ArchivedChatroomsListQueryVariables>(ArchivedChatroomsListDocument, options);
      }
export function useArchivedChatroomsListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArchivedChatroomsListQuery, ArchivedChatroomsListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ArchivedChatroomsListQuery, ArchivedChatroomsListQueryVariables>(ArchivedChatroomsListDocument, options);
        }
export type ArchivedChatroomsListQueryHookResult = ReturnType<typeof useArchivedChatroomsListQuery>;
export type ArchivedChatroomsListLazyQueryHookResult = ReturnType<typeof useArchivedChatroomsListLazyQuery>;
export type ArchivedChatroomsListQueryResult = Apollo.QueryResult<ArchivedChatroomsListQuery, ArchivedChatroomsListQueryVariables>;
export const ChatroomsListDocument = gql`
    query ChatroomsList {
  chatrooms {
    ...ChatroomData
  }
}
    ${ChatroomDataFragmentDoc}`;

/**
 * __useChatroomsListQuery__
 *
 * To run a query within a React component, call `useChatroomsListQuery` and pass it any options that fit your needs.
 * When your component renders, `useChatroomsListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChatroomsListQuery({
 *   variables: {
 *   },
 * });
 */
export function useChatroomsListQuery(baseOptions?: Apollo.QueryHookOptions<ChatroomsListQuery, ChatroomsListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ChatroomsListQuery, ChatroomsListQueryVariables>(ChatroomsListDocument, options);
      }
export function useChatroomsListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ChatroomsListQuery, ChatroomsListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ChatroomsListQuery, ChatroomsListQueryVariables>(ChatroomsListDocument, options);
        }
export type ChatroomsListQueryHookResult = ReturnType<typeof useChatroomsListQuery>;
export type ChatroomsListLazyQueryHookResult = ReturnType<typeof useChatroomsListLazyQuery>;
export type ChatroomsListQueryResult = Apollo.QueryResult<ChatroomsListQuery, ChatroomsListQueryVariables>;
export const NatureCodesDocument = gql`
    query NatureCodes {
  natureCodes {
    id
    name
  }
}
    `;

/**
 * __useNatureCodesQuery__
 *
 * To run a query within a React component, call `useNatureCodesQuery` and pass it any options that fit your needs.
 * When your component renders, `useNatureCodesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNatureCodesQuery({
 *   variables: {
 *   },
 * });
 */
export function useNatureCodesQuery(baseOptions?: Apollo.QueryHookOptions<NatureCodesQuery, NatureCodesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NatureCodesQuery, NatureCodesQueryVariables>(NatureCodesDocument, options);
      }
export function useNatureCodesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NatureCodesQuery, NatureCodesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NatureCodesQuery, NatureCodesQueryVariables>(NatureCodesDocument, options);
        }
export type NatureCodesQueryHookResult = ReturnType<typeof useNatureCodesQuery>;
export type NatureCodesLazyQueryHookResult = ReturnType<typeof useNatureCodesLazyQuery>;
export type NatureCodesQueryResult = Apollo.QueryResult<NatureCodesQuery, NatureCodesQueryVariables>;