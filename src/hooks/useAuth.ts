// import { useEffect } from 'react';
// import useAuthStore from '../store/authStore';

// const useAuth = () => {
//   const { isAuthenticated, token, login, logout } = useAuthStore();

//   useEffect(() => {
//     const storedToken = localStorage.getItem('token');
//     if (storedToken && !isAuthenticated) {
//       login(storedToken);
//     }
//   }, [isAuthenticated, login]);

//   const handleLogin = (token: string) => {
//     localStorage.setItem('token', token);
//     login(token);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     logout();
//   };

//   return {
//     isAuthenticated,
//     token,
//     login: handleLogin,
//     logout: handleLogout,
//   };
// };

// export default useAuth;
