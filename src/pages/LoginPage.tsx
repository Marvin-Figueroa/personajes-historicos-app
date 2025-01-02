import { Authenticator, View } from '@aws-amplify/ui-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { Toast } from 'primereact/toast';
import { useRef } from 'react';

export const LoginPage = () => {
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);
  const navigate = useNavigate();
  const location = useLocation();
  const toast = useRef<Toast>(null);

  useEffect(() => {
    if (authStatus === 'authenticated') {
      const from = location.state?.from?.pathname || '/';
      navigate(from, { replace: true });
    }
  }, [authStatus, navigate, location]);

  return (
    <View className="auth-wrapper">
      <Toast ref={toast} />
      <Authenticator
        initialState="signIn"
        components={{
          Header() {
            return (
              <View className="text-center p-4">
                <h1 className="text-xl font-bold">Historical Characters</h1>
                <p>Please sign in to your account</p>
              </View>
            );
          },
        }}
      />
    </View>
  );
}; 