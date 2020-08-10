import { useRouter } from "next/router";
import { useContext } from "react";
import { FirebaseContext } from "../firebase";

export default function Home() {
  const { user } = useContext(FirebaseContext);
  const router = useRouter();
  if (!user && typeof window !== "undefined") {
      router.push("/login");
  }

  return (
    <>
      <h1>Hacker Fights</h1>
    </>
  );
}
