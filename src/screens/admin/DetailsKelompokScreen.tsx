import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { Fragment, useEffect, useState } from 'react';
import { gql, useApolloClient, useMutation, useQuery } from '@apollo/client';
import {
  Kelompok,
  MutationUpdateKelompokArgs,
  MutationUpdateUserArgs,
  Proyek,
} from '../../__generated__/graphql';
import { updateKelompok } from '../../api/mutation/kelompok.mutation';
import { updateUser } from '../../api/mutation/user.mutation';
import Toast from 'react-native-toast-message';
import { KelompokNavigatorScreenProps } from '../../types/adminNavigator.type';
import { adminItemFields } from '../../types/admin.type';
import { getProyeks } from '../../api/query/proyek.query';
import { Picker } from '@react-native-picker/picker';

const DetailsKelompokScreen = ({
  navigation,
  route,
}: KelompokNavigatorScreenProps<'DetailsKelompoks'>) => {

  const { data: proyeks } = useQuery<{
    proyeks: Array<Proyek>
  }>(getProyeks)



  if (route.params?.id === undefined) return <Text>Id not found</Text>;
  const client = useApolloClient();
  const kelompok = client.readFragment<Kelompok>({
    id: `Kelompok:${route.params.id}`,
    fragment: gql`
      fragment KelompokDetails on Kelompok {
        id
        name
        proyekId
      }
    `,
  });
  const [update] = useMutation<
    { updateKelompok: Partial<Kelompok> },
    MutationUpdateKelompokArgs
  >(updateKelompok, {
    update(cache, { data }) {
      if (!data) return console.error('Data not found');
      if (!data.updateKelompok) return console.error('Data updateKelompok not found');
      cache.modify({
        fields: {
          kelompoks(existingKelompoks = [], { readField }) {
            return existingKelompoks.map((kelompokExist: Kelompok) => {
              if (route.params?.id === undefined)
                return <Text>Id not found</Text>;

              if (readField('id', kelompokExist) === route.params.id) {
                return {
                  ...kelompokExist,
                  ...data.updateKelompok,
                };
              } else {
                return kelompokExist;
              }
            });
          },
        },
      });
    },
  });

  const [form, setForm] = useState<Partial<Kelompok>>({
    id: kelompok?.id || '',
    name: kelompok?.name || '',
    proyekId: kelompok?.proyekId || '',
  });
  const [selectedProyek, setSelectedProyek] = useState<string | null>(
    kelompok?.proyekId || null
  );


  const onChange = (field: string, value: string) => {
    setForm(prevState => ({
      ...prevState,
      [field]: value,
    }));
  };

  const onUpdate = async () => {
    try {
      await update({
        variables: {
          id: route.params?.id!,
          name: form?.name!,
          proyekId: form?.proyekId!,
        },
        optimisticResponse: {
          updateKelompok: {
            ...kelompok,
            __typename: "Kelompok",
            name: form.name,
            proyekId: form.proyekId,
            id: form.id,
          },
        },
      });
      setForm({})
      setSelectedProyek(null)
      Toast.show({
        swipeable: true,
        type: 'success',
        text1: `Sukses Update Kelompok ${form.name}`,
      });

      navigation.navigate('Kelompoks');
    } catch (err) {
      console.error(err)
    }
  };

  useEffect(() => {
    setForm((prev) =>
    ({
      ...prev,
      ...(selectedProyek && { proyekId: selectedProyek })
    })
    )
  }, [selectedProyek])

  return (
    <View>
      <Text>{route.params.id}</Text>
      {adminItemFields['Kelompok'].map(field => (
        <Fragment key={field}>
          {field.includes('id') || field.includes('Id') ? null : (
            <TextInput
              key={field}
              placeholder={field}
              value={form[field]?.toString()}
              onChangeText={value => onChange(field, value)}
            />
          )}
          {field === 'proyekId' && (
            <Picker
              selectedValue={selectedProyek}
              onValueChange={(itemValue) => setSelectedProyek(itemValue)}
            >
              <Picker.Item label="Pilih Proyek" value={null} />
              {proyeks?.proyeks.map((proyek) => (
                <Picker.Item key={proyek.id} label={proyek.name} value={proyek.id} />
              ))}
            </Picker>
          )}

        </Fragment>
      ))}
      <Button title="Update" onPress={onUpdate} />
    </View>
  );
};

export default DetailsKelompokScreen;

const styles = StyleSheet.create({});
