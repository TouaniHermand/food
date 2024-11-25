import React from "react";
import { Button, Text, View } from "react-native";

const ColorAjust = ({ title, onIncrease, Decrease, red, green, blue }) => {
  return (
    <View>
      <Button title={`More ${title}`} onPress={onIncrease} />
      <Button title={`Less ${title}`} onPress={Decrease} />
      <Text>{red}</Text>
      <Text>{green}</Text>
      <Text>{blue}</Text>
    </View>
  );
};

export default ColorAjust;
