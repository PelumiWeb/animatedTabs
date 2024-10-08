import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Animated, {
  FadeInRight,
  FadeOutRight,
  LayoutAnimationConfig,
} from "react-native-reanimated";
import { useAppSelector } from "@/store/hooks";

type Props = {};
const _spacing = 10;
export type dataProps = {
  name: string;
  iconName: string;
  id: number;
  backgroundColor: string;
};

const Content = ({ data }: { data: dataProps }) => {
  const activeTabs = useAppSelector((state) => state.tab.tabs.active);

  return (
    activeTabs === data.name && (
      <LayoutAnimationConfig skipEntering>
        <Animated.View
          style={[styles.container, { backgroundColor: data.backgroundColor }]}
          entering={FadeInRight.springify().damping(80).stiffness(200)}
          exiting={FadeOutRight.springify()
            .damping(80)
            .stiffness(200)}></Animated.View>
      </LayoutAnimationConfig>
    )
  );
};

export default Content;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    borderRadius: _spacing,
  },
});
