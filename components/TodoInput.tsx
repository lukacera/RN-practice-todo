import React, {Dispatch, SetStateAction, useState} from 'react'
import { View, Text, TextInput, TouchableWithoutFeedback } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import {TodoType} from "@/types/TodoType"
import { v4 as uuidv4 } from 'uuid';

export const TodoInput:React.FC<{
  setTodos: Dispatch<SetStateAction<TodoType[]>>
}> = ({setTodos}) => {

    const [text, setText] = useState<string>("");

    const [urgency, setUrgency] = useState<"urgent" | "important" | "non-urgent" >("urgent")
    
    // Function to add todos to list of todos, only if there
    // are more than 3 or more chars in text
    const addTodo = (): void => {
      if(text.length > 2 ){
        setTodos(prevTodos => (
          [...prevTodos, {
            text: text,
            urgency: urgency,
            id: uuidv4(),
            date: new Date()
          }]
        ))
        setText("")
      }
    }
    
    return (
    <View className="flex items-center justify-center mt-10 flex-col gap-5 relative">
      {/* Circles */}
      <View className="flex flex-row gap-5 justify-center mr-5">
        {/* Urgent */}
        <TouchableWithoutFeedback onPress={() => setUrgency("urgent")}>
        <View className="flex items-center gap-2">
          <Text className="text-red-500 font-semibold">Urgent</Text>
          <View className={`w-8 aspect-square rounded-full bg-red-500
          ${urgency === "urgent" && "border-2 border-black"}`}></View>
        </View>
        </TouchableWithoutFeedback>
        {/* Important */}
        <TouchableWithoutFeedback onPress={() => setUrgency("important")}>
        <View className="flex items-center gap-2">
          <Text className="text-yellow-500 font-semibold">Important</Text>
          <View className={`w-8 aspect-square rounded-full bg-yellow-500
          ${urgency === "important" && "border-2 border-black"}`}></View>
        </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => setUrgency("non-urgent")}>
          {/* Non-Urgent */}
        <View className="flex items-center gap-2">
          <Text className="text-green-500 font-semibold">Non-Urgent</Text>
          <View className={`w-8 aspect-square rounded-full bg-green-500
          ${urgency === "non-urgent" && "border-2 border-black"}`}></View>
        </View>
        </TouchableWithoutFeedback>
      </View>
      <View className="flex flex-row items-center gap-5">
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder='Running at 7am'
          className={`bg-white w-[17rem] px-5 
          py-2 rounded-lg shadow-lg text-[1.25rem]
          ${urgency === "urgent" ? "text-red-500" : 
            urgency === "non-urgent" ? "text-green-500" :
            "text-yellow-500"
          }`}
        />
        <Text onPress={() => addTodo()}>
          <AntDesign name="pluscircle" size={28} color="#4D869C" />
        </Text>
      </View>
  </View>

  )
}
