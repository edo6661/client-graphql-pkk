import React, { useCallback, useMemo, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { baseStyles } from '../../styles';
import CreateForm from '../../components/admin/CreateForm';
import { AdminFields, adminFields } from '../../constants/create';

const CreateScreen = () => {
  const [selectedValue, setSelectedValue] = useState<AdminFields>("Admin");

  const value = useMemo(() => {
    return selectedValue;
  }, [selectedValue]);

  return (
    <View style={baseStyles.container}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  picker: {
    // height: 50,
    // width: 200,
  },
});

export default CreateScreen;
