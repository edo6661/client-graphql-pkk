import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const ApolloProviders = (
  { children }: { children: React.ReactNode }
) => {
  // ! setelah get all data, spesific data itu tidak usah di get lagi karena sudah ada di cache, dan graphql akan mengambil data dari cache
  const cache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          bau(_, { args, toReference }) {
            return toReference({
              __typename: "Bau",
              id: args?.id
            })
          }
        }
      }
    }
  })

  const client = new ApolloClient({
    // uri: 'http://10.0.2.2:4000/graphql',
    uri: 'https://pendaftaran-kkn-kkp.netlify.app/graphql',
    cache,
    credentials: "include"
  })

  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
}

export default ApolloProviders

const styles = StyleSheet.create({})