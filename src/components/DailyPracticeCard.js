import React, {useEffect, useRef} from 'react';
import {Animated, Pressable, StyleSheet, Text, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {colors} from '../theme/colors';

export default function DailyPracticeCard({dailyPractice, onToggle}) {
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.spring(scale, {toValue: 1.03, useNativeDriver: true}),
      Animated.spring(scale, {toValue: 1, useNativeDriver: true}),
    ]).start();
  }, [dailyPractice.completedToday, scale]);

  const completed = dailyPractice.completedToday;

  return (
    <Animated.View style={[styles.card, {transform: [{scale}]}]}>
      <View style={styles.iconCircle}>
        <Text style={{fontSize: 25}}>{completed ? '🎉' : '🎯'}</Text>
      </View>

      <Text style={styles.title}>
        {completed ? "Today's Practice Completed!" : '10 min English Challenge'}
      </Text>

      <Text style={styles.text}>
        {completed ? 'Great job! Keep building your habit.' : dailyPractice.description}
      </Text>

      <Pressable
        onPress={onToggle}
        style={[styles.button, completed && styles.completedButton]}>
        <Ionicons
          name={completed ? 'stats-chart' : 'play'}
          size={17}
          color={completed ? colors.primaryDark : '#fff'}
        />
        <Text style={[styles.buttonText, completed && styles.completedText]}>
          {completed ? 'View Results' : 'Start Practice'}
        </Text>
        <Ionicons
          name="arrow-forward"
          size={17}
          color={completed ? colors.primaryDark : '#fff'}
        />
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {backgroundColor: colors.card, borderRadius: 20, padding: 16, borderWidth: 1, borderColor: colors.border, marginBottom: 20},
  iconCircle: {width: 52, height: 52, borderRadius: 18, backgroundColor: colors.primarySoft, alignItems: 'center', justifyContent: 'center'},
  title: {fontSize: 17, fontWeight: '900', color: colors.text, marginTop: 11},
  text: {fontSize: 12, color: colors.muted, marginTop: 4},
  button: {height: 46, borderRadius: 14, backgroundColor: colors.primary, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 14},
  buttonText: {color: '#fff', fontWeight: '900', fontSize: 14},
  completedButton: {backgroundColor: colors.primarySoft, borderWidth: 1, borderColor: '#BDECEF'},
  completedText: {color: colors.primaryDark},
});
