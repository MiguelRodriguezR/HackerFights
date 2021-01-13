import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useKatas from "../../hooks/useKatas";
import CodeKata from "../../components/sections/codeKata";
import Layout from "../../components/layouts/Layout";

function Train() {
  const router = useRouter();
  const {
    query: { id },
  } = router;
  const { getKataById } = useKatas();
  const [kata, setKata] = useState({});
  const [getDB, setGetDB] = useState(true);

  useEffect(() => {
    if (id && getDB) {
      setGetDB(false);
      getKataById(id, setKata);
    }
  }, [id]);

  if (getDB) return <h3>Loading...</h3>;


  return ( 
    <>
      <Layout>
        <CodeKata kata={kata}></CodeKata>
      </Layout>
    </>
  );
}

export default Train;
