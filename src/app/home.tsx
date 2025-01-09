import { View, Alert } from "react-native";
import { useEffect, useState } from "react";
import { api } from "@/services/api";
import { Categories, CategoriesProps } from "@/components/categories";

export default function Home() {
  const [categories, setCategories] = useState<CategoriesProps>([])
  const [category, setCategory] = useState("")

  async function fetchCategories() {
    try {
      const { data } = await api.get("/categories")
      setCategories(data)
      setCategory(data[0].id)
    } catch (error) {
      Alert.alert("Category", "Unable to load categories.")
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])
  

  return (
    <View style={{ flex: 1 }}>
      <Categories data={categories} onSelect={setCategory} selected={category}/>
    </View>
  )
}