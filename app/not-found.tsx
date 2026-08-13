import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-7xl font-extrabold text-brand-blue mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-brand-black mb-2">
        Page Not Found
      </h2>
      <p className="text-brand-text max-w-md mb-8">
        Sorry, the page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-accent text-white font-medium px-6 py-3 rounded-brand-md transition-colors"
      >
        ← Back to Home
      </Link>
    </section>
  );
}
