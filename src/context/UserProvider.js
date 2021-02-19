import { createContext, useContext, useEffect, useState } from "react";
import firestore, { createUser, checkPermissions } from "../database";
import { AuthContext } from "./AuthProvider";

export const UserContext = createContext();

let userRef = null;

export default function({children}) {
	const { auth } = useContext(AuthContext);
	const [user, setUser] = useState(null);
	const [isAdmin, setIsAdmin] = useState(false);
	const [isDev, setIsDev] = useState(false);
	
	useEffect(() => {
		userRef = firestore.doc(`Users/${auth.email}`);
		const unsub = userRef.onSnapshot(doc => {
			if (!doc.exists) {
				createUser(auth);
			} else {
				setUser(doc.data());
			}
		}, err => console.error(err));
		
		return unsub;
	}, [setUser]);
	
	useEffect(() => {
		if (!user) {
			return;
		}
		checkPermissions(auth.uuid).then(data => {
			if (data) {
				setIsAdmin(data.isAdmin);
				setIsDev(data.isDev);
			}
		}).catch(err => console.error(err));
	}, [user?.email, setIsAdmin, setIsDev]);
	
	
	
	return (
		<UserContext.Provider value={{
			user,
			isAdmin,
			isDev
		}}>
			{children}
		</UserContext.Provider>
	);
}