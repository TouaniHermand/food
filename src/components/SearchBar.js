import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.background}>
      <Feather name="search" style={styles.iconStyle} color="black" />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Search"
        onChangeText={onTermChange}
        value={term}
        onEndEditing={onTermSubmit}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});

export default SearchBar;
