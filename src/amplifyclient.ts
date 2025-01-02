import { Amplify } from 'aws-amplify';
import { cognitoUserPoolsTokenProvider } from 'aws-amplify/auth/cognito';


Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: import.meta.env.VITE_COGNITO_USER_POOL_ID,
      userPoolClientId: import.meta.env.VITE_COGNITO_USER_POOL_CLIENT_ID,
      signUpVerificationMethod: 'code', 
    }
  }
}); 

// Configurar el proveedor de tokens para las solicitudes autenticadas
cognitoUserPoolsTokenProvider.setKeyValueStorage({
  setItem: (key, value) => Promise.resolve(localStorage.setItem(key, value)),
  getItem: (key) => Promise.resolve(localStorage.getItem(key)),
  removeItem: (key) => Promise.resolve(localStorage.removeItem(key)),
  clear: () => Promise.resolve(localStorage.clear())
});