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
import {SortingDropdown} from "@/components/SortingDropdown";

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

  const [todos, setTodos] = useState<TodoType[]>([]);
  
  // State to keep track of sorting method
  const [sortMethod, setSortMethod] = useState<"Most Urgent" | "Newest">("Newest")

  const urgencyMap: {[key: string]: number} = {
    'non-urgent': 1,
    'important': 2,
    'urgent': 3
  };

  const sortedTodos = [...todos].sort((a, b) => {
    if (sortMethod === "Newest") {
      return b.date.getTime() - a.date.getTime();
    } else if (sortMethod === "Most Urgent") {
      return urgencyMap[b.urgency] - urgencyMap[a.urgency];
    }
    return 0;
  });


  return (
    <SafeAreaView className="bg-primary flex-1 h-auto">
      <HeaderLogo />
      {/* Main part, all of todos and input for it */}
      <TodoInput setTodos={setTodos}/>

      {/* Todos list */}
      <View className="flex flex-1 items-center justify-center mt-10 gap-5">
        <View className="relative">
          <Text className="text-4xl" style={{fontFamily: "Lato_900Black"}}>
            My todos
          </Text>
          <SortingDropdown setSortMethod={setSortMethod}/>
        </View>
        {todos.length === 0 && 
          <View className="mt-20">
            <Text className="font-bold text-[1.5rem]">
              You have completed all tasks!
            </Text>
          </View>
        }
        <ScrollView  showsVerticalScrollIndicator={false} className="flex -z-10 mb-5">
          {sortedTodos.map(todo => (
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
