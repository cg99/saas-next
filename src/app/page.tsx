import AuthForm from "@/components/AuthForm";
// import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-6">
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">SaaS Boilerplate with Next.js</h1>
      <p className="mb-8 text-gray-600">A boilerplate for building SaaS applications with authentication, payments, and more.</p>
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md mx-auto">
        <AuthForm />
      </div>
    </div>
  </main>
  );
}
