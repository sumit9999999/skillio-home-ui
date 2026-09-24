import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {colors} from '../theme/colors';

export default function SubscriptionCard({subscription}) {
  if (!subscription.active) {
    return (
      <View style={styles.card}>
        <Text style={styles.emoji}>🚀</Text>
        <Text style={styles.title}>Start your English journey</Text>
        <Text style={styles.text}>Choose a plan and unlock live classes and practice.</Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Explore Plans</Text>
          <Ionicons name="arrow-forward" size={17} color="#fff" />
        </Pressable>
      </View>
    );
  }

  if (subscription.lessonsRemaining === 0) {
    return (
      <View style={styles.card}>
        <Text style={styles.emoji}>📚</Text>
        <Text style={styles.title}>You're out of lessons</Text>
        <Text style={styles.text}>Renew your plan to continue learning and keep your progress going.</Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Renew Plan</Text>
          <Ionicons name="arrow-forward" size={17} color="#fff" />
        </Pressable>
      </View>
    );
  }

  const percent = Math.round((subscription.lessonsRemaining / subscription.totalLessons) * 100);

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.crown}><Text>👑</Text></View>
        <View style={{flex: 1}}>
          <Text style={styles.title}>{subscription.tier} Plan</Text>
          <Text style={styles.text}>Keep your learning momentum going.</Text>
        </View>
        <View style={styles.active}><Text style={styles.activeText}>Active</Text></View>
      </View>

      <View style={styles.progressTrack}>
        <View style={[styles.progressFill, {width: `${percent}%`}]} />
      </View>

      <View style={styles.lessonRow}>
        <Text style={styles.lessonText}>{subscription.lessonsRemaining} lessons remaining</Text>
        <Text style={styles.lessonText}>{subscription.lessonsRemaining}/{subscription.totalLessons}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {backgroundColor: colors.card, borderRadius: 20, padding: 16, borderWidth: 1, borderColor: colors.border, marginBottom: 20},
  header: {flexDirection: 'row', alignItems: 'center'},
  crown: {width: 42, height: 42, borderRadius: 14, backgroundColor: '#FFF4D9', alignItems: 'center', justifyContent: 'center', marginRight: 10},
  emoji: {fontSize: 35, marginBottom: 7},
  title: {fontSize: 16, fontWeight: '900', color: colors.text},
  text: {fontSize: 12, color: colors.muted, lineHeight: 18, marginTop: 3},
  active: {backgroundColor: colors.successSoft, paddingHorizontal: 9, paddingVertical: 5, borderRadius: 20},
  activeText: {fontSize: 10, color: colors.success, fontWeight: '900'},
  progressTrack: {height: 8, borderRadius: 8, backgroundColor: '#E8F0F2', overflow: 'hidden', marginTop: 15},
  progressFill: {height: '100%', backgroundColor: colors.primary, borderRadius: 8},
  lessonRow: {flexDirection: 'row', justifyContent: 'space-between', marginTop: 7},
  lessonText: {fontSize: 11, color: colors.muted, fontWeight: '600'},
  button: {height: 46, borderRadius: 14, backgroundColor: colors.primary, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 15},
  buttonText: {color: '#fff', fontWeight: '900'},
});
