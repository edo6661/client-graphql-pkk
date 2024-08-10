import { FlatList, StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { getProyeks } from '../../api/query/proyek.query';
import { Proyek, TypeProyek } from '../../__generated__/graphql';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ProyeksScreenProps } from '../../types/navigator.type';
import { Picker } from '@react-native-picker/picker';
import { COLORS } from '../../constants/colors';

const Proyeks = ({ navigation }: ProyeksScreenProps) => {
  const [typeProyek, setTypeProyek] = useState<TypeProyek>(TypeProyek.Kkn);
  const { data, loading } = useQuery<{ proyeks: Proyek[] }>(getProyeks);


  return (
    <View style={styles.container}>
      {loading && (
        <ActivityIndicator
          size='large'
          color={COLORS.primaryBlue}
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 1,
          }}
        />

      )}
      <Picker
        selectedValue={typeProyek}
        onValueChange={(itemValue) => setTypeProyek(itemValue)}
        style={styles.proyekItem}
      >
        <Picker.Item label="KKN" value={TypeProyek.Kkn} />
        <Picker.Item label="KKP" value={TypeProyek.Kkp} />
      </Picker>
      <FlatList
        data={data?.proyeks.filter((proyek) => proyek.type === typeProyek)}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.proyekItem,
            ]}
            onPress={() => navigation?.navigate('UserDetailsProyek', { id: item.id! })}
          >
            <Image source={{
              uri: item.photo?.includes(
                'http' || 'https'
              ) ? item.photo : "https://i.pinimg.com/236x/42/92/f8/4292f8591dab26fcaa4b3ab213895e6f.jpg"
            }} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
            <View>
              <Text
                style={{
                  fontWeight: 500,
                  fontSize: 14,
                }}
              >
                {item.lokasi}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id!}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  proyekItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
});

export default Proyeks;
