import { useProtectedRoute } from "@/hooks/useProtectedRoute";
import { NavBar } from "@/components/Navigation/NavBar";

export default function ProfilePage() {
  const { user } = useProtectedRoute();

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-black">
      <NavBar />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm">
          <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Profile</h1>
          
          <div className="space-y-4">
            <div>
              <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</h2>
              <p className="mt-1 text-lg text-gray-900 dark:text-white">{user.email}</p>
            </div>
            
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400">Account</h2>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                Member since {new Date(user.created_at).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}