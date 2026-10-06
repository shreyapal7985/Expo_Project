import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router';


const SignIn = () => {
  return (
    <View>
      <Text>sign-in</Text>
      <Button title='Sign-Up' onPress={()=>router.push("/auth/sign-up")}/>{/*router.push me absolute path dena hota h isiliye file same folder me hone pr bhi pure path mention krna pd rha h nhi to expo router sign-up ko src/app folder ke andr dekhega   */}
    </View>
  )
}

export default SignIn;