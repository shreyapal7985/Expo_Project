import { Text, View, StyleSheet, FlatList, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { offers } from "../../constant";


export default function Index() {
  return (
    <SafeAreaView>
      <FlatList
      data={offers}
      renderItem={({item,index})=>{
        return(
          <View>
            <Pressable className="offer-card" style={{backgroundColor:item.color}}>
            <Text>{item.title}</Text>
            </Pressable>
          </View>
        )
      }}/>
    </SafeAreaView>
  );
}
