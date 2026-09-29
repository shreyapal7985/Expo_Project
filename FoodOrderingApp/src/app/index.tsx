import { Text, View, StyleSheet } from "react-native";
import './globals.css';

export default function Index() {
  return (
     <View className="flex-1 items-center justify-center bg-green-100">
      <Text className="text-xl font-bold text-red-100">
        i love you mommy aap bhut sundar ho
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
