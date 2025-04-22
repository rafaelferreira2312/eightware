'use client';
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import Image from "next/image";

export function NavBar() {
  const { user, logout } = useAuth();

  return (
    <header className="container mx-auto py-6 px-4">
      <div className="flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-eightware.png"
            alt="Eightware Logo"
            width={40}
            height={40}
            className="dark:invert"
          />
          <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
            Eightware
          </span>
        </Link>
        
        <nav className="flex gap-6 items-center">
          {user ? (
            <>
              <Link 
                href="/profile" 
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Profile
              </Link>
              <button
                onClick={logout}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link 
                href="/auth/login" 
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Login
              </Link>
              <Link 
                href="/auth/signup" 
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Sign Up
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}