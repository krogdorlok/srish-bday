# Srish's Birthday Gift Reveal App

This is a mobile-friendly interactive birthday gift reveal application built with React Native and Expo.

## Features

- A series of 7 interactive gift boxes.
- 3 of the boxes feature personalized quizzes.
- The final box is an interactive birthday cake with a "blow out the candles" feature.
- Elegant white and gold aesthetic.

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/krogdorlok/srish-bday.git
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the app:**
   ```bash
   npm run ios
   ```

## Project Structure

- `App.js`: The main component that manages the app's state and navigation.
- `components/`: Contains the reusable components for the app.
  - `GiftBox.js`: The animated, pressable gift box component.
  - `Quiz.js`: The quiz component with hint and "Birthday Pass" logic.
  - `BirthdayCake.js`: The interactive birthday cake component with microphone input.
- `assets/`: Contains the app's images and other static assets.

## Customization

To customize the app with your own content, you can modify the `gifts` array in `App.js`. You can also replace the placeholder content in the `assets` directory with your own photos, voice notes, and other media.
