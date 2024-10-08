import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
import Tab from "./Tab";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppSelector } from "@/store/hooks";
import { useDispatch } from "react-redux";
import { setActive } from "@/store/app/tabs";
import { icons } from "lucide-react-native";

type iconNames = keyof typeof icons;


export type dataProps = {
  name: string;
  iconName: iconNames;
  id: number;
  backgroundColor: string;
};

type Props = {
  data?: dataProps[];
};

const { width, height } = Dimensions.get("screen");
const _spacing = 10;

const Header = () => {
  const [activeTabs, setActiveTabs] = React.useState<any>(1);
  const data = useAppSelector((state) => state.tab.tabs.data);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={{ marginRight: _spacing / 2 }}>
        <Feather name="home" size={24} color="black" />
      </View>

      <View style={styles.tabs}>
        {data.map((data: dataProps) => (
          <Tab
            text="settings"
            key={data.id}
            name={data.name}
            iconName={data.iconName}
            id={data.id}
            backgroundColor={data.backgroundColor}
          />
        ))}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: height * 0.1,

    // padding: _spacing,
    backgroundColor: "white",
  },
  tabs: {
    flexDirection: "row",
    alignItems: "center",
  },
});
