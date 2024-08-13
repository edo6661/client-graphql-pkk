import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import React, { Fragment, useEffect, useState } from 'react';
import { ProgramStudiNavigatorScreenProps } from '../../types/adminNavigator.type';
import { adminItemFields } from '../../types/admin.type';
import { gql, useApolloClient, useMutation, useQuery } from '@apollo/client';
import {
  ProgramStudi,
  MutationUpdateProgramStudiArgs,
  Fakultas,
} from '../../__generated__/graphql';
import { updateProgramStudi } from '../../api/mutation/programStudi.mutation';
import { getFakultas } from '../../api/query/fakultas.query';
import { Picker } from '@react-native-picker/picker';
import Toast from 'react-native-toast-message';
import { baseStyles } from '../../styles';

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
  }>(getFakultas);

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
              if (route.params?.id === undefined) return <Text>Id not found</Text>;

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
    }));
  }, [selectedFakultas]);

  return (
    <View style={baseStyles.centerContainer}>
      <View style={[baseStyles.innerCenterContainer, { paddingVertical: 20, gap: 12 }]}>
        {adminItemFields['ProgramStudi'].map(field => (
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
            {field === 'fakultasId' && (
              <View style={[
                baseStyles.primaryInput, {
                  paddingLeft: 0
                }
              ]}>
                <Picker
                  selectedValue={selectedFakultas}
                  onValueChange={(itemValue) => setSelectedFakultas(itemValue)}
                >
                  <Picker.Item label="Pilih Fakultas" value={null} />
                  {fakultas?.fakultas.map((fakultasItem) => (
                    <Picker.Item key={fakultasItem.id} label={fakultasItem.name} value={fakultasItem.id} />
                  ))}
                </Picker>
              </View>
            )}
          </Fragment>
        ))}
        <TouchableOpacity
          style={baseStyles.primaryButton}
          onPress={onUpdate}
        >
          <Text style={baseStyles.textButton}>Update</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailsProgramStudiScreen;

const styles = StyleSheet.create({});
