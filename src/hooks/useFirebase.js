import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, getIdToken } from "firebase/auth";
import firebaseInitialize from "../Pages/Login/Firebase/firebase.init"

firebaseInitialize()
const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('')
    
    const auth = getAuth();
    const GoogleProvider = new GoogleAuthProvider();

    const googleSignIn = (location, history) =>{
        signInWithPopup(auth, GoogleProvider)
        .then((result) => {
            const user = result.user
            saveUser(user.email, user.displayName, 'PUT')
            const destination = location?.state?.from || '/';
            history.replace(destination)
            setError('')
        }).catch((error) => { 
            setError(error.message);
        })
        .finally(() => setLoading(false))
    }

    const registerUser = (email, password, name, history) =>{
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => { 
            console.log(userCredential.user);
            setError('')
            const newUser = {email, displayName:name}
            saveUser(email, name, 'POST')
            setUser(newUser)
            updateProfile(auth.currentUser, {
                displayName: name,
              }).then(() => {
                // Profile updated!
                // ...
              }).catch((error) => {
                // An error occurred
                // ...
              });
              
            history.replace('/')
        })
        .catch((error) => {
            setError(error.message);
        })
        .finally(() => setLoading(false))
    }

    const signIn = (email,password, location, history)=>{
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential.user);
            const destination = location?.state?.from || '/';
            history.replace(destination)
        })
        .catch((error) => {
            setError(error.message)
        })
        .finally(() => setLoading(false))
    }

    useEffect(() =>{
        fetch(`https://stormy-harbor-41651.herokuapp.com/users/${user.email}`)
        .then(res=>res.json())
        .then(data=> setAdmin(data.admin))
    },[user.email])

    const logOut = () =>{
        signOut(auth).then(() => {

          })
          .catch((error) => {
            setError(error)
          })
          .finally(() => setLoading(false))
    }
  
    
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
              getIdToken(user)
              .then(idToken =>{
                  setToken(idToken)
              })
            } else {
              setUser({});
            }
            setLoading(false)
        })
        return () =>unsubscribe;
        
    },[auth])

    const saveUser = (email, displayName, method) =>{
        const user = {email, displayName};
        fetch('https://stormy-harbor-41651.herokuapp.com/users',{
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    }


    return{
        user,
        admin,
        loading,
        error,
        token,
        registerUser,
        logOut,
        signIn,
        googleSignIn
    }

}

export default useFirebase;