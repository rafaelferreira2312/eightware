import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-black">
      <header className="container mx-auto py-6 px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
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
          </div>
          <nav className="hidden md:flex gap-6">
            <NavLink href="/auth/login">Login</NavLink>
            <NavLink href="/auth/signup">Sign Up</NavLink>
            <NavLink href="/profile">Profile</NavLink>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 text-center">
        <section className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            Welcome to <span className="text-blue-600">Eightware</span>
          </h1>
          <p className="text-xl mb-12 text-gray-600 dark:text-gray-300">
            A complete authentication system with Next.js and Ruby on Rails
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/auth/login"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Get Started
            </Link>
            <Link
              href="/auth/signup"
              className="px-8 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors font-medium"
            >
              Create Account
            </Link>
          </div>
        </section>

        <section className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            title="Secure Authentication"
            description="JWT based authentication with HttpOnly cookies"
            icon="🔒"
          />
          <FeatureCard
            title="Full Stack"
            description="Next.js frontend with Rails API backend"
            icon="🚀"
          />
          <FeatureCard
            title="Modern Design"
            description="Responsive and accessible UI with Tailwind CSS"
            icon="🎨"
          />
        </section>
      </main>

      <footer className="container mx-auto py-8 px-4 text-center text-gray-500 dark:text-gray-400">
        <p>© {new Date().getFullYear()} Eightware. All rights reserved.</p>
      </footer>
    </div>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
    >
      {children}
    </Link>
  );
}

function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
}