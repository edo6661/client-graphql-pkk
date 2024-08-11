import React, { useCallback, useMemo, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { baseStyles } from '../../styles';
import CreateForm from '../../components/admin/CreateForm';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { AdminFields, adminFields } from '../../types/admin.type';
import Separator from '../../components/Separator';
import { COLORS } from '../../constants/colors';

const CreateScreen = () => {
  const [selectedValue, setSelectedValue] = useState<AdminFields>("Admin");

  const value = useMemo(() => {
    return selectedValue;
  }, [selectedValue]);

  return (
    <KeyboardAwareScrollView
      style={[
        baseStyles.container,
      ]}
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={true}

    >
      <View
        style={[
          baseStyles.centerContainer, {
          }
        ]}
      >
        <View
          style={[
            baseStyles.innerCenterContainer, {
              flex: 1,
              paddingVertical: 20,
              gap: 20,
            }
          ]}
        >

          <View
            style={{
              gap: 12
            }}
          >
            <View
              style={[
                baseStyles.primaryInput, {
                  paddingLeft: 0,
                }
              ]}
            >
              <Picker
                selectedValue={selectedValue}
                onValueChange={(itemValue) => setSelectedValue(itemValue)}
              >
                {adminFields.map((field) => (
                  <Picker.Item key={field} label={field} value={field} />
                ))}
              </Picker>

            </View>
            <Separator
              color={COLORS.greyLight}
              width='100%'
              height={200}
              orientation='horizontal'
            />
          </View>

          <CreateForm
            selectedValue={value}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  picker: {
    // height: 50,
    // width: 200,
  },
});

export default CreateScreen;
