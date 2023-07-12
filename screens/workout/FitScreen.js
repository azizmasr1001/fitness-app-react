import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  Pressable,
  Modal,
  TouchableOpacity,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FitnessItems } from "../../Context";
import { ImageBackground } from "react-native";

const FitScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const excersise = route.params.excersises;
  const current = excersise[index];

  const {
    completed,
    setCompleted,
    minutes,
    setMinutes,
    calories,
    setCalories,
    setWorkout,
    workout,
  } = useContext(FitnessItems);

  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [countdown, setCountdown] = useState(15);
  const [timeLeft, setTimeLeft] = useState(15);

  const startWorkout = () => {
    setIsLoading(true);
    setLoadingProgress(0);

    const interval = setInterval(() => {
      setLoadingProgress((prevProgress) => prevProgress + (100 / 15));
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
      setIsLoading(false);
      setShowPopup(true);
    }, 16000);
  };

  useEffect(() => {
    if (isLoading) {
      const countdownInterval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1000);

      return () => clearInterval(countdownInterval);
    } else {
      setTimeLeft(15);
    }
  }, [isLoading]);

  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <ImageBackground
            style={styles.imageBackground}
            source={{ uri: current.image }}
            blurRadius={1}
          >
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={{ uri: current.image }}
              />

              {isLoading ? (
                <Text style={styles.countdownText}>{timeLeft}</Text>
              ) : (
                <View style={styles.countdownContainer}>
                  <Text style={styles.countdownText}>Let's Begin!</Text>
                </View>
              )}
            </View>
          </ImageBackground>
        </View>

        <Text style={styles.title}>{current.name}</Text>

        <Text style={styles.subtitle}>x{current.sets}</Text>

        {!isLoading ? (
          <Pressable onPress={startWorkout} style={styles.startButton}>
            <Text style={styles.startButtonText}>Start</Text>
          </Pressable>
        ) : (
          <View style={styles.loadingContainer}>
            <View style={styles.loadingBarContainer}>
              <View
                style={[
                  styles.loadingBar,
                  { width: `${loadingProgress}%` },
                ]}
              />
            </View>
          </View>
        )}

        <View style={styles.buttonsContainer}>
          <Pressable
            disabled={index === 0}
            onPress={() => {
              navigation.navigate("Rest");
              setIndex(index - 1);
            }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>PREV</Text>
          </Pressable>
          {index + 1 >= excersise.length ? (
            <Pressable
              onPress={() => {
                navigation.navigate("Home");
              }}
              style={styles.button}
            >
              <Text style={styles.buttonText}>SKIP</Text>
            </Pressable>
          ) : (
            <Pressable
              onPress={() => {
                navigation.navigate("Rest");
                setIndex(index + 1);
              }}
              style={styles.button}
            >
              <Text style={styles.buttonText}>SKIP</Text>
            </Pressable>
          )}
        </View>

        <Modal visible={showPopup} transparent>
          <View style={styles.popupContainer}>
            <View style={styles.popup}>
              <Text style={styles.popupText}>Do you need more time?</Text>
              <TouchableOpacity
                style={styles.popupButton}
                onPress={() => {
                  setShowPopup(false);
                }}
              >
                <Text style={styles.popupButtonText}>Need More Time</Text>
              </TouchableOpacity>
              {index + 1 >= excersise.length ? (
                <Pressable
                  onPress={() => {
                    navigation.navigate("Home");
                  }}
                  style={styles.popupButton}
                >
                  <Text style={styles.popupButtonText}>DONE</Text>
                </Pressable>
              ) : (
                <Pressable
                  onPress={() => {
                    navigation.navigate("Rest");
                    setCompleted([...completed, current.name]);
                    setWorkout(workout + 1);
                    setMinutes(minutes + 2.5);
                    setCalories(calories + 6.3);
                    setShowPopup(false);
                    setTimeout(() => {
                      setIndex(index + 1);
                    }, 2000);
                  }}
                  style={styles.popupButton}
                >
                  <Text style={styles.popupButtonText}>DONE</Text>
                </Pressable>
              )}
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </>
  );
};

export default FitScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 350,
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
  },
  imageBackground: {
    flex: 1,
    backgroundColor: "transparent",
  },
  imageContainer: {
    flex: 1,
    backgroundColor: "transparent",
    borderRadius: 20,
  },
  image: {
    width: "100%",
    height: 350,
    resizeMode: "contain",
    borderRadius: 20,
  },
  countdownContainer: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  countdownText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  title: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 30,
    fontSize: 30,
    fontWeight: "bold",
  },
  subtitle: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 30,
    fontSize: 38,
    fontWeight: "bold",
  },
  startButton: {
    backgroundColor: "blue",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 30,
    borderRadius: 20,
    padding: 10,
    width: 150,
  },
  startButtonText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },
  loadingContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingBarContainer: {
    marginTop: 30,
    backgroundColor: "#f2f2f2",
    borderRadius: 20,
    height: 20,
    width: "80%",
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  loadingBar: {
    backgroundColor: "blue",
    height: "100%",
    borderRadius: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 50,
  },
  button: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 20,
    width: 100,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  popupContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  popup: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
  },
  popupText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  popupButton: {
    backgroundColor: "blue",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  popupButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
