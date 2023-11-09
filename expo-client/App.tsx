import React from 'react';
import Nav from './main/Nav';
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from 'react-native-paper';

const theme = {
  ...DefaultTheme,
};
export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Nav />
    </PaperProvider>
  );
}
