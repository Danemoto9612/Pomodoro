import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const opciones = ["Pomodoro", "Descanso corto", "Descanso largo"];

interface Props{
    setTime: React.Dispatch<React.SetStateAction<number>>;
    currentTime: number;
    setCurrentTime: React.Dispatch<React.SetStateAction<number>>;
}

export default function Header({setTime, currentTime, setCurrentTime}: Props) {

    function handlePress(index: number): void {
        if (index === opciones.length) {
            setCurrentTime(index);
        } else {
            const newTime = (index === 0 ? 25 : (index === 1 ? 5: 15))
            setCurrentTime(index);
            setTime(newTime * 60)
        }
    }

  return (
    <View style={styles.container}>
      <View style={styles.botones}>
        {
            opciones.map((item, index) => (
                <TouchableOpacity
                    key={index}
                    onPress={() => handlePress(index)}
                    style={[styles.itemStyle, currentTime !== index && {borderColor:"transparent"}]}
                >
                    <Text style={{fontWeight:"bold"}}>{item}</Text>
                </TouchableOpacity>
            ))
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "center",
        marginTop: 10,
        marginVertical: 20,
    },
    botones: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    },
    itemStyle: {
        borderWidth: 3,
        padding: 5,
        flex: 1,
        marginHorizontal: 5,
        borderRadius: 15,
        alignItems: "center",
        borderColor: "white",
    },
})