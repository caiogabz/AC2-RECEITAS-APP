import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';

export default function HomeScreen({ navigation }) {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  // 1) Consumir a API via Axios e armazenar os dados no estado
  useEffect(() => {
    axios
      .get('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken')
      .then((response) => {
        setMeals(response.data.meals || []);
      })
      .catch((error) => {
        console.error('Erro ao buscar receitas:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#e65100" />
        <Text style={styles.loadingText}>Carregando receitas...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* 2) Tela Home: FlatList mostrando nome e imagem da receita */}
      <FlatList
        data={meals}
        keyExtractor={(item) => item.idMeal}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          // 3) Cada item clicável navegando para Detalhes com parâmetros
          <TouchableOpacity
            style={styles.card}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Details', { meal: item })}
          >
            <Image source={{ uri: item.strMealThumb }} style={styles.image} />
            <View style={styles.cardContent}>
              <Text style={styles.title}>{item.strMeal}</Text>
              <Text style={styles.viewMore}>Ver detalhes →</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    maxWidth: 650,
    width: '100%',
    alignSelf: 'center',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  list: {
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    cursor: 'pointer',
  },
  image: {
    width: '100%',
    height: 200,
  },
  cardContent: {
    padding: 14,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 6,
  },
  viewMore: {
    fontSize: 14,
    color: '#e65100',
    fontWeight: '600',
  },
});
