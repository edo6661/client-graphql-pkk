import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { Fragment, useState } from 'react';
import { gql, useApolloClient, useMutation } from '@apollo/client';
import {
  Angkatan,
  MutationUpdateAngkatanArgs,
  MutationUpdateUserArgs,
} from '../../__generated__/graphql';
import { updateAngkatan } from '../../api/mutation/angkatan.mutation';
import { updateUser } from '../../api/mutation/user.mutation';
import Toast from 'react-native-toast-message';
import { AngkatanNavigatorScreenProps } from '../../types/adminNavigator.type';
import { adminItemFields } from '../../types/admin.type';

const DetailsAngkatanScreen = ({
  navigation,
  route,
}: AngkatanNavigatorScreenProps<'DetailsAngkatans'>) => {
  if (route.params?.id === undefined) return <Text>Id not found</Text>;
  const client = useApolloClient();
  const angkatan = client.readFragment<Angkatan>({
    id: `Angkatan:${route.params.id}`,
    fragment: gql`
      fragment AngkatanDetails on Angkatan {
        id
        tahun
        createdAt
        updatedAt
      }
    `,
  });
  const [update] = useMutation<
    { updateAngkatan: Partial<Angkatan> },
    MutationUpdateAngkatanArgs
  >(updateAngkatan, {
    update(cache, { data }) {
      if (!data) return console.error('Data not found');
      if (!data.updateAngkatan) return console.error('Data updateAngkatan not found');
      cache.modify({
        fields: {
          angkatans(existingAngkatans = [], { readField }) {
            return existingAngkatans.map((angkatanExist: Angkatan) => {
              if (route.params?.id === undefined)
                return <Text>Id not found</Text>;

              if (readField('id', angkatanExist) === route.params.id) {
                return {
                  ...angkatanExist,
                  ...data.updateAngkatan,
                };
              } else {
                return angkatanExist;
              }
            });
          },
        },
      });
    },
  });

  const [form, setForm] = useState<Partial<Angkatan>>({
    tahun: angkatan?.tahun || 0,
    id: angkatan?.id || '',
  });

  const onChange = (field: string, value: string) => {
    setForm(prevState => ({
      ...prevState,
      [field]: value,
    }));
  };

  const onUpdate = () => {
    update({
      variables: {
        id: route.params?.id!,
        tahun: +form?.tahun!,
      },
      optimisticResponse: {
        updateAngkatan: {
          __typename: "Angkatan",
          tahun: form.tahun,
          id: form.id,
          createdAt: angkatan?.createdAt,
          updatedAt: new Date().toString(),
        },
      },
    });
    Toast.show({
      swipeable: true,
      type: 'success',
      text1: `Sukses Update Angkatan ${form.tahun}`,
    });

    navigation.navigate('Angkatans');
  };

  return (
    <View>
      <Text>{route.params.id}</Text>
      <Text>{JSON.stringify(angkatan)}</Text>
      {adminItemFields['Angkatan'].map(field => (
        <Fragment key={field}>
          {field.includes('id') || field.includes('Id') ? null : (
            <TextInput
              key={field}
              placeholder={field}
              value={form[field]?.toString()}
              onChangeText={value => onChange(field, value)}
            />
          )}
        </Fragment>
      ))}
      <Button title="Update" onPress={onUpdate} />
    </View>
  );
};

export default DetailsAngkatanScreen;

const styles = StyleSheet.create({});
