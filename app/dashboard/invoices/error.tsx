'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex-col flex h-full items-center justify-center">
      <h2 className="text-center">Something rent wrong!</h2>
      <button
        className="text-white-transition-colors mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white hover:bg-blue-400"
        onClick={() => reset()}
      >
        Try again
      </button>
    </main>
  );
}
