import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react";
import Timer from "./components/Timer";
import Header from "./components/Header";
import SessionInfo from "./components/SessionInfo";

const colores = ["#cc6666", "#66cc99", "#66cccc", "#a569bd"];

export default function App() {
  const [time, setTime] = useState(25 * 60);
  const [previusTime, setPreviusTime] = useState(time);
  const [currentTime, setCurrentTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((previousTime) => previousTime - 1);
      }, 1000);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isActive, time]);

  function toggleTimer() {
    if (time > 0) {
      setIsActive((previousState) => !previousState);
    }
  }

  function restart() {
    setTime(previusTime);
  }

  return (
    <View style={[styles.container, { backgroundColor: colores[currentTime] }]}>
      <Text style={styles.titulo}>Pomodoro</Text>
      <Header
        setTime={setTime}
        currentTime={currentTime}
        setCurrentTime={setCurrentTime}
        setIsActive={setIsActive}
        setPreviusTime={setPreviusTime}
      />
      <SessionInfo currentTime={currentTime} />
      <Timer time={time} />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          onPress={toggleTimer}
          activeOpacity={0.6}
          style={styles.imageButton}
        >
          <Image
            source={require("./assets/pomodoro.png")}
            style={styles.imagen}
          />

          <Text style={styles.buttonText}>
            {isActive ? "Pausar" : "Iniciar"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={restart}
          activeOpacity={0.6}
          style={styles.imageButton}
        >
          <Image source={require("./assets/chili.png")} style={styles.imagen} />

          <Text style={styles.buttonText}>Restaurar</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  titulo: {
    fontFamily: "cursive",
    fontSize: 50,
    fontWeight: "bold",
    color: "#fff",
  },

  imageButton: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },

  imagen: {
    height: 100,
    width: 100,
    borderRadius: 15,
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 8,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
  },
});
