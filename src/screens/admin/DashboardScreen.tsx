import { ScrollView, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useAuthContext } from '../../contexts/AuthContext';
import { baseStyles } from '../../styles';
import { listRouteDashboardAdmin } from '../../constants/dashboard';
import { AdminStackParamList, AdminStackScreenProps } from '../../types/adminNavigator.type';

const DashboardScreen = (
  { navigation }: AdminStackScreenProps<'Dashboard'>
) => {

  const { logout, user } = useAuthContext();
  const renderItem = ({ item }: { item: string }) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(item as any);
      }}
    >
      <Text>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={baseStyles.centerContainer}>
      <View style={[baseStyles.innerCenterContainer, { paddingVertical: 20 }]}>
        <ScrollView contentContainerStyle={styles.gridContainer}>
          {listRouteDashboardAdmin.map((item) => (
            <TouchableOpacity
              key={item.name}
              style={styles.gridItem}
              onPress={() =>
                navigation.navigate(item.name as keyof AdminStackParamList)
              }
            >
              <Image
                source={item.image}
                style={styles.image}
              />
              <Text style={baseStyles.tertiaryTitle}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    gap: 12,
  },
  gridItem: {
    alignItems: 'center',
    gap: 8,
  },
  image: {
    width: 100,
    height: 100,
  },
});
