import { Slot } from 'expo-router'
import { View, Text, KeyboardAvoidingView, Platform } from 'react-native'
import { ScrollView } from 'react-native-reanimated/lib/typescript/Animated'
import { SafeAreaView } from 'react-native-safe-area-context'


export default function _Layout() {
  return (
<KeyboardAvoidingView behavior={Platform.OS === 'ios'? 'padding': 'height'}>
      <ScrollView className='bg-white h-full' keyboardShouldPersistTaps='handled'>{/*keyboardShouldPersistTaps this props ensures that tapping outside of the keyboaed  will dismiss the keyboard entirely */}

      </ScrollView>
      <Slot/>
   </KeyboardAvoidingView>
  )
}