import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import ResultDetail from "./ResultDetail";

const ResultsList = ({ title, results }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(result) => result.id}
        data={results}
        renderItem={({ item }) => <ResultDetail result={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 15,
  },
  container: {
    marginBottom: 30,
  },
});

export default ResultsList;
