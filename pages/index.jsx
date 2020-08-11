import { useRouter } from "next/router";
import { useContext } from "react";
import { FirebaseContext } from "../firebase";
import Layout from "../components/layouts/Layout";
import Main from "../components/views/main/Main";

export default function Home() {
  const { user } = useContext(FirebaseContext);
  const router = useRouter();
  if (!user && typeof window !== "undefined") {
      router.push("/login");
  }

  return (
    <>
      <Layout>
        <Main></Main>
      </Layout>
    </>
  );
}
