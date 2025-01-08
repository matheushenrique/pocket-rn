import { View, Alert } from "react-native";
import { api } from "@/services/api";
import { useEffect } from "react";

export default function Home() {

  async function fetchCategories() {
    try {
      const { data } = await api.get("/categories")
      console.log(data)
    } catch (error) {
      Alert.alert("Category", "Unable to load categories.")
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])
  

  return (
    <View style={{ flex: 1 }}>

    </View>
  )
}