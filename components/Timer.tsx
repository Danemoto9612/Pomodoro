import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

interface Props{
    time: number;
}

const Timer = ({time}:Props) => {
  const TimeFormat = `${Math.floor(time/60).toString().padStart(2,'0')}:${(time % 60).toString().padStart(2,'0')}`;

  return (
    <View style={styles.container}>
      <Text style={styles.time}>{TimeFormat}</Text>
    </View>
  )
}

const styles = StyleSheet.create ({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 50,
        marginBottom: 20,
        borderColor: "white",
        borderWidth: 3,
        borderRadius: 15
    },
    time: {
        fontSize: 80,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff'
    },
})

export default Timer