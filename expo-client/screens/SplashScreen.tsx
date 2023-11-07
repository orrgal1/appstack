import React, { useEffect } from 'react';
import { User, UserService } from '../beapi';
import useMainStore from '../main/MainStore';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../main/RootStackParamList';

type SplashScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Splash'
>;

interface SplashScreenProps {
  navigation: SplashScreenNavigationProp;
}

export default function SplashScreen({ navigation }: SplashScreenProps) {
  const userService = new UserService();
  const { setMe } = useMainStore((state) => ({
    setMe: state.setMe,
  }));

  useEffect(() => {
    userService
      .findMe({})
      .then((result: User) => {
        setMe(result);
        navigation.navigate('Home');
      })
      .catch(() => {
        navigation.navigate('Login');
      });
  }, []);

  return <div></div>;
}
