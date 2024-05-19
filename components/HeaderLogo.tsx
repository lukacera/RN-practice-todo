import React from 'react'
import { View, Text } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';

export default function HeaderLogo() {
  return (
    <View className="flex mt-10 justify-center items-center flex-row gap-3">
        <Text className="font-serif text-[2rem]">
          To-do app
        </Text>
        <View className="relative">
          <Text className="rotate-2 absolute -top-10 -right-20">
            <AntDesign name="check" size={35} color="black" />
          </Text>
          <Text className="text-blue-500 text-2xl font-bold absolute -top-10 -right-10 rotate-6">
            <AntDesign name="check" size={40} />
          </Text>
          <Text className="text-green-500 text-2xl font-bold absolute rotate-45 top-1 -right-14">
            <AntDesign name="check" size={40} />
          </Text>
        </View>
        
      </View>
  )
}
