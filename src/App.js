import React,{useEffect} from 'react';
import './App.css';
import HomeScreen from './component/screens/HomeScreen';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoginScreen from './component/screens/LoginScreen';
import ProfileScreen from './component/screens/ProfileScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import {login, logout, selectuser } from './features/userSlice';

function App() {
  const user=useSelector(selectuser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubcribe=auth.onAuthStateChanged((userAuth) => {
      if (userAuth){
        // logged in
        console.log(userAuth);
        dispatch(
          login({
          uid: userAuth.uid,
          email: userAuth.email,
        })
        );
      }else{
        // logged out
        dispatch(logout());

      }
    });
  
    return () => {
      unsubcribe();
    }
  }, [dispatch])
  
  return (
    <div className="app">
      
      <Router>
        {! user ?( <LoginScreen/>):(
         
          <Routes>
          <Route exact path="/" element={<HomeScreen/>}/>
          <Route exact path="/profile" element={<ProfileScreen/>}/> 
           

        </Routes>
        )}
        
   
    </Router>
      
    </div>
  );
}

export default App;
