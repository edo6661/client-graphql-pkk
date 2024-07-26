import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { Fragment, useState } from 'react';
import { gql, useApolloClient, useMutation } from '@apollo/client';
import {
  Proyek,
  MutationUpdateProyekArgs,
  MutationUpdateUserArgs,
  TypeProyek,
} from '../../__generated__/graphql';
import { updateProyek } from '../../api/mutation/proyek.mutation';
import { updateUser } from '../../api/mutation/user.mutation';
import Toast from 'react-native-toast-message';
import { ProyekNavigatorScreenProps } from '../../types/adminNavigator.type';
import { adminItemFields } from '../../types/admin.type';
import dayjs from 'dayjs';
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import DateTimePicker from 'react-native-ui-datepicker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Picker } from '@react-native-picker/picker';


const DetailsProyekScreen = ({
  navigation,
  route,
}: ProyekNavigatorScreenProps<'DetailsProyeks'>) => {
  if (route.params?.id === undefined) return <Text>Id not found</Text>;
  const client = useApolloClient();
  const proyek = client.readFragment<Proyek>({
    id: `Proyek:${route.params.id}`,
    fragment: gql`
      fragment ProyekDetails on Proyek {
        ...ProyekFields
      }
    `,
  });
  const [update] = useMutation<
    { updateProyek: Partial<Proyek> },
    MutationUpdateProyekArgs
  >(updateProyek, {
    update(cache, { data }) {
      if (!data) return console.error('Data not found');
      if (!data.updateProyek) return console.error('Data updateProyek not found');
      cache.modify({
        fields: {
          proyeks(existingProyeks = [], { readField }) {
            return existingProyeks.map((proyekExist: Proyek) => {
              if (route.params?.id === undefined)
                return <Text>Id not found</Text>;

              if (readField('id', proyekExist) === route.params.id) {
                return {
                  ...proyekExist,
                  ...data.updateProyek,
                };
              } else {
                return proyekExist;
              }
            });
          },
        },
      });
    },
  });


  const [form, setForm] = useState<Partial<Proyek>>({
    ...proyek,
    tanggalMulai: new Date(+proyek?.tanggalMulai!).toISOString(),
    tanggalSelesai: new Date(+proyek?.tanggalSelesai!).toISOString(),
  });



  const handleInputChange = (field: string, value: string) => {
    const formattedValue = field === 'tanggalMulai' || field === 'tanggalSelesai'
      ? dayjs(value).startOf('day').format('YYYY-MM-DDTHH:mm:ss.SSS[Z]')
      : value;

    setForm(prevState => ({
      ...prevState,
      [field]: formattedValue,
    }));
  };



  const onUpdate = () => {
    try {
      const checkedToBoolean = (value: string | boolean) => typeof value === "string" ? value === "Checked" ? true : false : value;
      const convertedData: typeof form = {
        ...form,
        batasOrang: +form.batasOrang!,
        bolehDimulai: checkedToBoolean(form.bolehDimulai!),
        telahSelesai: checkedToBoolean(form.telahSelesai!),
        verified: checkedToBoolean(form.verified!),
      }
      console.log("CONVERTED DATA", {
        convertedData
      })
      update({
        variables: {
          ...convertedData!,
          id: route.params?.id!,
        },
        optimisticResponse: {
          updateProyek: {
            __typename: "Proyek",
            ...convertedData,
          },
        },
      });
      Toast.show({
        swipeable: true,
        type: 'success',
        text1: `Sukses Update Proyek ${form.name}`,
      });

      navigation.navigate('Proyeks');
    } catch (err) {
      console.error(err);
    }
  };


  return (
    <KeyboardAwareScrollView>
      <Text>{route.params.id}</Text>
      <Text>{JSON.stringify(proyek)}</Text>
      {adminItemFields['Proyek'].map(field => (
        <Fragment key={field}>
          {(field.includes('id') || field.includes('Id')) || field.includes('tanggal') || field === 'verified' || field === 'type' || field.includes('mulai') || field === 'telahSelesai' ? null : (
            <>
              <Text>
                {field}
              </Text>
              <TextInput
                key={field}
                placeholder={field}
                value={form[field]?.toString()}
                onChangeText={value => handleInputChange(field, value)}
              />
            </>
          )}
          {(field === 'verified' || field === 'bolehDimulai' || field === 'telahSelesai') && (
            <BouncyCheckbox
              size={25}
              fillColor="cyan"
              unFillColor="#FFFFFF"
              iconStyle={{ borderColor: "red" }}
              innerIconStyle={{ borderWidth: 2 }}
              onPress={(checked) =>
                handleInputChange(field, checked ? "Checked" : "Unchecked")
              }
              text={field}
              isChecked={form[field] === true}
            />
          )}
          {field === 'type' && (

            <Picker selectedValue={form[field]} onValueChange={(itemValue) => handleInputChange(field, itemValue)}>
              <Picker.Item label="Pilih Type" value="" />
              <Picker.Item label={TypeProyek.Kkn} value={TypeProyek.Kkn} />
              <Picker.Item label={TypeProyek.Kkp} value={TypeProyek.Kkp} />
            </Picker>

          )}
          {field.includes('tanggal') && (
            <>
              <Text>
                {field}
              </Text>
              <DateTimePicker
                minDate={new Date()}
                date={form[field]?.toString() ? dayjs(form[field].toString()) : dayjs()}
                onChange={(params) => handleInputChange(field, params.date as string)}
                mode="single"
              />

            </>
          )}

        </Fragment>
      ))}
      <Button title="Update" onPress={onUpdate} />
    </KeyboardAwareScrollView>
  );
};

export default DetailsProyekScreen;

const styles = StyleSheet.create({});
