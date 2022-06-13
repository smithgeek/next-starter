// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithRedirect, signOut as firebaseSignOut, User } from "firebase/auth";
import { produce } from 'immer';
import { useEffect } from "react";
import create from "zustand";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "",
	authDomain: "",
	projectId: "",
	storageBucket: "",
	messagingSenderId: "",
	appId: "",
	measurementId: ""
};

export enum AuthState {
	LoggedOut,
	LoggingIn,
	LoggedIn
}

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

interface AuthStore {
	user: User | null | undefined;
	setUser: (user: User | null) => void;
	state: AuthState;
	setState: (state: AuthState) => void;
}

const useAuthStore = create<AuthStore>(set => ({
	user: undefined,
	setUser: (u) => set(produce<AuthStore>(draft => {
		if (u === null) {
			draft.state = AuthState.LoggedOut;
		}
		else {
			draft.state = AuthState.LoggedIn;
		}
		draft.user = u;
	})),
	state: AuthState.LoggingIn,
	setState: (s => set(produce<AuthStore>(draft => {
		draft.state = s;
	})))
}));

export function useAuthProvider() {
	const { setUser } = useAuthStore();
	useEffect(() => {
		const auth = getAuth();
		//getRedirectResult(auth).then(result => console.log(result))
		onAuthStateChanged(auth, (user) => {
			console.log(user);
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/firebase.User
				setUser(user);
				// ...
			} else {
				setUser(null);
			}
		});
	}, [setUser]);
}

const googleAuthProvider = new GoogleAuthProvider();

function signInWithGoogle() {
	const auth = getAuth();
	signInWithRedirect(auth, googleAuthProvider);
}

const githubAuthProvider = new GithubAuthProvider();

function signInWithGithub() {
	const auth = getAuth();
	signInWithRedirect(auth, githubAuthProvider);
}

function signInWithPassword(email: string, password: string) {
	const auth = getAuth();
	signInWithEmailAndPassword(auth, email, password);
}

export function signOut() {
	const auth = getAuth();
	return firebaseSignOut(auth);
}

export function useUser() {
	const authStore = useAuthStore();
	return {
		user: authStore.user,
		signOut: () => {
			authStore.setState(AuthState.LoggedOut);
			signOut();
		},
		signInWithGoogle: () => {
			authStore.setState(AuthState.LoggedIn);
			signInWithGoogle()
		},
		signInWithGithub: () => {
			authStore.setState(AuthState.LoggedIn);
			signInWithGithub();
		},
		signInWithPassword: (email: string, password: string) => {
			authStore.setState(AuthState.LoggedIn);
			signInWithPassword(email, password);
		},
		state: authStore.state
	}
}