import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import auth from '../firebase.init';

export const AuthContext = createContext(null)

const Provider = ({children}) => {
   const [user, setUser] = useState(null)
   const [priceData, setPriceData] = useState([])
   const [categoryItem, setCategoryItem] = useState([])
   const [eventItem, setEventItem] = useState([])
   const [categoryID, setCategoryID] = useState(1)
   const [loading, setLoading] = useState(true)

   console.log(user);

   useEffect(() => {
      fetch('price.json')
         .then(res => res.json())
         .then(data => setPriceData(data))
      
      fetch('event.json')
         .then(response => response.json())
         .then(data => setEventItem(data))
      
      fetch('category.json')
         .then(response => response.json())
         .then(data => setCategoryItem(data))

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

   const info = {priceData, categoryItem, categoryID, setCategoryID, eventItem, createUser, signIn, user, loading, googleLogin }

   return (
      <AuthContext.Provider value={info}>
         {children}
      </AuthContext.Provider>
   );
};

export default Provider;