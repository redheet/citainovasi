"use client";

// import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-300 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 md:p-8">
          {/* Header with Logo */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-shrink-0">
              <Image
                src="/images/logo.webp"
                alt="CII Logo"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-1">
                e-Signature Verification
              </h4>
              <h5 className="text-base text-red-600">E-Signature Not Found</h5>
            </div>
          </div>

          <hr className="border-gray-300 mb-8" />

          {/* Lottie Animation */}
          <div className="flex justify-center mb-6">
            <DotLottieReact
              src="/dotfiles/nodataanimation.lottie"
              loop
              autoplay
            />
          </div>

          {/* Error Message */}
          <div className="text-center space-y-4 mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
              Signature Not Found
            </h3>

            <p className="text-base text-gray-600 leading-relaxed px-4">
              The e-signature you&apos;re looking for doesn&apos;t exist or has
              been removed. Please check the URL and try again.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/"
              className="px-6 py-3 bg-blue-600  rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Go to Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
            >
              Go Back
            </button>
          </div>

          <hr className="border-gray-300 my-8" />

          {/* Footer */}
          <div className="text-center">
            <small className="text-gray-500 text-xs">
              If you believe this is an error, please contact support
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}
