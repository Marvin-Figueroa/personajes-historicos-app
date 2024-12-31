// import { useAuthenticator } from '@aws-amplify/ui-react';
// import  Auth from '@aws-amplify/auth';  // Importación correcta en Amplify Gen 2

// export const useAuth = () => {
//   const { user, authStatus, signOut } = useAuthenticator((context) => [
//     context.user,
//     context.authStatus,
//     context.signOut,
//   ]);

//   const isAuthenticated = authStatus === 'authenticated';

//   // Obtener los grupos del usuario utilizando Auth.currentAuthenticatedUser
//   const getUserGroups = async (): Promise<string[]> => {
//     try {
//       const currentUser = await Auth.currentAuthenticatedUser();
//       const groups = currentUser?.signInUserSession?.accessToken?.payload['cognito:groups'] || [];
//       return groups;
//     } catch (error) {
//       console.error('Error fetching user groups:', error);
//       return [];
//     }
//   };

//   const checkIfAdmin = async (): Promise<boolean> => {
//     const groups = await getUserGroups();
//     return groups.includes('admin');
//   };

//   const checkIfUser = async (): Promise<boolean> => {
//     const groups = await getUserGroups();
//     return groups.includes('user');
//   };

//   return {
//     user,
//     isAuthenticated,
//     checkIfAdmin,
//     checkIfUser,
//     signOut,
//   };
// };
