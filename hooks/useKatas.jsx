import React, { useState, useContext, useEffect } from 'react'
import { FirebaseContext } from '../firebase';

const useKatas = () => {
    const [katas, setKatas] = useState([]);
    const {firebase} = useContext(FirebaseContext);

    useEffect(() => {
        const getKatas = async () => {
            firebase.db.collection('katas').orderBy('rank', 'desc').onSnapshot(handleSnapshot)
        }
        getKatas();
    },[]);

    function handleSnapshot(snapshot){
        const snapkatas = snapshot.docs.map( doc => {
        return {
            ...doc.data(),
            id: doc.id,
        }
        })
        setKatas(snapkatas);
    }

    return {katas};
}
 
export default useKatas;