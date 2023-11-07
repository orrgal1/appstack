import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {
  Dummy,
  DummyService,
  HealthCheckResult,
  HealthService,
  User,
  UserService,
} from './beapi';
import GoogleLoginButton from './components/googleLoginButton';

export default function App() {
  const healthService = new HealthService();
  const [healthCheckResult, setHealthCheckResult] = useState<HealthCheckResult>(
    { ok: false },
  );

  const dummyService = new DummyService();
  const [dummyCreated, setDummyCreated] = useState<Dummy | null>(null);

  const userService = new UserService();
  const [me, setMe] = useState<User | null>(null);

  useEffect(() => {
    healthService
      .healthCheck({})
      .then((result: HealthCheckResult) => {
        setHealthCheckResult(result);
      })
      .catch((err) => {
        console.error(err);
      });
    dummyService
      .createOne({ text: '123', isPublic: true })
      .then((result: Dummy) => {
        setDummyCreated(result);
      })
      .catch((err) => {
        console.error(err);
      });
    userService
      .findMe({})
      .then((result: User) => {
        setMe(result);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Text>Health: {JSON.stringify(healthCheckResult)}</Text>
      <Text>Dummy: {JSON.stringify(dummyCreated, null, 2)}</Text>
      <Text>Me: {JSON.stringify(me, null, 2)}</Text>
      <GoogleLoginButton />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
