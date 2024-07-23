import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { Fragment, useState } from 'react';
import { gql, useApolloClient, useMutation } from '@apollo/client';
import {
  Persyaratan,
  MutationUpdatePersyaratanArgs,
  MutationUpdateUserArgs,
} from '../../__generated__/graphql';
import { updatePersyaratan } from '../../api/mutation/persyaratan.mutation';
import { updateUser } from '../../api/mutation/user.mutation';
import Toast from 'react-native-toast-message';
import { PersyaratanNavigatorScreenProps } from '../../types/adminNavigator.type';
import { adminItemFields } from '../../types/admin.type';
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { Picker } from '@react-native-picker/picker';


const DetailsPersyaratanScreen = ({
  navigation,
  route,
}: PersyaratanNavigatorScreenProps<'DetailsPersyaratans'>) => {
  if (route.params?.id === undefined) return <Text>Id not found</Text>;
  const client = useApolloClient();
  const persyaratan = client.readFragment<Persyaratan>({
    id: `Persyaratan:${route.params.id}`,
    fragment: gql`
      fragment PersyaratanDetails on Persyaratan {
        id
        keteranganKelakuanBaik
        keteranganOrangTua
        keteranganPembayaran
        keteranganSehat
        mahasiswaId
        mahasiswa {
          id
          fullname
          nim
        }
      }
    `,
  });
  const [selectedMahasiswa, setSelectedMahasiswa] = useState<string | null>();


  const [update] = useMutation<
    {
      updatePersyaratan: Partial<Persyaratan>
    },
    MutationUpdatePersyaratanArgs
  >(updatePersyaratan, {
    update(cache, { data }) {
      if (!data) return console.error('Data not found');
      if (!data.updatePersyaratan) return console.error('Data updatePersyaratan not found');
      cache.modify({
        fields: {
          persyaratans(existingPersyaratans = [], { readField }) {
            return existingPersyaratans.map((persyaratanExist: Persyaratan) => {
              if (route.params?.id === undefined)
                return <Text>Id not found</Text>;

              if (readField('id', persyaratanExist) === route.params.id) {
                return {
                  ...persyaratanExist,
                  ...data.updatePersyaratan,
                };
              } else {
                return persyaratanExist;
              }
            });
          },
        },
      });
    },
  });

  const [form, setForm] = useState<Partial<Persyaratan>>({
    id: persyaratan?.id || '',
    keteranganKelakuanBaik: persyaratan?.keteranganKelakuanBaik || false,
    keteranganOrangTua: persyaratan?.keteranganOrangTua || false,
    keteranganPembayaran: persyaratan?.keteranganPembayaran || false,
    keteranganSehat: persyaratan?.keteranganSehat || false,
    mahasiswaId: persyaratan?.mahasiswaId || '',
  });

  const onUpdate = () => {
    update({
      variables: {
        id: route.params?.id!,
        keteranganKelakuanBaik: form?.keteranganKelakuanBaik!,
        keteranganOrangTua: form?.keteranganOrangTua!,
        keteranganPembayaran: form?.keteranganPembayaran!,
        keteranganSehat: form?.keteranganSehat!,
      },
      optimisticResponse: {
        updatePersyaratan: {
          ...persyaratan,
          keteranganKelakuanBaik: form.keteranganKelakuanBaik,
          keteranganOrangTua: form.keteranganOrangTua,
          keteranganPembayaran: form.keteranganPembayaran,
          keteranganSehat: form.keteranganSehat,
          mahasiswaId: form.mahasiswaId!,
        },
      },
    });

    Toast.show({
      swipeable: true,
      type: 'success',
      text1: `Sukses Update Persyaratan `,
    });

    navigation.navigate('Persyaratans');
  };

  return (
    <View>
      <Text>{JSON.stringify(persyaratan?.mahasiswa.fullname)}</Text>
      {adminItemFields['Persyaratan'].map(field => (
        <Fragment key={field}>
          {field.includes('id') || field.includes('Id') ? null : (
            <BouncyCheckbox
              size={25}
              fillColor="cyan"
              unFillColor="#FFFFFF"
              iconStyle={{ borderColor: "red" }}
              innerIconStyle={{ borderWidth: 2 }}
              onPress={(checked) =>
                setForm((prev) => ({
                  ...prev,
                  [field]: checked,
                }))
              }
              text={field}
              isChecked={form[field] as boolean}
            />
          )}

        </Fragment>
      ))}
      <Button title="Update" onPress={onUpdate} />
    </View>
  );
};

export default DetailsPersyaratanScreen;

const styles = StyleSheet.create({});
