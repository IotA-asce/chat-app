import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const ChatCard = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: "https://source.unsplash.com/random/" }}
      />
      <View style={styles.infoContainer}>
        <Text style={{fontSize: 20}}>Subhro</Text>
        <Text>wadda faq nigga</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    // backgroundColor: "#000",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "center",
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft: 30,
    // backgroundColor: "red",
  },
  infoContainer: {
    marginLeft: 30,
    width: "70%",
    height: "100%",
    justifyContent: "center",
    alignContent: "center",
  },
});

export default ChatCard;
