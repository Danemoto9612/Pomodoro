import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import React, { useState } from "react";

const opciones = ["Sesión de concentración", "Descanso corto", "Descanso largo", "Personalizado"];

interface Props {
  setTime: React.Dispatch<React.SetStateAction<number>>;
  currentTime: number;
  setCurrentTime: React.Dispatch<React.SetStateAction<number>>;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({ setTime, currentTime, setCurrentTime, setIsActive }: Props) {
  const [customMinutes, setCustomMinutes] = useState("");

  function handlePress(index: number): void {
    setIsActive(false);
    setCurrentTime(index);
    if (index === 0) {
      setTime(25 * 60);
    }
    if (index === 1) {
      setTime(5 * 60);
    }
    if (index === 2) {
      setTime(15 * 60);
    }
    if (index === 3) {
      setTime(0);
    }
  }

  function applyCustomTime() {
    const minutes = Number(customMinutes);
    if (minutes > 0) {
      setTime(minutes * 60);
      setCurrentTime(3);
      setIsActive(false);
      setCustomMinutes("");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.botones}>
        {opciones.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handlePress(index)}
            style={[
              styles.itemStyle,
              currentTime !== index && {
                borderColor: "transparent",
              },
            ]}
          >
            <Text style={styles.text}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {currentTime === 3 && (
        <View style={styles.customContainer}>
          <TextInput
            style={styles.input}
            placeholder="Minutos"
            placeholderTextColor="#999"
            keyboardType="numeric"
            value={customMinutes}
            onChangeText={setCustomMinutes}
          />

          <TouchableOpacity
            style={styles.applyButton}
            onPress={applyCustomTime}
          >
            <Text style={styles.applyText}>
              Aplicar
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 20,
  },

  botones: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },

  itemStyle: {
    borderWidth: 2,
    padding: 8,
    margin: 4,
    borderRadius: 15,
    alignItems: "center",
    borderColor: "#fff",
  },

  text: {
    fontWeight: "bold",
    color: "#fff",
  },

  customContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },

  input: {
    backgroundColor: "#fff",
    width: 100,
    padding: 10,
    borderRadius: 10,
    textAlign: "center",
    marginRight: 10,
  },

  applyButton: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
  },

  applyText: {
    fontWeight: "bold",
  },
});