// /app/not-found.tsx

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] text-center px-4">
      <h1 className="text-6xl font-bold text-text-primary mb-4">404</h1>
      <h2 className="text-2xl font-heading mb-2">Page Not Found</h2>
      <p className="text-text-primary mb-6 max-w-md">
        The page you are looking for does not exist. It might have been moved or deleted.
      </p>
      <Link 
        href="/" 
        className="px-6 py-3 bg-text-primary text-background font-sans hover:bg-opacity-80 transition-colors"
      >
        Return to Homepage
      </Link>
    </div>
  );
}