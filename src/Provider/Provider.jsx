import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from '../firebase.init';

export const AuthContext = createContext(null)

const Provider = ({children}) => {
   const [user, setUser] = useState(null)
   const [priceData, setPriceData] = useState([])
   const [eventItem, setEventItem] = useState([])
   const [categoryID, setCategoryID] = useState(1)
   const [loading, setLoading] = useState(true)

   useEffect(() => {
      fetch('price.json')
         .then(res => res.json())
         .then(data => setPriceData(data))
      
      fetch('event.json')
         .then(response => response.json())
         .then(data => setEventItem(data))

      const unSubscribe = onAuthStateChanged(auth, currentUser => {
         setUser(currentUser)
         setLoading(false)
      })
      return () => {
         unSubscribe()
      }
   }, [])

   const createUser = (email, password) => {
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
   }

   const signIn = (email, password) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
   }

   const googleLogin = (googleProvider) => {
      setLoading(true)
      return signInWithPopup(auth, googleProvider)
   }

   const signOutUser = () => {
      signOut(auth)
   }

   const info = {priceData, categoryID, setCategoryID, eventItem, createUser, signIn, user, loading, googleLogin, signOutUser }

   return (
      <AuthContext.Provider value={info}>
         {children}
      </AuthContext.Provider>
   );
};

export default Provider;