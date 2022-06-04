// Import FirebaseAuth and firebase.
import React, { useEffect } from 'react';
import myFirebaseApp from './myFirebase/myFirebaseApp';
import { useLocation, useNavigate } from 'react-router';
import authService from '../services/authService';
import { getAuth, signInWithRedirect, onAuthStateChanged, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import useAuthHelper from '../customHooks/useAuth';

export default function SignIn() {

    const auth = getAuth(myFirebaseApp);
    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const { isAuthenticated } = useAuthHelper();

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    onAuthStateChanged(auth, user => {
        authService.onLoginStateChanged(auth, user);
    });

    const navigateAfterSignin = () => {
        navigate(from, { replace: true });
    }

    useEffect(() => {
        if (auth?.currentUser || isAuthenticated) {
            authService.onLoginSuccess();
            navigateAfterSignin();
        }
    }, [user, isAuthenticated]);

    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
                <button onClick={() => signInWithGoogle()}>Sign In With Google</button>
            </div>
        );
    }
    if (loading) {
        return <p>Loading...</p>;
    }
    return (
        <div>
            <button onClick={() => signInWithGoogle()}>Sign In With Google</button>
        </div>
    );
};
