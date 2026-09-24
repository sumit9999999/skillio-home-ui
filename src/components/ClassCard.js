import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {colors} from '../theme/colors';

export default function ClassCard({scheduledClass, onToggleClass}) {
  if (!scheduledClass) {
    return (
      <View style={styles.emptyCard}>
        <View style={styles.calendar}>
          <Ionicons name="calendar-outline" size={28} color={colors.primary} />
          <View style={styles.plus}>
            <Ionicons name="add" size={12} color="#fff" />
          </View>
        </View>
        <Text style={styles.emptyTitle}>No class scheduled</Text>
        <Text style={styles.emptyText}>
          Book a class with a teacher and get personalised feedback.
        </Text>
        <Pressable style={styles.primaryButton} onPress={onToggleClass}>
          <Text style={styles.buttonText}>Book a Class</Text>
          <Ionicons name="arrow-forward" size={18} color="#fff" />
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.scheduledCard}>
      <View style={styles.cardTop}>
        <Text style={styles.overline}>YOUR NEXT CLASS</Text>
        <View style={styles.pill}>
          <Text style={styles.pillText}>In 2 hours</Text>
        </View>
      </View>

      <View style={styles.classRow}>
        <View style={{flex: 1}}>
          <Text style={styles.time}>{scheduledClass.time}</Text>
          <View style={styles.meta}>
            <Ionicons name="person-outline" size={15} color="#DDF7F9" />
            <Text style={styles.metaText}>{scheduledClass.teacher}</Text>
          </View>
          <View style={styles.meta}>
            <Ionicons name="mic-outline" size={15} color="#DDF7F9" />
            <Text style={styles.metaText}>{scheduledClass.subject}</Text>
          </View>
        </View>

        <View style={styles.teacherAvatar}>
          <Text style={{fontSize: 27}}>👩‍🏫</Text>
        </View>
      </View>

      <Pressable style={styles.lightButton} onPress={onToggleClass}>
        <Text style={styles.lightButtonText}>Join Class</Text>
        <Ionicons name="arrow-forward" size={18} color={colors.primaryDark} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  scheduledCard: {
    backgroundColor: colors.primary,
    borderRadius: 22,
    padding: 16,
    marginBottom: 20,
  },
  cardTop: {flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'},
  overline: {fontSize: 11, fontWeight: '900', color: '#DDF7F9', letterSpacing: 1},
  pill: {backgroundColor: 'rgba(255,255,255,.18)', paddingHorizontal: 10, paddingVertical: 6, borderRadius: 20},
  pillText: {fontSize: 11, color: '#fff', fontWeight: '800'},
  classRow: {flexDirection: 'row', alignItems: 'center', marginVertical: 14},
  time: {fontSize: 22, fontWeight: '900', color: '#fff', marginBottom: 8},
  meta: {flexDirection: 'row', alignItems: 'center', marginTop: 5},
  metaText: {fontSize: 13, color: '#E9FEFF', marginLeft: 7},
  teacherAvatar: {width: 64, height: 64, borderRadius: 20, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center'},
  lightButton: {backgroundColor: '#fff', height: 46, borderRadius: 14, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8},
  lightButtonText: {fontSize: 15, fontWeight: '900', color: colors.primaryDark},

  emptyCard: {
    backgroundColor: colors.card,
    borderRadius: 22,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
  },
  calendar: {width: 58, height: 58, borderRadius: 18, backgroundColor: colors.primarySoft, alignItems: 'center', justifyContent: 'center', position: 'relative'},
  plus: {position: 'absolute', right: -3, bottom: -3, width: 21, height: 21, borderRadius: 11, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center'},
  emptyTitle: {fontSize: 18, fontWeight: '900', color: colors.text, marginTop: 12},
  emptyText: {fontSize: 13, lineHeight: 19, textAlign: 'center', color: colors.muted, marginTop: 5, maxWidth: 290},
  primaryButton: {height: 46, width: '100%', borderRadius: 14, backgroundColor: colors.primary, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 16},
  buttonText: {color: '#fff', fontWeight: '900', fontSize: 14},
});
