import React,{useState} from 'react';
import {ScrollView,StyleSheet,View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/Header';
import SectionTitle from '../components/SectionTitle';
import ClassCard from '../components/ClassCard';
import ProgressCard from '../components/ProgressCard';
import SkillSnapshot from '../components/SkillSnapshot';
import DailyPracticeCard from '../components/DailyPracticeCard';
import SubscriptionCard from '../components/SubscriptionCard';
import BottomNav from '../components/BottomNav';
import ClassesScreen from './ClassesScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';
import {colors} from '../theme/colors';

export default function HomeScreen({data,onTogglePractice,onToggleClass}){
 const [activeTab,setActiveTab]=useState(0);
 const home=<ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={s.content}>
  <Header user={data.user} streak={data.streak}/>
  <SectionTitle title="Your Next Class"/><ClassCard scheduledClass={data.scheduledClass} onToggleClass={onToggleClass}/>
  <SectionTitle title="Your English Journey"/><ProgressCard progress={data.progress}/>
  <SectionTitle title="Your Skills" action="See All"/><SkillSnapshot snapshot={data.skillSnapshot}/>
  <SectionTitle title="Daily Practice"/><DailyPracticeCard dailyPractice={data.dailyPractice} onToggle={onTogglePractice}/>
  <SectionTitle title="Your Plan"/><SubscriptionCard subscription={data.subscription}/>
 </ScrollView>;
 const content=activeTab===1?<ClassesScreen scheduledClass={data.scheduledClass}/>:activeTab===2?<ExploreScreen/>:activeTab===3?<ProfileScreen data={data}/>:home;
 return <View style={s.container}><SafeAreaView edges={['top']} style={s.top}>{content}</SafeAreaView><SafeAreaView edges={['bottom']} style={s.bottom}><BottomNav activeIndex={activeTab} onChange={setActiveTab}/></SafeAreaView></View>;
}
const s=StyleSheet.create({container:{flex:1,backgroundColor:colors.background},top:{flex:1,backgroundColor:colors.background},content:{paddingHorizontal:18,paddingTop:4,paddingBottom:28},bottom:{backgroundColor:'#fff'}});
