import { useRouter } from "next/router";
import { useContext } from "react";
import { FirebaseContext } from "../firebase";
import Layout from "../components/layouts/Layout";
import KataListSection from "../components/sections/kataListSection";

export default function Katas() {
  const { user } = useContext(FirebaseContext);
  const router = useRouter();
  if (!user && typeof window !== "undefined") {
    router.push("/login");
  }

  return (
    <>
      <Layout>
        <KataListSection></KataListSection>
      </Layout>
    </>
  );
}
