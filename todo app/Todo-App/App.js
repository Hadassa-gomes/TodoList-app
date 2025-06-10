import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

// Importando as telas
import WelcomeScreen from "./screens/WelcomeScreen"
import TaskListScreen from "./screens/TaskListScreen"
import TaskDetailScreen from "./screens/TaskDetailScreen"

const Stack = createNativeStackNavigator()

export default function App() {
  console.log("App iniciado")
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ title: "Bem-vindo" }} />
        <Stack.Screen name="TaskList" component={TaskListScreen} options={{ title: "Lista de Tarefas" }} />
        <Stack.Screen name="TaskDetail" component={TaskDetailScreen} options={{ title: "Detalhes da Tarefa" }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
