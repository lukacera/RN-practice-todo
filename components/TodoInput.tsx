import React, {Dispatch, SetStateAction, useState} from 'react'
import { View, Text, TextInput } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import {TodoType} from "@/types/TodoType"


export const TodoInput:React.FC<{
  setTodos: Dispatch<SetStateAction<TodoType[]>>
}> = ({setTodos}) => {

    const [text, setText] = useState<string>("");

    // Function to add todos to list of todos
    const addTodo = (todo: TodoType): void => {
      if(todo.text.length > 2 ){
        setTodos(prevTodos => (
          [...prevTodos, todo]
        ))
        setText("")
      }
      
    }
    
    return (
    <View className="flex items-center justify-center mt-10 flex-col gap-5 relative">
    {/* Circles */}
    <View className="flex flex-row gap-5 justify-center mr-5">
      {/* Urgent */}
      <View className="flex items-center gap-2">
        <Text className="text-red-500 font-semibold">Urgent</Text>
        <View className="w-8 aspect-square rounded-full bg-red-500"></View>
      </View>
      {/* Important */}
      <View className="flex items-center gap-2">
        <Text className="text-yellow-500 font-semibold">Important</Text>
        <View className="w-8 aspect-square rounded-full bg-yellow-500"></View>
      </View>
      {/* Non-Urgent */}
      <View className="flex items-center gap-2">
        <Text className="text-green-500 font-semibold">Non-Urgent</Text>
        <View className="w-8 aspect-square rounded-full bg-green-500"></View>
      </View>
    </View>
    <View className="flex flex-row items-center gap-5">
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder='Running at 7am'
        className="bg-white min-w-[17rem] px-5 py-2 rounded-lg shadow-lg"
      />
      <Text onPress={() => addTodo({
        text: text,
        urgency: 'urgent'
      })}>
        <AntDesign name="pluscircle" size={28} color="#4D869C" />
      </Text>
    </View>
  </View>

  )
}
