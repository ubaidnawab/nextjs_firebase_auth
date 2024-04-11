'use client';
import Image from "next/image";
import LoginForm from "./components/LoginForm";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-center h-full p-4">
      <h1 className="text-3xl text-center font-semibold mb-8">Login Page</h1>
      <LoginForm />
    </main>
  );
}
