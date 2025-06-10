import { View, Text, StyleSheet, ScrollView, Platform } from "react-native"

export default function TaskDetailScreen({ route }) {
  const { task } = route.params

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{task.title}</Text>

        <View style={styles.card}>
          <Text style={styles.label}>Descrição:</Text>
          <Text style={styles.description}>{task.description}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>ID da Tarefa:</Text>
          <Text style={styles.infoText}>{task.id}</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    // Sombra condicional baseada na plataforma
    ...(Platform.OS === "web"
      ? {
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }
      : {
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.1,
          shadowRadius: 3.84,
          elevation: 5,
        }),
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: "#666",
    lineHeight: 24,
  },
  infoText: {
    fontSize: 14,
    color: "#666",
  },
})
