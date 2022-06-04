import { updateIsAuthenticatedFlag, updateLastAuthMode, updateUserName } from '../redux/operationslice';
import store from '../redux/store';
export default {
    onLoginSuccess: function (user) {
        store.dispatch(updateIsAuthenticatedFlag(true));
    },
    onLoginStateChanged: function (auth, user) {
        const authStatus = auth.currentUser ? true : false;
        store.dispatch(updateIsAuthenticatedFlag(authStatus));
    }
}