import { useAuthenticator } from '@aws-amplify/ui-react';
import { useState, useEffect } from 'react';
import { fetchAuthSession } from '@aws-amplify/auth';

export const useAuth = () => {
  const { user, authStatus, signOut } = useAuthenticator((context) => [
    context.user,
    context.authStatus,
    context.signOut,
  ]);

  const [isAdmin, setIsAdmin] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const isAuthenticated = authStatus === 'authenticated';

  useEffect(() => {
    const updateRoles = async () => {
      setIsLoading(true);
      if (isAuthenticated) {
        try {
          const session = await fetchAuthSession();
          const accessToken = session.tokens?.accessToken;
          if (!accessToken) {
            setIsAdmin(false);
            setIsUser(false);
            return;
          }
          const groups = accessToken.payload['cognito:groups'] as string[] || [];
          setIsAdmin(groups.includes('admin'));
          setIsUser(groups.includes('user'));
        } catch (error) {
          console.error('Error fetching user groups:', error);
          setIsAdmin(false);
          setIsUser(false);
        }
      } else {
        setIsAdmin(false);
        setIsUser(false);
      }
      setIsLoading(false);
    };

    updateRoles();
  }, [isAuthenticated]);

  return {
    user,
    isAuthenticated,
    isAdmin,
    isUser,
    isLoading,
    signOut,
  };
};
