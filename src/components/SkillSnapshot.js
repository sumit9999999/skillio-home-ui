import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {colors} from '../theme/colors';

const skills = [
  {key: 'grammar', label: 'Grammar', icon: 'reader-outline', color: colors.success, bg: colors.successSoft},
  {key: 'vocabulary', label: 'Vocabulary', icon: 'book-outline', color: colors.purple, bg: colors.purpleSoft},
  {key: 'pronunciation', label: 'Pronunciation', icon: 'volume-high-outline', color: colors.orange, bg: colors.orangeSoft},
  {key: 'speaking', label: 'Speaking', icon: 'mic-outline', color: colors.pink, bg: colors.pinkSoft},
];

export default function SkillSnapshot({snapshot}) {
  return (
    <View style={styles.grid}>
      {skills.map(skill => (
        <View key={skill.key} style={styles.skillCard}>
          <View style={[styles.icon, {backgroundColor: skill.bg}]}>
            <Ionicons name={skill.icon} size={18} color={skill.color} />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.label}>{skill.label}</Text>
            <Text style={styles.value}>{snapshot[skill.key]}%</Text>
          </View>
        </View>
      ))}

      <View style={styles.metric}>
        <Text style={styles.metricLabel}>Overall Improvement</Text>
        <Text style={[styles.metricValue, {color: colors.success}]}>+{snapshot.overallImprovementPercent}%</Text>
      </View>

      <View style={styles.metric}>
        <Text style={styles.metricLabel}>Growth</Text>
        <Text style={[styles.metricValue, {color: colors.primaryDark}]}>+{snapshot.growthPercent}%</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginBottom: 20},
  skillCard: {width: '48.3%', backgroundColor: colors.card, borderRadius: 17, padding: 12, borderWidth: 1, borderColor: colors.border, flexDirection: 'row', alignItems: 'center'},
  icon: {width: 36, height: 36, borderRadius: 12, alignItems: 'center', justifyContent: 'center', marginRight: 9},
  label: {fontSize: 11, color: colors.muted, fontWeight: '600'},
  value: {fontSize: 17, fontWeight: '900', color: colors.text, marginTop: 2},
  metric: {width: '48.3%', backgroundColor: colors.card, borderRadius: 17, padding: 12, borderWidth: 1, borderColor: colors.border},
  metricLabel: {fontSize: 11, color: colors.muted},
  metricValue: {fontSize: 20, fontWeight: '900', marginTop: 4},
});
