import React, { useState } from 'react';
import {
  Alert,
  FlatList,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { DATA, ItemData } from '../constants/data';
import EmptyDataList from './EmptyDataList';
import FooterDataList from './FooterDataList';
import HeaderDataList from './HeaderDataList';
import SeparatorDataList from './SeparatorDataList';

const Item = ({ id, title, onPress, backgroundColor, textColor }: ItemProps) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, { backgroundColor }]}>
    <Text style={[styles.title, { color: textColor }]}>{title}</Text>
  </TouchableOpacity>
);

const FlatListComp = () => {
  const [selectedId, setSelectedId] = useState<string>();

  const [refreshing, setRefreshing] = useState(false); // State untuk status penyegaran

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      // ! atau bisa juga dengan cara fetch data lagi, ini pake set time out agar bisa nge delay, bagusnya ga pake set time out, tapi pake fetch data lagi dan kasih loading
      DATA.unshift({
        id: String(DATA.length + 1),
        title: `Item ${DATA.length + 1}`,
      });
      setRefreshing(false);
    }, 2000);
  };




  return (
    <SafeAreaView style={styles.container}
    // <SafeAreaView style={styles.container}
    // showsVerticalScrollIndicator={false}
    >
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item
            {...item}
            onPress={() => setSelectedId(item.id)}
            backgroundColor={item.id === selectedId ? '#6e3b6e' : '#f9c2ff'}
            textColor={item.id === selectedId ? 'white' : 'black'}
          />
        )}
        keyExtractor={item => item.id}
        ListEmptyComponent={<EmptyDataList title='Data' />}
        ListFooterComponent={<FooterDataList />}
        ListFooterComponentStyle={styles.center}
        ListHeaderComponent={<HeaderDataList />}
        ListHeaderComponentStyle={styles.center}
        ItemSeparatorComponent={
          () => <SeparatorDataList />
        }
        // ! jadi 2 kolom - 2 kolom
        numColumns={2}
        // ! kalo mau pake ini, harus pake numColumns
        columnWrapperStyle={{
          backgroundColor: "red",
          justifyContent: "space-around",
        }}


        // ! kalo nge refresh (nge scroll ke bawah saat indeks pertama kan bakal ada loading), nah loading nya diatur offset nya, jadi dia bakal nge render loading nya di offset 200 
        // progressViewOffset={200}
        // ! kalo nge scroll kek ke bawah saat di indeks pertama, dia bakal nge render ulang data, nge render ulang component, dan kalo nge refresh bakal sesuai dengan apa yang di function onRefresh
        // refreshing={refreshing}
        // onRefresh={onRefresh}
        // ! Reverses the direction of scroll. Uses scale transforms of -1.
        // inverted
        // ! bikin jadi hori
        // horizontal
        // ! bikin jadi page pelajarin lagi
        // pagingEnabled

        // ! extra data itu nge bantu nge render kalo ada perubahan data, kalo ga di tambahin, dia tetep nge render tapi kalo ada extraData nambah membantu lagi, kalo ada perubahan dalam selectedId data bisa berubah
        // ! karena flat list itu pure component, dia cuman nge track [shallow] state data, gabisa data berubah kalo selectedId berubah kecuali pake useEffect, bagusnya pake extraData ngasih tau kalo ini harus / dipaksa untuk dire render

        extraData={selectedId}
      // ! pelajarin lagi
      // initialNumToRender={}
      // initialScrollIndex={}
      />
    </SafeAreaView>
  );
};

interface ItemProps extends ItemData {
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 24,
  },
  center: {
    backgroundColor: "red",
    alignItems: "center",
  },
});

export default FlatListComp;
