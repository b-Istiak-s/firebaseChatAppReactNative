import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './config/firebase';

import Chat from './screens/chat';
import Login from './screens/login';
import Sign_up from './screens/sign_up';
import Home from './screens/home';
import { createContext ,useContext,useState,useEffect} from 'react';

const Stack = createStackNavigator();
const AuthenticationUserContext = createContext({});
const AuthenticatedUserProvider = ({children})=>{
  const [user,setUser] =useState();
  return(
    <AuthenticationUserContext.Provider value={{user,setUser}}>
      {children}
    </AuthenticationUserContext.Provider>
  )
}

function ChatStack(){
  return(
    <Stack.Navigator defaultScreenOptions={Home} >
      <Stack.Screen name="Home" component = {Home}/>
      <Stack.Screen name="Chat" component = {Chat}/>
    </Stack.Navigator>
  )
}

function AuthStack(){
  return(
    <Stack.Navigator defaultScreenOptions={Login} screenOptions={{headerShown:false}}>
      <Stack.Screen name="Login" component = {Login}/>
      <Stack.Screen name="Signup" component = {Sign_up}/>
    </Stack.Navigator>
  )
}

function RootNavigator(){
  const {user, setUser} = useContext(AuthenticationUserContext);
  const [loading,setLoading] = useState(true);
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,
      async authenticatedUser=>{
        authenticatedUser? setUser(authenticatedUser):setUser(null);
        setLoading(false);
      });
      return () => unsubscribe();
  },[user]);
  if(loading){
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' />
      </View>
    );
  }
  return(
    <NavigationContainer>
      {user ? <ChatStack/> : <AuthStack/>}
      {/* <ChatStack/> */}
    </NavigationContainer>
  ) 
}

export default function App() {
  return (
    <AuthenticatedUserProvider>
      <RootNavigator/>
    </AuthenticatedUserProvider>
    
  );
}
