import { View, Text, TouchableOpacity, StyleSheet, Platform } from "react-native"

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>📝 TodoApp</Text>
        <Text style={styles.subtitle}>Organize suas tarefas de forma simples</Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("TaskList")}>
          <Text style={styles.buttonText}>Ver Minhas Tarefas</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#4a90e2",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
    minWidth: 200,
    // Sombra condicional
    ...(Platform.OS === "web"
      ? {
          boxShadow: "0 4px 8px rgba(74,144,226,0.3)",
        }
      : {
          shadowColor: "#4a90e2",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 5,
          elevation: 8,
        }),
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
})


