import React, { useState, useContext, useEffect } from 'react'
import { FirebaseContext } from '../firebase';

const useUserInfo = () => {
    const [userInfo, setUserInfo] = useState({});
    const {user, firebase} = useContext(FirebaseContext);

    useEffect(() => {
        const getUserInfo = async () => {
            if(user.uid){
                const userInfoQuery = await firebase.db.collection("userInfo").where('userUid', '==', user.uid);
                const userInfoRes = await userInfoQuery.get();
                userInfoRes.forEach(doc => {
                    setUserInfo(doc.data());
                });
            }
        }
        getUserInfo();
    },[user]);

    return {userInfo};
}
 
export default useUserInfo;