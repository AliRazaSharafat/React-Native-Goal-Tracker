import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button, Modal } from "react-native";

const GoalIput = ({ goalHandler, visibility, onCancel }) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const cancelModalHandler = () => {
    setEnteredGoal("");
    onCancel();
  };

  return (
    <Modal visible={visibility} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          value={enteredGoal}
          onChangeText={(text) => setEnteredGoal(text)}
          style={styles.input}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={cancelModalHandler} />
          </View>
          <View style={styles.button}>
            <Button
              title="ADD"
              onPress={() => {
                goalHandler(enteredGoal);
                setEnteredGoal("");
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: "47%",
  },
});

export default GoalIput;
