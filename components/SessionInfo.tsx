import { StyleSheet, Text, View } from "react-native";

interface Props {
  currentTime: number;
}

const SessionInfo = ({ currentTime }: Props) => {
  const sessionNames = [
    "Sesión de concentración",
    "Descanso corto",
    "Descanso largo",
    "Tiempo personalizado",
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {sessionNames[currentTime]}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    padding: 10,
  },

  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default SessionInfo;