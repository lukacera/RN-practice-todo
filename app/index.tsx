import HeaderLogo from "@/components/HeaderLogo";
import TodoInput from "@/components/TodoInput";
import { View, Text, SafeAreaView, TextInput } from "react-native";

const IndexPage = () => {

  return (
    <SafeAreaView className="h-screen bg-primary">
      <HeaderLogo />
      {/* Main part, all of todos and input for it */}
      <TodoInput />
      {/* Todos list */}

      <View className="flex items-center justify-center mt-10">
        <Text>
          My todos
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default IndexPage;
