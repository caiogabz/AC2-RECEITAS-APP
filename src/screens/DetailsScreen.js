import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default function DetailsScreen({ route, navigation }) {
  // 3) Recebendo os dados da receita via parâmetros de rota
  const { meal } = route.params || {};

  if (!meal) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Nenhuma receita selecionada.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* 4) Tela de Detalhes: exibir pelo menos o nome e a imagem da receita */}
      <Image source={{ uri: meal.strMealThumb }} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.title}>{meal.strMeal}</Text>

        {meal.strCategory && (
          <Text style={styles.category}>Categoria: {meal.strCategory}</Text>
        )}

        {meal.strInstructions && (
          <View style={styles.instructionsContainer}>
            <Text style={styles.sectionTitle}>Instruções:</Text>
            <Text style={styles.instructions}>{meal.strInstructions}</Text>
          </View>
        )}

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>← Voltar para a lista</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    maxWidth: 650,
    width: '100%',
    alignSelf: 'center',
  },
  content: {
    paddingBottom: 32,
  },
  image: {
    width: '100%',
    height: 280,
  },
  info: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  category: {
    fontSize: 16,
    color: '#e65100',
    fontWeight: '600',
    marginBottom: 16,
  },
  instructionsContainer: {
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  instructions: {
    fontSize: 15,
    lineHeight: 22,
    color: '#555',
  },
  backButton: {
    marginTop: 24,
    backgroundColor: '#e65100',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    cursor: 'pointer',
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 16,
    color: '#666',
  },
});
