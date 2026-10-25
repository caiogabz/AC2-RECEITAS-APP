# 🍗 TheMealDB Recipes App

Aplicativo mobile desenvolvido em **React Native** com **Expo (SDK 55)** para visualização de receitas gastronômicas consumindo a API pública **TheMealDB**.

---

## 👨‍🎓 Identificação do Aluno

> **Preencha seus dados antes da entrega:**
- **Nome Completo:** [Seu Nome Aqui]
- **RA:** [Seu RA Aqui]
- **Repositório GitHub:** [Link do seu repositório aqui]

---

## 🎯 Requisitos e Critérios Atendidos

| Critério | Status | Detalhes |
|---|---|---|
| **Consumo da API (0,25)** | ✅ Concluído | Requisição via `axios` consumindo `https://www.themealdb.com/api/json/v1/1/search.php?s=chicken` e gerenciamento de estado via `useState` e `useEffect`. |
| **Lista com FlatList (0,25)** | ✅ Concluído | Lista interativa via `FlatList` exibindo nome (`strMeal`), imagem (`strMealThumb`), além de badges de categoria e origem. Cada item possui feedback de toque com `TouchableOpacity`. |
| **Navegação + Detalhes (0,25)** | ✅ Concluído | Stack navigation configurada com `@react-navigation/native` e `@react-navigation/native-stack`. Passagem do objeto completo da receita via parâmetros de rota para a tela de Detalhes. |

---

## 🚀 Funcionalidades Adicionais

- **Barra de Pesquisa:** Permite pesquisar outras receitas ou ingredientes na API TheMealDB (iniciando por padrão com receitas de "chicken").
- **Pull to Refresh:** Arraste a lista para baixo para recarregar as receitas da API.
- **Feedback de Carregamento e Erro:** `ActivityIndicator` elegante durante a requisição e tela com botão de "Tentar Novamente" em caso de falha de conexão.
- **Tela de Detalhes Completa:**
  - Imagem e título em destaque
  - Badges informativos (Categoria e País de Origem)
  - Lista detalhada de Ingredientes com suas respectivas medidas
  - Modo de Preparo passo a passo
  - Botão com link direto para o vídeo da receita no YouTube (quando disponível)

---

## 🛠️ Tecnologias Utilizadas

- **React Native** (0.83.10)
- **Expo SDK 55** (~55.0.32)
- **Axios** (^1.20.0)
- **@react-navigation/native** (^7.5.1)
- **@react-navigation/native-stack** (^7.21.0)
- **react-native-screens** e **react-native-safe-area-context**

---

## 📂 Estrutura de Pastas

```text
meal-recipes-app/
├── assets/                  # Imagens e ícones do app
├── src/
│   ├── components/
│   │   └── MealCard.js      # Card de item da lista com nome, imagem e toque
│   ├── screens/
│   │   ├── HomeScreen.js    # Tela principal com FlatList, busca e estados
│   │   └── DetailsScreen.js # Tela de detalhes da receita
│   └── services/
│       └── api.js           # Configuração da instância do Axios
├── App.js                   # Configuração das rotas e navegação
├── app.json                 # Metadados do Expo
├── package.json             # Dependências do projeto
└── README.md                # Documentação e instruções de entrega
```

---

## 💻 Como Executar Localmente

### Pré-requisitos
- Node.js instalado (versão LTS recomendada)
- Aplicativo **Expo Go** instalado no celular (Android ou iOS)

### Passos

1. Clone o repositório ou navegue até a pasta do projeto:
   ```bash
   cd meal-recipes-app
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento do Expo:
   ```bash
   npx expo start
   ```

4. Escaneie o QR Code exibido no terminal ou no navegador com o aplicativo **Expo Go** no seu smartphone (ou pressione `a` para emulador Android / `w` para versão Web).

---

## 📤 Como Subir para o GitHub (Passo a Passo)

1. Crie um novo repositório no seu GitHub:
   - Acesse [github.com/new](https://github.com/new)
   - Nomeie o repositório (ex: `meal-recipes-app`)
   - **IMPORTANTE:** Marque a opção **Public** (Público)
   - Não marque "Initialize with a README" (já temos o projeto pronto)

2. No terminal, dentro da pasta `meal-recipes-app`, execute:
   ```bash
   git add .
   git commit -m "feat: app de receitas TheMealDB com react native, expo sdk 55 e axios"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
   git push -u origin main
   ```
   *(Substitua `SEU_USUARIO` e `SEU_REPOSITORIO` pelo seu usuário e nome do repositório no GitHub)*

3. Copie o link do repositório e envie no formulário junto com seu Nome e RA.
