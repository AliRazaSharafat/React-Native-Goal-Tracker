import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = ({ title, onDelete, id }) => {
  return (
    <TouchableOpacity onPress={() => onDelete(id)} activeOpacity={0.8}>
      <View style={styles.listElement}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listElement: {
    backgroundColor: "#ccc",
    borderColor: "black",
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
  },
});

export default GoalItem;
