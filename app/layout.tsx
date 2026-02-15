import "./globals.css";
import { Geist } from "next/font/google";
import type { Metadata } from "next";

const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "FUA Robotics",
  description:
    "FUA Robotics develops context-aware autonomous systems based on modular ROS2 architecture for human-shared agricultural and urban environments."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geist.className} bg-white text-gray-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
