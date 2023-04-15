import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
interface ICourseGoal {
  text: string;
  id: string;
}
export default function App() {
  const [courseGoals, setCourseGoals] = useState<any[]>([]);

  function addGoalHandler(enteredGoalText: string) {
    const randomId = Math.random();
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: randomId },
    ]);
  }

  function deleteGoalHandler(id: string) {
    setCourseGoals((currentCourseGoals): ICourseGoal[] => {
      return currentCourseGoals.filter((goal: ICourseGoal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={({ item }: { item: ICourseGoal }) => {
            return (
              <GoalItem
                text={item.text}
                id={item.id}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
  },
});
