// app/verify/[id]/page.tsx
import Image from "next/image";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import signaturesData from "@/data/signatures.json";

// Interface untuk data signature
interface SignatureData {
  signerName: string;
  documentTitle: string;
  date: string;
  description: string;
  signatureUrl: string;
  qrCodeUrl?: string;
}

type SignaturesDatabase = Record<string, SignatureData>;

async function getSignatureData(id: string): Promise<SignatureData | null> {
  const signatures = signaturesData as SignaturesDatabase;
  return signatures[id] || null;
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  return {
    title: "e-Signature QR Check :: PORTAL GSIC",
    description: "E-Signature verification page",
    viewport:
      "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
  };
}

export default async function VerifyPage({
  params,
}: {
  params: { id: string };
}) {
  const data = await getSignatureData(params.id);

  // Jika data tidak ditemukan, tampilkan 404
  if (!data) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-signature flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Background watermark */}
        <div
          className="relative p-6 md:p-8"
          style={{
            // backgroundImage: 'url("/images/slider/bg-main.png")',
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
          }}
        >
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-shrink-0">
              <Image
                src="/images/logo.webp"
                alt="Cii Logo"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-1">Portal</h4>
              <h5 className="text-base text-gray-700">
                This e-Signature is valid.
              </h5>
            </div>
          </div>

          <hr className="border-gray-300 mb-6" />

          {/* Main Content */}
          <div className="text-center space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
              {data.signerName} E-Signature for {data.documentTitle}
            </h3>

            <h4 className="text-xl text-gray-700 font-medium">{data.date}</h4>

            <p className="text-base text-gray-600 leading-relaxed px-4">
              {data.description}
            </p>
          </div>

          <hr className="border-gray-300 my-6" />

          {/* Signature Image */}
          <div className="flex justify-center mb-6">
            <div className="relative w-[190px] h-[60px]">
              <Image
                src={data.signatureUrl}
                alt="Digital Signature"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Footer Note */}
          <div className="text-center">
            <small className="text-gray-500 text-base">
              Uncontrolled when printed or downloaded. Refer to the digital
              version in the official document management system
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}
