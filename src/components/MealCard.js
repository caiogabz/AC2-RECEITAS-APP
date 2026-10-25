import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function MealCard({ meal, onPress }) {
  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.85}
      onPress={onPress}
    >
      <Image
        source={{ uri: meal.strMealThumb }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.infoContainer}>
        <Text style={styles.title} numberOfLines={2}>
          {meal.strMeal}
        </Text>
        <View style={styles.badgeContainer}>
          {meal.strCategory && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{meal.strCategory}</Text>
            </View>
          )}
          {meal.strArea && (
            <View style={[styles.badge, styles.areaBadge]}>
              <Text style={styles.areaBadgeText}>{meal.strArea}</Text>
            </View>
          )}
        </View>
        <Text style={styles.tapHint}>Toque para ver detalhes →</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 3, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  image: {
    width: '100%',
    height: 180,
  },
  infoContainer: {
    padding: 14,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: 8,
  },
  badgeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 8,
  },
  badge: {
    backgroundColor: '#ffedd5',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  badgeText: {
    color: '#ea580c',
    fontSize: 12,
    fontWeight: '600',
  },
  areaBadge: {
    backgroundColor: '#e0f2fe',
  },
  areaBadgeText: {
    color: '#0284c7',
    fontSize: 12,
    fontWeight: '600',
  },
  tapHint: {
    fontSize: 13,
    color: '#ea580c',
    fontWeight: '500',
    marginTop: 4,
  },
});
