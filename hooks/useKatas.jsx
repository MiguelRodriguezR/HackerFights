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

    const getKataById = async (id,setter) => {
        const katasQuery = await firebase.db.collection("katas").doc(id);
        const katasRes = await katasQuery.get();
        if (katasRes.exists) {
            setter(katasRes.data());
        } else {
            setter({error: true});
        }
    }

    return {katas, getKataById};
}
 
export default useKatas;