import Content from "@/components/Content";
import Header from "@/components/Header";
import { store } from "@/store";
import { useAppSelector } from "@/store/hooks";
import React from "react";
import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";
const _backgrounColor = "white";
const _spacing = 10;

const { height, width } = Dimensions.get("screen");

export default function HomeScreen() {
  const tabs = useAppSelector((state) => state.tab.tabs.active);
  const data = useAppSelector((state) => state.tab.tabs.data);

  console.log(data, "Checkout the tabs");

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.itemsContainer}>
        {data?.map((data) => (
          <Content key={data.id} data={data} />
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    width,
    height,
    backgroundColor: _backgrounColor,
    paddingHorizontal: _spacing * 2,
  },
  itemsContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
});
