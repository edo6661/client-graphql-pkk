import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { Fragment, useState } from 'react';
import { gql, useApolloClient, useMutation } from '@apollo/client';
import {
  Kelas,
  MutationUpdateKelasArgs,
  MutationUpdateUserArgs,
} from '../../__generated__/graphql';
import { updateKelas } from '../../api/mutation/kelas.mutation';
import { updateUser } from '../../api/mutation/user.mutation';
import Toast from 'react-native-toast-message';
import { KelasNavigatorScreenProps } from '../../types/adminNavigator.type';
import { adminItemFields } from '../../types/admin.type';

const DetailsKelasScreen = ({
  navigation,
  route,
}: KelasNavigatorScreenProps<'DetailsKelass'>) => {
  if (route.params?.id === undefined) return <Text>Id not found</Text>;
  const client = useApolloClient();
  const kelas = client.readFragment<Kelas>({
    id: `Kelas:${route.params.id}`,
    fragment: gql`
      fragment KelasDetails on Kelas {
        id
        name
      }
    `,
  });

  const [updateUserKelas] = useMutation<any, MutationUpdateUserArgs>(
    updateUser,
  );

  const [update] = useMutation<
    { updateKelas: Partial<Kelas> },
    MutationUpdateKelasArgs
  >(updateKelas, {
    update(cache, { data }) {
      if (!data) return console.error('Data not found');
      if (!data.updateKelas) return console.error('Data updateKelas not found');
      cache.modify({
        fields: {
          kelass(existingKelass = [], { readField }) {
            return existingKelass.map((kelasExist: Kelas) => {
              if (route.params?.id === undefined)
                return <Text>Id not found</Text>;

              if (readField('id', kelasExist) === route.params.id) {
                return {
                  ...kelasExist,
                  ...data.updateKelas,
                };
              } else {
                return kelasExist;
              }
            });
          },
        },
      });
    },
  });

  const [form, setForm] = useState<Partial<Kelas>>({
    id: kelas?.id || '',
    name: kelas?.name || '',

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
        name: form?.name!,
      },
      optimisticResponse: {
        updateKelas: {
          ...kelas,
          name: form.name,
        },
      },
    });

    Toast.show({
      swipeable: true,
      type: 'success',
      text1: `Sukses Update Kelas ${form.name}`,
    });

    navigation.navigate('Kelass');
  };

  return (
    <View>
      <Text>{route.params.id}</Text>
      <Text>{JSON.stringify(kelas)}</Text>
      {adminItemFields['Kelas'].map(field => (
        <Fragment key={field}>
          {field.includes('id') || field.includes('Id') ? null : (
            <TextInput
              key={field}
              placeholder={field}
              value={form[field]}
              onChangeText={value => onChange(field, value)}
            />
          )}
        </Fragment>
      ))}
      <Button title="Update" onPress={onUpdate} />
    </View>
  );
};

export default DetailsKelasScreen;

const styles = StyleSheet.create({});
