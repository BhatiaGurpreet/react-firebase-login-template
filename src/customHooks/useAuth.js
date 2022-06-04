import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import myFirebaseApp from '../authentication/myFirebase/myFirebaseApp';


/**
 * 
 * @returns isAuthenticated, userName, lastAuthMode from "STORE/Local State"
 */
export default function useAuthHelper() {
    const auth = getAuth(myFirebaseApp);
    const [user] = useAuthState(auth);
    if (!user)
        return {
            isAuthenticated: false,
            userName: null,
            lastAuthMode: null
        };
    else return { isAuthenticated: true };
}