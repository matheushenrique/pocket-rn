import { Image, Text, View } from "react-native";

import { s } from "./styles";

export function Welcome() {
  return (
    <View>
      <Image 
        source={require("@/assets/logo.png")} 
        style={s.logo}
      />
      <Text style={s.title}>
        Welcome to Nearby
      </Text>
      <Text style={s.subtitle}>
        Get coupons to use in your favorite places
      </Text>
    </View>
  )
}