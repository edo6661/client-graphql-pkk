import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { Fragment, useState } from 'react';
import { AdminNavigatorScreenProps, FakultasNavigatorScreenProps } from '../../types/adminNavigator.type';
import { adminItemFields } from '../../types/admin.type';
import { gql, useApolloClient, useMutation } from '@apollo/client';
import {
  Admin,
  Fakultas,
  MutationUpdateAdminArgs,
  MutationUpdateFakultasArgs,
  MutationUpdateUserArgs,
} from '../../__generated__/graphql';
import { updateAdmin } from '../../api/mutation/admin.mutation';
import { updateUser } from '../../api/mutation/user.mutation';
import Toast from 'react-native-toast-message';
import { updateFakultas } from '../../api/mutation/fakultas.mutation';
import { baseStyles } from '../../styles';

const DetailsFakultasScreen = ({
  navigation,
  route,
}: FakultasNavigatorScreenProps<'DetailsFakultass'>) => {
  if (route.params?.id === undefined) return <Text>Id not found</Text>;
  const client = useApolloClient();
  const fakultas = client.readFragment<Fakultas>({
    id: `Fakultas:${route.params.id}`,
    fragment: gql`
      fragment FakultasDetails on Fakultas {
        id
        name
      }
    `,
  });


  const [update] = useMutation<
    { updateFakultas: Partial<Fakultas> },
    MutationUpdateFakultasArgs
  >(updateFakultas, {
    update(cache, { data }) {
      if (!data) return console.error('Data not found');
      if (!data.updateFakultas) return console.error('Data updateFakultas not found');
      cache.modify({
        fields: {
          fakultass(existingFakultass = [], { readField }) {
            return existingFakultass.map((fakultasExist: Fakultas) => {
              if (route.params?.id === undefined)
                return <Text>Id not found</Text>;

              if (readField('id', fakultasExist) === route.params.id) {
                return {
                  ...fakultasExist,
                  ...data.updateFakultas,
                };
              } else {
                return fakultasExist;
              }
            });
          },
        },
      });
    },
  });

  const [form, setForm] = useState<Partial<Fakultas>>({
    id: fakultas?.id || '',
    name: fakultas?.name || '',
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
        name: form.name!,
      },
      optimisticResponse: {
        updateFakultas: {
          ...fakultas,
          name: form.name,
        },
      },
    });

    Toast.show({
      swipeable: true,
      type: 'success',
      text1: `Sukses Update Fakultas ${form.name}`,
    });

    navigation.navigate('Fakultass');
  };

  return (
    <View
      style={baseStyles.centerContainer}
    >
      <View style={[
        baseStyles.innerCenterContainer, {
          paddingVertical: 20,
          gap: 12,
        }
      ]}>
        {adminItemFields['Fakultas'].map(field => (
          <Fragment key={field}>
            {field.includes('id') || field.includes('Id') ? null : (
              <TextInput
                key={field}
                placeholder={field}
                value={form[field]}
                onChangeText={value => onChange(field, value)}
                style={baseStyles.primaryInput}
              />
            )}
          </Fragment>
        ))}
        <TouchableOpacity
          style={baseStyles.primaryButton}
        >
          <Text
            style={baseStyles.textButton}
          >
            Update
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailsFakultasScreen;

const styles = StyleSheet.create({});
