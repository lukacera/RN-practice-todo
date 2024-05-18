import { View, Text, SafeAreaView } from "react-native"

const indexPage = () => {
  return (
    <SafeAreaView className="h-screen bg-primary">
      <View className="grid place-items-center w-full">
        <Text>
          Some text
        </Text>
      </View>
     
    </SafeAreaView>
  )
}


export default indexPage;