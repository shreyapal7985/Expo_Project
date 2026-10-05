import { Text, View, StyleSheet, FlatList, Pressable, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images, offers } from "../../constant";
import { Fragment } from "react";
import cn from 'clsx';//


export default function Index() {
  return (
    <SafeAreaView>
      <FlatList
      data={offers}
      renderItem={({item,index})=>{
        const isEven = index%2 === 0;
        return(
          <View>
            <Pressable className={cn("offer-card", isEven? 'flex-row-reverse':'flex-row')} style={{backgroundColor:item.color}}>
            {({pressed})=>(
              <Fragment>
                <View className={"h-full w-1/2"}>
                <Image source={item.image} className={"size-full"} resizeMode={"contain"}/>
                </View>

                <View className={"offer-card_info"}>
                  <Text className={"h1-bold text-white leading-tight"}>{item.title}</Text>
                  <Image source={images.arrowRight}/>
                </View>
                </Fragment>
  )}
            </Pressable>
          </View>
        )
      }}/>
    </SafeAreaView>
  );
}
