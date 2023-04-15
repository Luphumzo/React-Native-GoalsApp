import { View, Text, StyleSheet, Pressable } from "react-native";

function GoalItem(props: any) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "white" }}
        style={({ pressed }) => pressed && styles.pressedItem}
        onPress={props.onDeleteItem.bind(null, props.id)}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "purple",
  },
  goalText: {
    color: "white",
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
});

export default GoalItem;
