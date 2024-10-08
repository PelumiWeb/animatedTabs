import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { icons } from "lucide-react-native";

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
  FadeInRight,
  FadeOutRight,
} from "react-native-reanimated";
import { useAppSelector } from "@/store/hooks";
import { useDispatch } from "react-redux";
import { setActive } from "@/store/app/tabs";
import { MotiView } from "moti";

type iconNames = keyof typeof icons;

type Props = {
  text: string;
  name?: string;
  iconName?: iconNames;
  id: number;
  backgroundColor?: string;
};

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const _iconButtonWidth = "100%";
const _iconButtonHeight = 24;
const _spacing = 5;
const _buttonSize = 20;

const IconNames = [
  { icon: "lifeBuoy", label: "Buoy" },
  { icon: "Fish", label: "Fresh fish" },
  { icon: "Sailboot", label: "Sail" },
  { icon: "Ship", label: "Ship it" },
  { icon: "ShipWheel", label: "Manage it" },
];

type TabItem = {
  icon: iconNames;
  label: string;
};

type TabsProps = {
  data: TabItem[];
};

type IconProps = {
  name: iconNames;
  color: string;
};

// function Icon({ name }: IconProps) {
//   const IconConponent = icons[name];
//   return <IconConponent />;
// }
const Icon = ({ name, color,  }: IconProps) => {
    const IconConponent = icons[name];
    return <IconConponent  size={16} color={color}/>
}

const Tab = ({ text, name, iconName, id, backgroundColor }: Props) => {
  const activeData = useAppSelector((state) => state.tab.tabs.active);
  const dispatch = useDispatch();

  console.log(iconName);

  return (
    <MotiView
      animate={{}}
      layout={LinearTransition.springify().damping(80).stiffness(200)}>
      <TouchableOpacity
        onPress={() => dispatch(setActive(name))}
        style={[
          styles.tabsContainer,
          {
            backgroundColor:
              activeData === name ? backgroundColor : "whitesmoke",
          },
        ]}>
        {/* Icon */}

        <Icon
          name={iconName}
          size={16}
          color={activeData === name ? "whitesmoke" : "black"}
        />

        {/* <AntDesign
          name="setting"
          size={_buttonSize}
          color={activeData === name ? "white" : "black"}
        /> */}

        {activeData === name && (
          <Animated.Text
            entering={FadeInRight.springify().damping(80).stiffness(200)}
            exiting={FadeOutRight.springify().damping(80).stiffness(200)}
            style={[
              styles.text,
              { color: activeData === name ? "white" : "whitesmoke" },
            ]}
            adjustsFontSizeToFit>
            {name}
          </Animated.Text>
        )}
      </TouchableOpacity>
    </MotiView>
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
    overflow: "hidden",

    borderRadius: _spacing,
  },
  text: {
    marginLeft: _spacing,
  },
});
