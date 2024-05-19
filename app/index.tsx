import HeaderLogo from "@/components/HeaderLogo";
import { View, Text, SafeAreaView } from "react-native"

const indexPage = () => {
  return (
    <SafeAreaView className="h-screen bg-primary">
      <HeaderLogo />
    </SafeAreaView>
  )
}


export default indexPage;