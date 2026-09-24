import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {colors} from '../theme/colors';

export default function ProgressCard({progress}) {
  const width = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(width, {
      toValue: progress.overallProgressPercent,
      duration: 900,
      useNativeDriver: false,
    }).start();
  }, [progress.overallProgressPercent, width]);

  const barWidth = width.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.card}>
      <View style={styles.levelRow}>
        <View>
          <Text style={styles.level}>{progress.currentCefrLevel}</Text>
          <Text style={styles.caption}>Current Level</Text>
        </View>

        <View style={styles.arrow}>
          <Ionicons name="arrow-forward" size={20} color={colors.primary} />
        </View>

        <View style={{alignItems: 'flex-end'}}>
          <Text style={styles.level}>{progress.nextCefrLevel}</Text>
          <Text style={styles.caption}>Next Level</Text>
        </View>

        <Text style={styles.percent}>{progress.overallProgressPercent}%</Text>
      </View>

      <View style={styles.track}>
        <Animated.View style={[styles.fill, {width: barWidth}]} />
      </View>

      <View style={styles.bottomRow}>
        <Text style={styles.helper}>
          You're {100 - progress.overallProgressPercent}% away from {progress.nextCefrLevel}!
        </Text>
        <Ionicons name="bar-chart" size={18} color={colors.success} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {backgroundColor: colors.card, borderRadius: 20, padding: 16, borderWidth: 1, borderColor: colors.border, marginBottom: 20},
  levelRow: {flexDirection: 'row', alignItems: 'center'},
  level: {fontSize: 24, fontWeight: '900', color: colors.primaryDark},
  caption: {fontSize: 11, color: colors.muted, marginTop: 2},
  arrow: {marginHorizontal: 14},
  percent: {marginLeft: 'auto', fontSize: 17, fontWeight: '900', color: colors.text},
  track: {height: 9, backgroundColor: '#E8F0F2', borderRadius: 10, overflow: 'hidden', marginTop: 14},
  fill: {height: '100%', backgroundColor: colors.primary, borderRadius: 10},
  bottomRow: {flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 9},
  helper: {fontSize: 11, color: colors.muted},
});
