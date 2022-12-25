import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, BackHandler, useColorScheme } from "react-native";
import { Button, Provider as PaperProvider, MD3DarkTheme, MD3LightTheme, useTheme, Surface } from "react-native-paper";

const Counter = () => {
	const scheme = useColorScheme();
	const theme = useTheme();
	const [count, setCount] = useState(0);
	return (
		<PaperProvider theme={scheme == "light" ? MD3LightTheme : MD3DarkTheme}>
			<Surface style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
				<StatusBar style="auto"></StatusBar>
				<Text style={{ marginBottom: 25, color: scheme == "light" ? "#000" : "#fff" }}>Don't click the button more than 15 times</Text>
				<Text style={{ marginBottom: 25, color: scheme == "light" ? "#000" : "#fff" }}>You clicked the button {count} times</Text>
				<Button
					onPress={() => {
						setCount(count + 1);
						if (count >= 14) {
							setCount(0);
							BackHandler.exitApp();
						}
					}}
					mode="contained-tonal"
				>
					Click me
				</Button>
			</Surface>
		</PaperProvider>
	);
};
export default Counter;
