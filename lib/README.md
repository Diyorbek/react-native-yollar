# react-native-yollar

Library of simple components for React Native

### Installation

Npm:
```bash
npm i --save expo expo-font @expo-google-fonts/montserrat @expo-google-fonts/open-sans
```

Yarn:
```bash
yarn add expo expo-font @expo-google-fonts/montserrat @expo-google-fonts/open-sans
```

### Usage

```tsx
import { TextField, Typography } from "react-native-yollar";

export default function App() {
  return (
    <View>
      <Typography variant="title" color="primary">
        Title
      </Typography>

      <TextField
        placeholder="Type some text"
        helperText="Instructions"
        variant="filled"
      />
    </View>
  )
}
```