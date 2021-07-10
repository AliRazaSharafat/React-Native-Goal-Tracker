import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalIput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const goalHandler = (newGoal) => {
    setCourseGoals((currentGoal) => [
      ...currentGoal,
      { id: Math.random().toString(), value: newGoal },
    ]);
    setModalOpen(false);
  };

  const removeGoalHandler = (id) => {
    setCourseGoals((currentGoal) => {
      return currentGoal.filter((goal) => goal.id !== id);
    });
  };

  const cancelGoalHandler = () => {
    setModalOpen(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setModalOpen(true)} />
      <GoalInput
        goalHandler={goalHandler}
        visibility={modalOpen}
        onCancel={cancelGoalHandler}
      />
      <View>
        <FlatList
          data={courseGoals}
          renderItem={(listItem, ind) => (
            <GoalItem
              onDelete={removeGoalHandler}
              id={listItem.item.id}
              title={listItem.item.value}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
