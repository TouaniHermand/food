import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const ImageDetail = ({ title, imageSource, score }) => {
  console.log(title);

  return (
    <View style={styles.container}>
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>Image score - {score} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
});

export default ImageDetail;
