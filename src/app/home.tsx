import { View, Alert } from "react-native";
import { useEffect, useState } from "react";
import { api } from "@/services/api";
import { Categories, CategoriesProps } from "@/components/categories";
import { PlaceProps } from "@/components/place";
import { Places } from "@/components/places";

type MarketsProps = PlaceProps & {
  
}

export default function Home() {
  const [categories, setCategories] = useState<CategoriesProps>([])
  const [category, setCategory] = useState("")
  const [markets, setMarkets] = useState<MarketsProps[]>([])

  async function fetchCategories() {
    try {
      const { data } = await api.get("/categories")
      setCategories(data)
      setCategory(data[0].id)
    } catch (error) {
      Alert.alert("Category", "Unable to load categories.")
    }
  }

  async function fetchMarkets() {
    try {
      if (!category) {
        return
      }

      const { data } = await api.get("/markets/category/" + category)
      setMarkets(data);
    } catch (error) {
      Alert.alert("Markets", "Unable to load the markets.")
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  useEffect(() => {
    fetchMarkets()
  }, [category])
  
  

  return (
    <View style={{ flex: 1 }}>
      <Categories 
        data={categories} 
        onSelect={setCategory} 
        selected={category}
      />
      <Places 
        data={markets}
      />
    </View>
  )
}