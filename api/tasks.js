export async function getTasks() {
    // Simula dados vindos de uma API
    return [
      { id: 1, title: "Estudar React Native", description: "Aprender a criar apps com Expo" },
      { id: 2, title: "Praticar AsyncStorage", description: "Salvar dados localmente no dispositivo" },
      { id: 3, title: "Fazer lista de tarefas", description: "Exibir tarefas com navegação entre telas" }
    ];
  }