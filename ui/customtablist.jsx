import * as React from "react";
import { View, StyleSheet } from "react-native";
import { TabTrigger } from "expo-router/ui";
import { CustomTabButton } from "./customtabs";
import { ToggleMenuButton } from "./tooglebutton";

export function CustomTabList() {
  const [isExpanded, setIsExpanded] = React.useState(false);

  function toggleExpandHandler() {
    setIsExpanded(!isExpanded);
  }

  return (
    <View style={styles.tabList}>
      <TabTrigger name="index" asChild>
        <CustomTabButton icon="home" isExpanded={isExpanded} index={2}>
          Home
        </CustomTabButton>
      </TabTrigger>
      <TabTrigger name="profile" asChild>
        <CustomTabButton icon="person" isExpanded={isExpanded} index={1}>
          Profile
        </CustomTabButton>
      </TabTrigger>
      <TabTrigger name="settings" asChild>
        <CustomTabButton icon="settings" isExpanded={isExpanded} index={0}>
          Settings
        </CustomTabButton>
      </TabTrigger>
      <ToggleMenuButton onPress={toggleExpandHandler} isExpanded={isExpanded} />
    </View>
  );
}

const styles = StyleSheet.create({
  tabList: {
    bottom: 32,
    right: 32,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
});
