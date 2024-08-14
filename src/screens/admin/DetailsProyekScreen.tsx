import { Button, Image, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { Fragment, useEffect, useState } from 'react';
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
import { uploadImage } from '../../utils/uploadImage';
import ImageCropPicker from 'react-native-image-crop-picker';

import Icon from 'react-native-vector-icons/FontAwesome';
import { baseStyles } from '../../styles';

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

  const [image, setImage] = useState<string | null>(null);

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

  const onUploadPhoto = async () => {
    try {
      console.log("IMAGE", image);
      const uploadedUrl = await uploadImage(image!);
      handleInputChange('photo', uploadedUrl!);
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'Foto berhasil diupload'
      });
    } catch (error) {
      console.error(error);
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Terjadi kesalahan saat mengupload foto'
      });
    }
  };


  const choosePhotoFromLibrary = () => {
    ImageCropPicker.openPicker({
      width: 1200,
      height: 780,
      cropping: true,
    }).then((image) => {
      console.log("IMAGE FROM LIBRARY", image);
      const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
      console.log("IMAGE URI", imageUri);
      setImage(imageUri!);
    }).catch((error) => {
      console.log(error);
    });
  };

  useEffect(() => {
    if (image) {
      onUploadPhoto();
      console.log(form)
    }
  }, [image]);


  return (
    <View
      style={baseStyles.centerContainer}
    >
      <View style={{
        flex: 1,

      }}>
        <KeyboardAwareScrollView
          style={[
            baseStyles.innerCenterContainer, {
            }
          ]}
          contentContainerStyle={{
            gap: 12,
            paddingVertical: 20,
          }}
        >
          {adminItemFields['Proyek'].map(field => (
            <Fragment key={field}>
              {(field.includes('id') || field.includes('Id')) || field.includes('tanggal') || field === 'verified' || field === 'type' || field.includes('mulai') || field === 'telahSelesai' || field === 'photo' ? null : (
                <>

                  <TextInput
                    key={field}
                    placeholder={field}
                    value={form[field]?.toString()}
                    onChangeText={value => handleInputChange(field, value)}
                    style={baseStyles.primaryInput}
                  />
                </>
              )}
              {field === 'photo' && (
                <>
                  {!form[field] && (
                    <Button
                      title="Pilih foto"
                      onPress={choosePhotoFromLibrary}
                    />
                  )}
                  {form[field] && (
                    <View
                      style={{
                        flexDirection: 'row'
                      }}
                    >
                      <Image
                        source={{ uri: form[field] }}
                        style={styles.image}
                      />
                      <Icon
                        name="close"
                        color="red"
                        onPress={() => setForm(prev => ({ ...prev, photo: '' }))}
                      />
                    </View>
                  )}


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
          <TouchableOpacity style={baseStyles.primaryButton} onPress={onUpdate}>
            <Text style={baseStyles.textButton}>Update</Text>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
};

export default DetailsProyekScreen;

const styles = StyleSheet.create({
  image: {
    height: 200,
    flex: 0.9,
    resizeMode: 'contain',
    marginVertical: 20,
  },

});
