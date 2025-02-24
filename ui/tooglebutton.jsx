import React, { useEffect } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withSpring
} from "react-native-reanimated";

export function ToggleMenuButton({ onPress, isExpanded }) {
	const rotation = useSharedValue(0);

	useEffect(() => {
		rotation.value = withSpring(isExpanded ? 360 : 0, {
			damping: 12,
			stiffness: 100,
			mass: 0.6,
			velocity: 20
		});
	}, [isExpanded]);

	const animatedStyle = useAnimatedStyle(() => ({
		transform: [{ rotate: `${rotation.value}deg` }]
	}));

	return (
		<TouchableOpacity style={styles.mainButton} onPress={onPress}>
			<Animated.View style={animatedStyle}>
				<Ionicons name={isExpanded ? "close" : "menu"} size={24} color="#fff" />
			</Animated.View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	mainButton: {
		width: 65,
		height: 65,
		borderRadius: 32.5,
		backgroundColor: "#007AFF",
		justifyContent: "center",
		alignItems: "center",
		position: "absolute",
		bottom: 0,
		right: 0,
		zIndex: 10
	}
});
