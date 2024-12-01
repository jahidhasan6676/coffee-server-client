import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../firebase/firebase.config";


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState([]);
    const [loading,setLoading] = useState(false);

    const createUser = (email,password)=>{
        // loading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    };

    const signInUser = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    }


    const userInfo = {
        user,
        loading,
        createUser,
        signInUser
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;


