import React, { Dispatch, SetStateAction } from 'react';
import { View, Text } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { TodoType } from "@/types/TodoType";
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';


export const Todo: React.FC<{
  todo: TodoType,
  setTodos: Dispatch<SetStateAction<TodoType[]>>
}> = ({ setTodos, todo }) => {

  // Function that checks todo as finished and 
  // deletes it from array of todos
  const checkTodo = (todo: TodoType): void => {
    setTodos(prevTodos => (
      prevTodos.filter(prevTodo => prevTodo.id !== todo.id)
    ));
  };

  const renderRightActions = () => (
    <View className="bg-green-500 justify-center flex-1 items-end">
      <Text className="text-white font-semibold pr-3">Checked</Text>
    </View>
  );

  const renderLeftActions = () => (
    <View className="bg-red-500 justify-center flex-1 items-start">
      <Text className="text-white font-semibold pl-3">Delete</Text>
    </View>
  );
  return (
    <GestureHandlerRootView>
      <Swipeable
        renderRightActions={renderRightActions}
        renderLeftActions={renderLeftActions}
        onSwipeableOpen={() => checkTodo(todo)}
      >
      <View className="bg-secondary py-3 px-4 flex-row items-center 
        justify-between gap-10 w-[25rem] ">          
      <Text
              className={`text-lg max-w-75 
            ${todo.urgency === 'urgent' ? 'text-red-500' :
              todo.urgency === 'important' ? 'text-yellow-500' : 'text-green-600'}`}
          >
            {todo.text}
          </Text>
          <AntDesign name="checkcircle" size={25} color="green" onPress={() => checkTodo(todo)} />
        </View>
      </Swipeable>
    </GestureHandlerRootView>
  );
};
