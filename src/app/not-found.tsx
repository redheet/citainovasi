"use client";

import Link from "next/link";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-[600px] h-[600px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px] mb-6">
        <DotLottieReact
          src="/dotfiles/404-3.lottie"
          loop
          autoplay
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center min-w-[160px]"
        >
          Back to Home
        </Link>

        <button
          onClick={() => window.history.back()}
          className="px-6 py-3 bg-gray-200 text-gray rounded-lg hover:bg-gray-300 transition-colors min-w-[160px]"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
