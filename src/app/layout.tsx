import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/style.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cita Inovasi Indonesia",
  description: "Dalam era globalisasi yang semakin kompetitif, penguasaan ilmu pengetahuan dan teknologi menjadi faktor penentu kemajuan suatu bangsa. Indonesia, sebagai negara dengan potensi sumber daya manusia yang besar, dituntut untuk terus meningkatkan kualitas pendidikan, khususnya di bidang sains.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
