import { Authenticator, useAuthenticator, View } from '@aws-amplify/ui-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export const LoginPage = () => {
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (authStatus === 'authenticated') {
      // Send them back to where they came from, or to home page
      const from = location.state?.from?.pathname || '/';
      navigate(from, { replace: true });
    }
  }, [authStatus, navigate, location]);

  return (
    <View className="auth-wrapper">
      <Authenticator
        initialState="signIn"
        components={{
          Header() {
            return (
              <View textAlign="center" padding={4}>
                <h1>Historical Characters</h1>
                <p>Please sign in to your account</p>
              </View>
            );
          },
        }}
      />
    </View>
  );
}; 