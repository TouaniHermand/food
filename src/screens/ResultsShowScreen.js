import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Ajout de l'état de chargement
  const id = navigation.getParam("id");

  const getResult = async (id) => {
    try {
      const response = await yelp.get(`/${id}`);
      setResult(response.data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setIsLoading(false); // Désactiver le chargement une fois terminé
    }
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }

  if (!result) {
    return (
      <View style={styles.container}>
        <Text>No data found.</Text>
      </View>
    );
  }

  return (
    <View>
      <Text style={styles.text}>{result.name}</Text>
      <Text style={styles.text}>{result.phone}</Text>
      <Text style={styles.text}>{result.price}</Text>
      <Text style={styles.text}>{result.rating}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
  },
});

export default ResultsShowScreen;
