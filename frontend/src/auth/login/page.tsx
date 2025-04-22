'use client';
import { AuthForm } from "@/components/AuthForm/AuthForm";
import { NavBar } from "@/components/Navigation/NavBar";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-black">
      <NavBar />
      <div className="container mx-auto px-4 py-16 flex justify-center">
        <div className="w-full max-w-md">
          <AuthForm 
            title="Login" 
            isLogin={true} 
            link={{ href: "/auth/signup", text: "Need an account? Sign up" }} 
          />
        </div>
      </div>
    </div>
  );
}