import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ApolloClient, ApolloProvider, InMemoryCache, gql } from '@apollo/client'
import { Bau } from '../../__generated__/graphql'
import { createFragmentRegistry } from '@apollo/client/cache'
import { adminFragments, bauFragments } from '../../fragments'

const ApolloProviders = (
  { children }: { children: React.ReactNode }
) => {
  // ! setelah get all data, spesific data itu tidak usah di get lagi karena sudah ada di cache, dan graphql akan mengambil data dari cache
  const cache = new InMemoryCache({
    fragments: createFragmentRegistry(gql`
        ${bauFragments}
        ${adminFragments}
      `),
    // typePolicies: {
    //   Query: {
    //     fields: {
    //       bau: {
    //         keyArgs: ["id"],

    //         read(_, { args, toReference }) {
    //           return toReference({
    //             __typename: "Bau",
    //             id: args?.id
    //           });
    //         }
    //       },
    //       baus: {
    //         keyArgs: [],
    //         // TODO:
    //         merge(existing: Bau[] = [], incoming: Bau[], { readField }) {
    //           const merged = [...existing]
    //           incoming.forEach(bau => {
    //             // ! Jika tidak ada elemen dalam existing yang memiliki id yang sama dengan incomingBau, maka kondisi !existing.some(...) akan bernilai true.
    //             // ! Ini berarti incomingBau tidak ada di existing, dan oleh karena itu, incomingBau dapat ditambahkan ke merged.

    //             if (!existing.some(existingBau => readField('id', existingBau) === readField('id', bau))) {
    //               merged.push(bau)
    //             }
    //           })
    //           return merged
    //         }
    //       },
    //       mahasiswa(_, { args, toReference }) {
    //         return toReference({
    //           __typename: "Mahasiswa",
    //           id: args?.id
    //         })
    //       },
    //       proyek(_, { args, toReference }) {
    //         return toReference({
    //           __typename: "Proyek",
    //           id: args?.id
    //         })
    //       },
    //       dosen(_, { args, toReference }) {
    //         return toReference({
    //           __typename: "Dosen",
    //           id: args?.id
    //         })
    //       },
    //       fakultas(_, { args, toReference }) {
    //         return toReference({
    //           __typename: "Fakultas",
    //           id: args?.id
    //         })
    //       },
    //       programStudi(_, { args, toReference }) {
    //         return toReference({
    //           __typename: "ProgramStudi",
    //           id: args?.id
    //         })
    //       },
    //       konsentrasi(_, { args, toReference }) {
    //         return toReference({
    //           __typename: "Konsentrasi",
    //           id: args?.id
    //         })
    //       },
    //       persyaratan(_, { args, toReference }) {
    //         return toReference({
    //           __typename: "Persyaratan",
    //           id: args?.id
    //         })
    //       },
    //       pendaftaran(_, { args, toReference }) {
    //         return toReference({
    //           __typename: "Pendaftaran",
    //           id: args?.id
    //         })
    //       },
    //       user(_, { args, toReference }) {
    //         return toReference({
    //           __typename: "User",
    //           id: args?.id
    //         })
    //       },
    //       admin(_, { args, toReference }) {
    //         return toReference({
    //           __typename: "Admin",
    //           id: args?.id
    //         })
    //       },

    //     }
    //   }
    // }
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