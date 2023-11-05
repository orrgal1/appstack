import { useEffect } from 'react';
import { User, UserService } from '../beapi';

const AuthCheck = () => {
  const userService = new UserService();
  useEffect(() => {
    userService
      .findMe({})
      .then((user: User) => {
        if (user?.id) {
        }
      })
      .catch((err) => {});
  }, []);
};

export default AuthCheck;
