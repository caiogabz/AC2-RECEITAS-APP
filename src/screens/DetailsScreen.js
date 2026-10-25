import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
  SafeAreaView,
} from 'react-native';

export default function DetailsScreen({ route, navigation }) {
  // Dados recebidos via parâmetros de navegação
  const { meal } = route.params || {};

  if (!meal) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Nenhuma receita selecionada.</Text>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backButtonText}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  // Extrai lista de ingredientes e medidas dinamicamente
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && ingredient.trim() !== '') {
      ingredients.push({
        name: ingredient.trim(),
        measure: measure ? measure.trim() : '',
      });
    }
  }

  const handleOpenYoutube = () => {
    if (meal.strYoutube) {
      Linking.openURL(meal.strYoutube).catch((err) =>
        console.error('Erro ao abrir link do YouTube:', err)
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Imagem da Receita (Requisito) */}
        <Image
          source={{ uri: meal.strMealThumb }}
          style={styles.heroImage}
          resizeMode="cover"
        />

        <View style={styles.contentContainer}>
          {/* Nome da Receita (Requisito) */}
          <Text style={styles.mealTitle}>{meal.strMeal}</Text>

          {/* Badges de Categoria e Origem */}
          <View style={styles.badgeRow}>
            {meal.strCategory && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>📂 {meal.strCategory}</Text>
              </View>
            )}
            {meal.strArea && (
              <View style={[styles.badge, styles.areaBadge]}>
                <Text style={styles.areaBadgeText}>🌍 {meal.strArea}</Text>
              </View>
            )}
          </View>

          {/* Botão de Vídeo (se houver) */}
          {meal.strYoutube ? (
            <TouchableOpacity
              style={styles.youtubeButton}
              onPress={handleOpenYoutube}
              activeOpacity={0.8}
            >
              <Text style={styles.youtubeButtonText}>▶ Assistir no YouTube</Text>
            </TouchableOpacity>
          ) : null}

          {/* Seção de Ingredientes */}
          {ingredients.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>🛒 Ingredientes ({ingredients.length})</Text>
              <View style={styles.ingredientList}>
                {ingredients.map((item, index) => (
                  <View key={index} style={styles.ingredientItem}>
                    <Text style={styles.ingredientBullet}>•</Text>
                    <Text style={styles.ingredientName}>{item.name}</Text>
                    {item.measure ? (
                      <Text style={styles.ingredientMeasure}>({item.measure})</Text>
                    ) : null}
                  </View>
                ))}
              </View>
            </View>
          )}

          {/* Seção de Modo de Preparo */}
          {meal.strInstructions ? (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>👩‍🍳 Modo de Preparo</Text>
              <Text style={styles.instructionsText}>
                {meal.strInstructions.trim()}
              </Text>
            </View>
          ) : null}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    maxWidth: 700,
    width: '100%',
    alignSelf: 'center',
  },
  scrollContent: {
    paddingBottom: 40,
  },
  heroImage: {
    width: '100%',
    height: 280,
    backgroundColor: '#f1f5f9',
  },
  contentContainer: {
    padding: 20,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -20,
  },
  mealTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#0f172a',
    lineHeight: 32,
    marginBottom: 12,
  },
  badgeRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 16,
  },
  badge: {
    backgroundColor: '#ffedd5',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  badgeText: {
    color: '#ea580c',
    fontSize: 13,
    fontWeight: '600',
  },
  areaBadge: {
    backgroundColor: '#e0f2fe',
  },
  areaBadgeText: {
    color: '#0284c7',
    fontSize: 13,
    fontWeight: '600',
  },
  youtubeButton: {
    backgroundColor: '#ef4444',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  youtubeButtonText: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 14,
  },
  section: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#f1f5f9',
    paddingTop: 18,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: 12,
  },
  ingredientList: {
    backgroundColor: '#f8fafc',
    borderRadius: 12,
    padding: 12,
  },
  ingredientItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
  },
  ingredientBullet: {
    color: '#ea580c',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 8,
  },
  ingredientName: {
    fontSize: 15,
    color: '#334155',
    fontWeight: '500',
    flex: 1,
  },
  ingredientMeasure: {
    fontSize: 14,
    color: '#64748b',
    fontWeight: '600',
  },
  instructionsText: {
    fontSize: 15,
    lineHeight: 24,
    color: '#334155',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  errorText: {
    fontSize: 16,
    color: '#64748b',
    marginBottom: 16,
  },
  backButton: {
    backgroundColor: '#ea580c',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  backButtonText: {
    color: '#ffffff',
    fontWeight: '600',
  },
});
