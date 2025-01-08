import { View, Text } from "react-native";
import { IconMapPin, IconQrcode, IconTicket } from "@tabler/icons-react-native";

import { s } from "./styles";
import { Step } from "@/components/step";

const stepsArray = [
  {
    key: 1,
    title: "Find establishment",
    description: "See nearby establishments",
    icon: IconMapPin
  },
  {
    key: 2,
    title: "Activate coupon",
    description: "Scan QR code to use benefit",
    icon: IconQrcode
  },
  {
    key: 3,
    title: "Guarantee advantages near you",
    description: "Activate coupons in different types of establishment",
    icon: IconTicket
  }
]

export function Steps() {
  return (
    <View style={s.container}>
      <Text style={s.title}> See how it works:</Text>
      {stepsArray.map((item, index) => 
        <Step
          key={item.key}
          icon={item.icon}
          title={item.title} 
          description={item.description} 
        />
      )}      
    </View>
  )
}
