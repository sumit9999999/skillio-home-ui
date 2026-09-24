# Skillio Home Screen

React Native (Expo) implementation of the Skillio English-learning home screen for the Skillio Live Frontend Test.

The main focus of this project is the home experience: showing the learner's progress, upcoming class, daily practice, skills, and subscription information in a simple and easy-to-scan layout.

## What is included

- Personalized greeting and profile avatar
- Learning streak
- Subscription and lesson usage
- Upcoming class with Join Class action
- Book a Class state when there is no upcoming class
- CEFR progress (B1 → B2)
- Grammar, vocabulary, pronunciation and speaking scores
- Daily practice with two states
- Empty states for subscription and lessons
- Bottom navigation
- Classes screen
- Explore screen
- Profile screen
- Safe-area support
- Basic press feedback and small UI interactions

## Assignment fields

The home screen is driven by the fields provided in the assignment.

### User

```js
user.name
user.avatarUrl
```

### Subscription

```js
subscription.tier
subscription.lessonsRemaining
subscription.totalLessons
```

### Scheduled class

```js
scheduledClass.time
scheduledClass.teacher
scheduledClass.subject
```

The UI handles both an upcoming class and the case where there is no class scheduled.

### Progress

```js
progress.currentCefrLevel
progress.nextCefrLevel
progress.overallProgressPercent
```

### Skill snapshot

```js
skillSnapshot.grammar
skillSnapshot.vocabulary
skillSnapshot.pronunciation
skillSnapshot.speaking
skillSnapshot.overallImprovementPercent
skillSnapshot.growthPercent
```

### Daily practice

```js
dailyPractice.completedToday
```

The practice card changes between `Start Practice` and `View Results`.

## Extra data

I added a small `streak` value:

```js
streak: 7
```

This is used to make the home screen feel more like a learning product rather than only a progress dashboard.

## Screens

### Home

The main screen contains:

- Greeting
- Streak
- Next class
- English journey
- Skill snapshot
- Daily practice
- Subscription

### Classes

Shows the upcoming class and provides a simple empty state when no class is available.

### Explore

Contains quick learning areas:

- Speaking
- Grammar
- Vocabulary
- Pronunciation

### Profile

Shows basic learner information, subscription details and learning statistics.

The additional screens are kept lightweight because the main requirement of the test is the Home Screen.

## UI states

The project includes the following states:

- Scheduled class
- No scheduled class
- Daily practice not completed
- Daily practice completed
- Active subscription
- No active subscription
- Zero lessons remaining

The goal is to give the user a clear action in each state instead of showing an empty screen.

## Design

The UI starts with the Skillio suggested teal color:

```text
#08A4B3
```

White and light neutral surfaces are used around it.

The layout uses cards and clear spacing so the important information can be understood quickly without making the screen feel crowded.

## Tech stack

- React Native
- Expo
- JavaScript
- React Native Animated API
- Expo Vector Icons
- React Native Safe Area Context

There is no backend in this project. The assignment allows hardcoded data, so the focus remains on the frontend implementation.

## Run locally

Clone the repository:

```bash
git clone https://github.com/sumit9999999/skillio-home-ui.git
```

Go into the project:

```bash
cd skillio-home-ui
```

Install dependencies:

```bash
npm install
```

Start Expo:

```bash
npx expo start
```

If Expo cache causes an issue:

```bash
npx expo start --clear
```

Then open the project in Expo Go or an emulator/simulator.

## Repository

GitHub:

https://github.com/sumit9999999/skillio-home-ui

## Testing the different states

The sample data is kept in:

```text
src/data/homeData.js
```

You can change the values there to test different UI states.

For example:

```js
completedToday: false
```

shows the Start Practice state.

Changing it to:

```js
completedToday: true
```

shows the View Results state.

The same approach can be used for the scheduled class, subscription and lesson count.

## Submission

The project includes:

- React Native / Expo source code
- Home screen implementation
- Supporting screens
- Different UI states
- Responsive mobile layout
- README documentation

Screenshots and a short walkthrough video can be added to the submission separately.

## Author

Sumit Khare

React Native Developer
