import React, { useContext } from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, Pressable, ScrollView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { FitnessItems } from "../../Context";
import { AntDesign } from '@expo/vector-icons';

const WorkOutScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { completed, setCompleted } = useContext(FitnessItems);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: route.params.image }}
      />

      <Ionicons
        onPress={() => navigation.goBack()}
        style={styles.backButton}
        name="arrow-back-outline"
        size={28}
        color="white"
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
      >
        {route.params.excersises.map((item, index) => (
          <Pressable
            style={styles.itemContainer}
            key={index}
          >
            <Image style={styles.itemImage} source={{ uri: item.image }} />

            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>
                {item.name}
              </Text>

              <Text style={styles.itemSets}>
                x{item.sets}
              </Text>
            </View>

            {completed.includes(item.name) ? (
              <AntDesign
                style={styles.checkIcon}
                name="checkcircle"
                size={24}
                color="green"
              />
            ) : null}
          </Pressable>
        ))}
      </ScrollView>

      <Pressable
        onPress={() =>  {
          navigation.navigate("Fit",{
            excersises:route.params.excersises,
        })
        setCompleted([]);
        }}
        style={styles.startButton}
        >
        <Text style={styles.startButtonText}>
          START
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    opacity: 0.9,
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 1,
  },
  scrollView: {
    backgroundColor: "white",
    marginTop: 50,
  },
  itemContainer: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  itemImage: {
    width: 90,
    height: 90,
  },
  itemDetails: {
    marginLeft: 10,
  },
  itemName: {
    fontSize: 17,
    fontWeight: "bold",
    width: 170,
  },
  itemSets: {
    marginTop: 4,
    fontSize: 18,
    color: "gray",
  },
  checkIcon: {
    marginLeft: 40,
  },
  startButton: {
    backgroundColor: "rgba(0, 0, 255, 0.6)",
    padding: 10,
    marginLeft: "auto",
    marginRight: "auto",
    marginVertical: 20,
    width: 120,
    borderRadius: 6,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  startButtonText: {
    textAlign: "center",
    color: "white",
    fontSize: 15,
    fontWeight: "600",
  },
});

export default WorkOutScreen;
