import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useKatas from "../../hooks/useKatas";
import Layout from "../../components/layouts/Layout";
import DescriptionKataTop from "../../components/sections/descriptionKataTop";
import DescriptionKataDetails from "../../components/sections/descriptionKataDetails";

const Description = () => {
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
        <DescriptionKataTop kata={kata}></DescriptionKataTop>
        <DescriptionKataDetails kata={kata}></DescriptionKataDetails>
      </Layout>
    </>
  );
};

export default Description;
