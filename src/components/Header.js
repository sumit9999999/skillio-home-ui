import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {colors} from '../theme/colors';

export default function Header({user, streak}) {
  return (
    <>
      <View style={styles.header}>
        <View style={{flex: 1}}>
          <Text style={styles.hello}>Hey, {user.name}! 👋</Text>
          <Text style={styles.subtitle}>Ready to improve your English?</Text>
        </View>

        <Image source={{uri: user.avatarUrl}} style={styles.avatar} />
      </View>

      <View style={styles.streak}>
        <View style={styles.fire}>
          <Ionicons name="flame" size={20} color="#FF8A00" />
        </View>
        <View style={{flex: 1}}>
          <Text style={styles.streakTitle}>{streak} Day Streak</Text>
          <Text style={styles.streakText}>Keep your momentum going!</Text>
        </View>
        <Ionicons name="chevron-forward" size={18} color={colors.muted} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {flexDirection: 'row', alignItems: 'center', marginBottom: 14},
  hello: {fontSize: 27, fontWeight: '900', color: colors.text},
  subtitle: {fontSize: 13, color: colors.muted, marginTop: 3},
  avatar: {width: 48, height: 48, borderRadius: 24, marginLeft: 12},
  streak: {
    backgroundColor: '#FFF8EC',
    borderWidth: 1,
    borderColor: '#FFE7BD',
    borderRadius: 16,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  fire: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#FFEBCB',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  streakTitle: {fontSize: 14, fontWeight: '800', color: colors.text},
  streakText: {fontSize: 12, color: colors.muted, marginTop: 2},
});
