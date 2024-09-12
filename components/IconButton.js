import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text } from "react-native";

export default function IconButton({ icon, label, onPress }) {
  return (
    <Pressable style={style.icon} onPress={onPress}>
      <MaterialIcons name={icon} size={24} color="#fff" />
      <Text style={style.iconButtonLabel}>{label}</Text>
    </Pressable>
  );
}

const style = StyleSheet.create({
  iconButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconButtonLabel: {
    color: "#fff",
    marginTop: 12,
  },
});
