import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import Timer from "./components/Timer";
import Header from "./components/Header";

const colores = ["#cc6666", "#66cc99", "#66cccc"];

export default function App() {
  const [minutes, setMinutes] = useState(25);
  const [time, setTime] = useState(minutes * 60);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isActive, setIsActive] = useState(false);
  const [isWorking, setIsWorking] = useState(false);

  return (
    <View style={[styles.container, {backgroundColor: colores[currentTime]}]}>
      <Text style={styles.titulo}>Pomodoro</Text>
      <Header setTime={setTime} currentTime={currentTime} setCurrentTime={setCurrentTime}/>
      <Timer time={time}/>
      <Image source={require("./assets/pomodoro.png")} style={[styles.imagen, {backgroundColor: colores[currentTime]}]} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontFamily: "cursive",
    fontSize: 50,
    fontWeight: "bold",
    color: "#fff",
  },
  imagen: {
    height: 100,
    width: 100,
    borderRadius: 15,
  },
});
