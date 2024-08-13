import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import React, { Fragment, useEffect, useState } from 'react';
import { KonsentrasiNavigatorScreenProps } from '../../types/adminNavigator.type';
import { adminItemFields } from '../../types/admin.type';
import { gql, useApolloClient, useMutation, useQuery } from '@apollo/client';
import {
  Konsentrasi,
  MutationUpdateKonsentrasiArgs,
  ProgramStudi,
} from '../../__generated__/graphql';
import { updateKonsentrasi } from '../../api/mutation/konsentrasi.mutation';
import { getProgramStudis } from '../../api/query/programStudi.query';
import { Picker } from '@react-native-picker/picker';
import Toast from 'react-native-toast-message';
import { baseStyles } from '../../styles';

const KonsentrasiDetailsScreen = ({
  navigation,
  route,
}: KonsentrasiNavigatorScreenProps<'DetailsKonsentrasis'>) => {
  if (route.params?.id === undefined) return <Text>Id not found</Text>;
  const client = useApolloClient();

  const { data: programStudi } = useQuery<{
    programStudis: Array<ProgramStudi>
  }>(getProgramStudis);

  const konsentrasi = client.readFragment<Konsentrasi & {
    programStudiId: string;
  }>({
    id: `Konsentrasi:${route.params.id}`,
    fragment: gql`
      fragment KonsentrasiDetails on Konsentrasi {
        id
        name
        programStudiId
      }
    `,
  });

  const [selectedProdi, setSelectedProdi] = useState<string>(
    konsentrasi?.programStudiId || ""
  );

  const [update] = useMutation<
    { updateKonsentrasi: Partial<Konsentrasi> },
    MutationUpdateKonsentrasiArgs
  >(updateKonsentrasi, {
    update(cache, { data }) {
      if (!data) return console.error('Data not found');
      if (!data.updateKonsentrasi) return console.error('Data updateKonsentrasi not found');
      cache.modify({
        fields: {
          konsentrasis(existingKonsentrasis = [], { readField }) {
            return existingKonsentrasis.map((konsentrasiExist: Konsentrasi) => {
              if (route.params?.id === undefined) return <Text>Id not found</Text>;

              if (readField('id', konsentrasiExist) === route.params.id) {
                return {
                  ...konsentrasiExist,
                  ...data.updateKonsentrasi,
                };
              } else {
                return konsentrasiExist;
              }
            });
          },
        },
      });
    },
  });

  const [form, setForm] = useState<Partial<Konsentrasi> & {
    programStudiId: string;
  }>({
    id: konsentrasi?.id || '',
    name: konsentrasi?.name || '',
    programStudiId: konsentrasi?.programStudiId || '',
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
        programStudiId: form.programStudiId!,
      },
      optimisticResponse: {
        updateKonsentrasi: {
          ...konsentrasi,
          name: form.name,
          programStudiId: form.programStudiId,
        },
      },
    });

    Toast.show({
      swipeable: true,
      type: 'success',
      text1: `Sukses Update Konsentrasi ${form.name}`,
    });

    navigation.navigate('Konsentrasis');
  };

  useEffect(() => {
    setForm(prev => ({
      ...prev,
      ...(selectedProdi && { programStudiId: selectedProdi }),
    }));
  }, [selectedProdi]);

  return (
    <View style={baseStyles.centerContainer}>
      <View style={[baseStyles.innerCenterContainer, { paddingVertical: 20, gap: 12 }]}>
        {adminItemFields['Konsentrasi'].map(field => (
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
            {field === 'programStudiId' && (
              <View style={[
                baseStyles.primaryInput, {
                  paddingLeft: 0
                }
              ]}>
                <Picker
                  selectedValue={selectedProdi}
                  onValueChange={(itemValue) => setSelectedProdi(itemValue)}
                >
                  <Picker.Item label="Pilih Prodi" value="" />
                  {programStudi?.programStudis.map((prodi) => (
                    <Picker.Item key={prodi.id} label={prodi.name} value={prodi.id} />
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

export default KonsentrasiDetailsScreen;

const styles = StyleSheet.create({});
