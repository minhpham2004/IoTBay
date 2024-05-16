"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const firstLoginString = localStorage.getItem("firstLogin");
  const firstLogin = Boolean(firstLoginString);
  const userNameString = localStorage.getItem("userName");
  const userName = String(userNameString);

  useEffect(() => {
    if (!firstLogin) {
      router.push("/sign-in");
    }
  }, []);

  if (firstLogin && userName) return <>Hi Welcome</>;
}
