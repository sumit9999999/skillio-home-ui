# Skillio Home Screen — Expo UI Test

## What this implementation covers

The home screen uses every required backend field from the brief:

- `user.name`, `user.avatarUrl`
- `subscription.tier`, `subscription.lessonsRemaining`, `subscription.totalLessons`
- `scheduledClass.time`, `scheduledClass.teacher`, `scheduledClass.subject`
- `progress.currentCefrLevel`, `progress.nextCefrLevel`, `progress.overallProgressPercent`
- `skillSnapshot.grammar`, `vocabulary`, `pronunciation`, `speaking`
- `skillSnapshot.overallImprovementPercent`, `growthPercent`
- `dailyPractice.completedToday`

## Added field

`streak: 7`

Why: the brief explicitly allows additional fields. A streak gives the home screen a lightweight habit/motivation signal without distracting from learning progress.

## States included

- Scheduled class
- No class scheduled
- Daily practice incomplete
- Daily practice completed
- Active subscription
- No active subscription
- Zero lessons remaining

The demo `App.js` has temporary toggles:
- Tap Join/Book Class to switch between scheduled and empty state.
- Tap Start/View Results to switch practice state.

## Run

1. Create/use an Expo project.
2. Copy `src/` and `App.js` into the project.
3. Install icons if not already available:
   `npx expo install @expo/vector-icons`
4. Run:
   `npx expo start`

This implementation intentionally uses React Native's `Animated` API instead of requiring Reanimated, keeping the take-home dependency footprint small.


## Complete Expo project

This ZIP is a standalone Expo project. After extracting:

```bash
npm install
npx expo start
```

No `create-expo-app` step is required.
