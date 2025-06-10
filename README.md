# 📱 TodoList App

Um aplicativo móvel elegante e funcional para gerenciar suas tarefas diárias, desenvolvido com React Native e Expo.

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 📖 Sobre o Projeto

O TodoList App é uma solução simples e intuitiva para organizar suas tarefas diárias. Com uma interface moderna e funcionalidades essenciais, você pode criar, visualizar e gerenciar suas tarefas de forma eficiente, tudo armazenado localmente no seu dispositivo.

### ✨ Principais Funcionalidades

- 📝 **Criar Tarefas**: Adicione novas tarefas com título e descrição
- 📋 **Listar Tarefas**: Visualize todas as suas tarefas organizadas
- 👁️ **Visualizar Detalhes**: Acesse informações completas de cada tarefa
- ✅ **Marcar como Concluída**: Altere o status das tarefas facilmente
- 💾 **Armazenamento Local**: Suas tarefas ficam salvas no dispositivo
- 🔄 **Sincronização**: Dados persistem entre sessões do app
- 📱 **Interface Responsiva**: Design adaptado para diferentes telas

## 🛠️ Tecnologias Utilizadas

- **React Native** - Framework para desenvolvimento mobile multiplataforma
- **Expo** - Plataforma que facilita o desenvolvimento React Native
- **AsyncStorage** - Solução de armazenamento local persistente
- **React Navigation** - Sistema de navegação entre telas
- **JavaScript ES6+** - Linguagem de programação moderna

## 📁 Estrutura do Projeto

```
TodoList-App/
├── 📁 Api/
│   └── 📄 tasks.js              # Gerenciamento de dados das tarefas
├── 📁 assets/
│   ├── 🖼️ adaptive-icon.png     # Ícone adaptativo do app
│   ├── 🖼️ favicon.png           # Favicon para web
│   ├── 🖼️ icon.png              # Ícone principal do app
│   └── 🖼️ splash-icon.png       # Ícone da tela de splash
├── 📁 screens/
│   ├── 📄 TaskDetailScreen.js   # Tela de detalhes da tarefa
│   ├── 📄 TaskListScreen.js     # Tela principal com lista
│   └── 📄 WelcomeScreen.js      # Tela de boas-vindas
├── 📁 utils/
│   └── 📄 storage.js            # Funções de armazenamento
├── 📄 App.js                    # Componente raiz da aplicação
├── 📄 app.json                  # Configurações do Expo
├── 📄 index.js                  # Ponto de entrada da aplicação
├── 📄 package.json              # Dependências e scripts
└── 📄 README.md                 # Documentação do projeto
```

## 🚀 Instalação e Configuração

### 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 16 ou superior)
- **npm** ou **yarn**
- **Expo CLI** (`npm install -g @expo/cli`)
- **Expo Go** (app no celular) ou simulador iOS/Android

### 🔧 Passo a Passo

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/TodoList-app.git
   cd TodoList-app
   ```

2. **Instale as dependências principais**
   ```bash
   npm install
   ```

3. **Instale o AsyncStorage**
   ```bash
   npx expo install @react-native-async-storage/async-storage
   ```

4. **Instale as dependências de navegação**
   ```bash
   npx expo install @react-navigation/native @react-navigation/stack
   npx expo install react-native-screens react-native-safe-area-context
   ```

5. **Inicie o projeto**
   ```bash
   npx expo start
   ```

## 📱 Como Executar

### 🖥️ Iniciando o Servidor de Desenvolvimento

```bash
# Iniciar normalmente
npx expo start

# Iniciar limpando o cache (recomendado se houver problemas)
npx expo start --clear

# Iniciar com túnel (para dispositivos em redes diferentes)
npx expo start --tunnel
```

### 📲 Testando o Aplicativo

| Plataforma | Como Testar |
|------------|-------------|
| **📱 Dispositivo Físico** | Baixe o app "Expo Go" e escaneie o QR code |
| **🍎 iOS Simulator** | Pressione `i` no terminal |
| **🤖 Android Emulator** | Pressione `a` no terminal |
| **🌐 Navegador Web** | Pressione `w` no terminal |




