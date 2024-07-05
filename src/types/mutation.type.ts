import { ApolloCache, DefaultContext, MutationFunctionOptions, OperationVariables } from "@apollo/client";

export type MutationFn<T> = (options?: MutationFunctionOptions<any, OperationVariables, DefaultContext, ApolloCache<any>> | undefined) => T;