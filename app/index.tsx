import HeaderLogo from "@/components/HeaderLogo";
import { TodoInput } from "@/components/TodoInput";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import "react-native-get-random-values";
import { v4 as uuidv4 } from 'uuid';
import { useFonts, Lato_900Black, Lato_400Regular } from '@expo-google-fonts/lato';
import { Todo } from "@/components/Todo";
import { TodoType } from "@/types/TodoType";
import { useState, useEffect } from "react";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const IndexPage = () => {
  const [fontsLoaded] = useFonts({
    Lato_900Black,
    Lato_400Regular,
  });

  useEffect(() => {
    const hideSplash = async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    };
    hideSplash();
  }, [fontsLoaded]);

  const [todos, setTodos] = useState<TodoType[]>([
    {
      text: "Running tomorrow at 7am",
      urgency: "important",
    },
    {
      text: "Finish the project report by 5pm",
      urgency: "urgent",
    },
    {
      text: "Buy groceries for the week",
      urgency: "important",
    },
    {
      text: "Call mom to check in",
      urgency: "non-urgent",
    },
    {
      text: "Schedule dentist appointment",
      urgency: "important",
    },
    {
      text: "Clean the garage this weekend",
      urgency: "non-urgent",
    },
  ]);
  
  return (
    <SafeAreaView className="h-screen bg-primary">
      <HeaderLogo />
      {/* Main part, all of todos and input for it */}
      <TodoInput setTodos={setTodos}/>

      {/* Todos list */}
      <View className="flex items-center justify-center mt-10 gap-5">
        <Text className="text-4xl" style={{fontFamily: "Lato_900Black"}}>
          My todos
        </Text>
        <ScrollView className="flex">
          {todos.map(todo => (
            <Todo key={uuidv4()} 
            setTodos={setTodos} todo={todo}
            />
          ))}
        </ScrollView>
      </View>

    </SafeAreaView>
  );
};

export default IndexPage;
