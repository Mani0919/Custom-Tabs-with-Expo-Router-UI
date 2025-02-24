import * as React from "react";
import { StyleSheet } from "react-native";
import { Tabs, TabList, TabTrigger, TabSlot } from "expo-router/ui";
import { CustomTabList } from "../../ui/customtablist";

export default function Layout() {
	return (
		<Tabs>
			<TabSlot />
			<CustomTabList />
			<TabList style={styles.tabList}>
				<TabTrigger name="index" href="/" />
				<TabTrigger name="profile" href="/profile" />
				<TabTrigger name="settings" href="/settings" />
			</TabList>
		</Tabs>
	);
}

const styles = StyleSheet.create({
	tabList: {
		display: "none"
	}
});