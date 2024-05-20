import React, { Dispatch, SetStateAction } from 'react'
import { View, Text } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import {TodoType} from "@/types/TodoType"

export const Todo:React.FC<{
  todo:TodoType, setTodos: Dispatch<SetStateAction<TodoType[]>> 
}> = ({setTodos, todo}) => {
  
  // Function that checkes todo as finished and 
  // deletes it from array of todos
  const checkTodo = (todo: TodoType): void => {
    setTodos(prevTodos => (
      prevTodos.filter(prevTodo => prevTodo.id !== todo.id)
    ))
  }

  return (
    <View className="bg-secondary py-5 px-4 flex-row items-center 
    justify-between gap-10 w-[20rem] ">
      <Text
        className={`
          text-lg max-w-[13rem]
          ${todo.urgency === 'urgent' ? 'text-red-500' :
          todo.urgency === 'important' ? 'text-yellow-500' : 'text-green-500'
          }
        `}
      >
        {todo.text}
      </Text>
      <Text onPress={() => checkTodo(todo)}
      className="justify-center items-center">
        <AntDesign name="checkcircle" size={25} 
        color="green" />
      </Text>
    </View>
  );
};

