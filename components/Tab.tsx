import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from "react-native";

import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { dataProps } from "./Header";
import Animated, {
  AnimatedProps,
  FadeIn,
  FadeOut,
  FadeOutLeft,
  Easing,
  LinearTransition,
} from "react-native-reanimated";
import { useAppSelector } from "@/store/hooks";
import { useDispatch } from "react-redux";
import { setActive } from "@/store/app/tabs";

type Props = {
  text: string;

  name?: string;
  iconName?: string;
  id: number;
};

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const _iconButtonWidth = "100%";
const _iconButtonHeight = 24;
const _spacing = 5;
const _buttonSize = 20;

const Tab = ({
  text,
  name,
  iconName,
  id,
}: Props) => {
  const activeData = useAppSelector((state) => state.tab.tabs.active);
  const dispatch = useDispatch()

  return (
    <AnimatedTouchable
      layout={LinearTransition.springify()}
      onPress={() => dispatch(setActive(name))}
      style={[
        styles.tabsContainer,
        { backgroundColor: activeData === name ? "black" : "whitesmoke" },
      ]}>
      {/* Icon */}

      <AntDesign
        name="setting"
        size={_buttonSize}
        color={activeData === name ? "white" : "black"}
      />

      {activeData === name && (
        <Text
          style={[
            styles.text,
            { color: activeData === name ? "white" : "whitesmoke" },
          ]}
          adjustsFontSizeToFit>
          {name}
        </Text>
      )}
    </AnimatedTouchable>
  );
};

export default Tab;

const styles = StyleSheet.create({
  tabsContainer: {
    backgroundColor: "whitesmoke",
    flexDirection: "row",
    alignItems: "center",
    padding: _spacing * 1.5,
    marginHorizontal: _spacing,

    borderRadius: _spacing,
  },
  text: {
    marginLeft: _spacing,
  },
});
