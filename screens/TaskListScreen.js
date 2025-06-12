"use client"

import { useEffect, useState } from "react"
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator, Platform } from "react-native"

// Importações
import { getTasks } from "../api/tasks"
import { saveTasks, loadTasks } from "../utils/storage"

export default function TaskListScreen({ navigation }) {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    loadTasksData()
  }, [])

  const loadTasksData = async () => {
    try {
      console.log("📱 Iniciando carregamento de tarefas...")
      setLoading(true)
      setError(null)

      // Primeiro tenta carregar do storage local
      const localTasks = await loadTasks()
      console.log("💾 Tarefas do storage local:", localTasks)

      if (localTasks && localTasks.length > 0) {
        console.log("✅ Usando tarefas do storage local")
        setTasks(localTasks)
      } else {
        console.log("🌐 Carregando tarefas da API...")
        const apiTasks = await getTasks()
        console.log("📥 Tarefas da API:", apiTasks)

        setTasks(apiTasks)
        await saveTasks(apiTasks)
        console.log("💾 Tarefas salvas no storage")
      }
    } catch (err) {
      console.error("❌ Erro ao carregar tarefas:", err)
      setError("Erro ao carregar tarefas")

      // Dados de fallback
      const fallbackTasks = [
        { id: 1, title: "Tarefa de Exemplo", description: "Esta é uma tarefa de exemplo para testar o app" },
      ]
      setTasks(fallbackTasks)
    } finally {
      setLoading(false)
    }
  }

  const renderTask = ({ item }) => (
    <TouchableOpacity
      style={styles.taskItem}
      onPress={() => {
        console.log("🔄 Navegando para TaskDetail com:", item)
        navigation.navigate("TaskDetail", { task: item })
      }}
    >
      <Text style={styles.taskTitle}>{item.title}</Text>
      <Text style={styles.taskDescription} numberOfLines={2}>
        {item.description}
      </Text>
    </TouchableOpacity>
  )

  if (loading) {
    return (
      <View style={[styles.container, styles.centered]}>
        <ActivityIndicator size="large" color="#4a90e2" />
        <Text style={styles.loadingText}>Carregando tarefas...</Text>
      </View>
    )
  }

  if (error) {
    return (
      <View style={[styles.container, styles.centered]}>
        <Text style={styles.errorText}>{error}</Text>
        <TouchableOpacity style={styles.retryButton} onPress={loadTasksData}>
          <Text style={styles.retryButtonText}>Tentar Novamente</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas Tarefas ({tasks.length})</Text>

      {tasks.length === 0 ? (
        <View style={styles.centered}>
          <Text style={styles.emptyText}>Nenhuma tarefa encontrada</Text>
        </View>
      ) : (
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderTask}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  listContainer: {
    padding: 20,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    padding: 20,
    paddingBottom: 0,
  },
  taskItem: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
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
  taskTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  taskDescription: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: "#666",
  },
  errorText: {
    fontSize: 16,
    color: "#e74c3c",
    textAlign: "center",
    marginBottom: 20,
  },
  retryButton: {
    backgroundColor: "#4a90e2",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    // Sombra condicional para o botão
    ...(Platform.OS === "web"
      ? {
          boxShadow: "0 2px 4px rgba(74,144,226,0.3)",
        }
      : {
          shadowColor: "#4a90e2",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.3,
          shadowRadius: 3,
          elevation: 3,
        }),
  },
  retryButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  emptyText: {
    fontSize: 16,
    color: "#999",
    textAlign: "center",
  },
})

