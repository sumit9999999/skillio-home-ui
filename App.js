import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import HomeScreen from './src/screens/HomeScreen';
import {homeData} from './src/data/homeData';

export default function App() {
  const [data, setData] = useState(homeData);
  const togglePractice = () => setData(prev => ({...prev, dailyPractice: {...prev.dailyPractice, completedToday: !prev.dailyPractice.completedToday}}));
  const toggleClass = () => setData(prev => ({...prev, scheduledClass: prev.scheduledClass ? null : homeData.scheduledClass}));
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#F5FCFD" />
      <HomeScreen data={data} onTogglePractice={togglePractice} onToggleClass={toggleClass} />
    </SafeAreaProvider>
  );
}
