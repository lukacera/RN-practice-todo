import HeaderLogo from "@/components/HeaderLogo";
import TodoInput from "@/components/TodoInput";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import "react-native-get-random-values"
import { v4 as uuidv4 } from 'uuid';
import { useFonts, Lato_900Black, Lato_400Regular } from '@expo-google-fonts/lato'
import AppLoading from "expo-app-loading";

// Functional component that takes todo as argument and returns it's view
const Todo = (todo:{ text: string; urgency: "urgent" | "important" | "non-urgent" }) => {
  return (
    <View className="bg-slate-500 px-5 py-3">
    <Text className={`${todo.urgency === "urgent" ? "text-red-500" :
      todo.urgency === "important" ? "text-blue-500" : "text-green-500"
    }`}>
      {todo.text}
    </Text>
  </View>
  )
  
}

const IndexPage = () => {

  const [fontsLoaded] = useFonts({
    Lato_900Black,
    Lato_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const exampleTodos: { text: string; urgency: "urgent" | "important" | "non-urgent" }[] = [
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
  ];
  return (
    <SafeAreaView className="h-screen bg-primary">
      <HeaderLogo />
      {/* Main part, all of todos and input for it */}
      <TodoInput />

      {/* Todos list */}
      <View className="flex items-center justify-center mt-10 gap-5">
        <Text className="text-4xl" style={{fontFamily: "Lato_900Black"}}>
          My todos
        </Text>
        <ScrollView>
          {exampleTodos.map(todo => (
            <Todo key={uuidv4()} text={todo.text} urgency={todo.urgency}></Todo>
          ))}
        </ScrollView>
      </View>

    </SafeAreaView>
  );
};

export default IndexPage;
