import React, { useCallback, useMemo, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { baseStyles } from '../../styles';
import CreateForm from '../../components/admin/CreateForm';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { AdminFields, adminFields } from '../../types/admin.type';

const CreateScreen = () => {
  const [selectedValue, setSelectedValue] = useState<AdminFields>("Admin");

  const value = useMemo(() => {
    return selectedValue;
  }, [selectedValue]);

  return (
    <KeyboardAwareScrollView
      style={[
        baseStyles.container,
        baseStyles.border, {
          borderColor: 'red'
        }
      ]}
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={[
        baseStyles.border, {
          borderColor: 'blue'
        }
      ]}
      scrollEnabled={true}

    >
      <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
      >
        {adminFields.map((field) => (
          <Picker.Item key={field} label={field} value={field} />
        ))}
      </Picker>
      <CreateForm
        selectedValue={value}
      />
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
