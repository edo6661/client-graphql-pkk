import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { Fragment, useEffect, useState } from 'react';
import { AdminNavigatorScreenProps, ProgramStudiNavigatorScreenProps } from '../../types/adminNavigator.type';
import { adminItemFields } from '../../types/admin.type';
import { gql, useApolloClient, useMutation, useQuery } from '@apollo/client';
import {
  Admin,
  ProgramStudi,
  MutationUpdateAdminArgs,
  MutationUpdateProgramStudiArgs,
  MutationUpdateUserArgs,
  Fakultas,
} from '../../__generated__/graphql';
import { updateAdmin } from '../../api/mutation/admin.mutation';
import { updateUser } from '../../api/mutation/user.mutation';
import Toast from 'react-native-toast-message';
import { updateProgramStudi } from '../../api/mutation/programStudi.mutation';
import { getFakultas } from '../../api/query/fakultas.query';
import { Picker } from '@react-native-picker/picker';

const DetailsProgramStudiScreen = ({
  navigation,
  route,
}: ProgramStudiNavigatorScreenProps<'DetailsProgramStudis'>) => {
  if (route.params?.id === undefined) return <Text>Id not found</Text>;
  const client = useApolloClient();
  const programStudi = client.readFragment<ProgramStudi>({
    id: `ProgramStudi:${route.params.id}`,
    fragment: gql`
      fragment ProgramStudiDetails on ProgramStudi {
        id
        name
        fakultasId
      }
    `,
  });


  const { data: fakultas } = useQuery<{
    fakultas: Array<Fakultas>
  }>(getFakultas)


  const [update] = useMutation<
    { updateProgramStudi: Partial<ProgramStudi> },
    MutationUpdateProgramStudiArgs
  >(updateProgramStudi, {
    update(cache, { data }) {
      if (!data) return console.error('Data not found');
      if (!data.updateProgramStudi) return console.error('Data updateProgramStudi not found');
      cache.modify({
        fields: {
          programStudis(existingProgramStudis = [], { readField }) {
            return existingProgramStudis.map((programStudiExist: ProgramStudi) => {
              if (route.params?.id === undefined)
                return <Text>Id not found</Text>;

              if (readField('id', programStudiExist) === route.params.id) {
                return {
                  ...programStudiExist,
                  ...data.updateProgramStudi,
                };
              } else {
                return programStudiExist;
              }
            });
          },
        },
      });
    },
  });

  const [form, setForm] = useState<Partial<ProgramStudi> & {
    fakultasId: string;
  }>({
    id: programStudi?.id || '',
    name: programStudi?.name || '',
    fakultasId: programStudi?.fakultasId || '',
  });
  const [selectedFakultas, setSelectedFakultas] = useState<string | null>(
    programStudi?.fakultasId || null
  );


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
        fakultasId: form.fakultasId
      },
      optimisticResponse: {
        updateProgramStudi: {
          ...programStudi,
          name: form.name,
          fakultasId: form.fakultasId,
        },
      },
    });

    Toast.show({
      swipeable: true,
      type: 'success',
      text1: `Sukses Update ProgramStudi ${form.name}`,
    });

    navigation.navigate('ProgramStudis');
  };

  useEffect(() => {
    setForm(prev => ({
      ...prev,
      ...(selectedFakultas && { fakultasId: selectedFakultas }),
    }))
  }, [selectedFakultas])


  return (
    <View>
      <Text>{route.params.id}</Text>
      <Text>{programStudi?.name}</Text>
      {adminItemFields['ProgramStudi'].map(field => (
        <Fragment key={field}>
          {field.includes('id') || field.includes('Id') ? null : (
            <TextInput
              key={field}
              placeholder={field}
              value={form[field]}
              onChangeText={value => onChange(field, value)}
            />
          )}
          {field === 'fakultasId' && (
            <Picker
              selectedValue={selectedFakultas}
              onValueChange={(itemValue) => setSelectedFakultas(itemValue)}
            >
              <Picker.Item label="Pilih Fakultas" value={null} />
              {fakultas?.fakultas.map((proyek) => (
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

export default DetailsProgramStudiScreen;

const styles = StyleSheet.create({});
