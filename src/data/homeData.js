export const homeData = {
  user: {
    name: 'Sumit',
    avatarUrl: 'https://i.pravatar.cc/150?img=12',
  },

  subscription: {
    tier: 'Premium',
    lessonsRemaining: 12,
    totalLessons: 20,
    active: true,
  },

  scheduledClass: {
    time: 'Today, 6:00 PM',
    teacher: 'Sarah Wilson',
    subject: 'Speaking Practice',
  },

  progress: {
    currentCefrLevel: 'B1',
    nextCefrLevel: 'B2',
    overallProgressPercent: 78,
  },

  skillSnapshot: {
    grammar: 82,
    vocabulary: 74,
    pronunciation: 68,
    speaking: 79,
    overallImprovementPercent: 12,
    growthPercent: 8,
  },

  dailyPractice: {
    completedToday: false,
    title: '10 min English Challenge',
    description: "Let's keep your streak alive!",
    result: {
      exercises: 8,
      accuracy: 85,
      newWords: 10,
    },
  },

  // Added field: allowed by the brief.
  // Why: gives the home screen a motivational habit signal.
  streak: 7,
};
