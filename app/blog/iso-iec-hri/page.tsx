import type { Metadata } from "next";
import Post from "./post";

export const metadata: Metadata = {
  title: "ISO & IEC Standards for Human–Robot Interaction | FUA Robotics",
  description:
    "Detailed technical analysis of ISO and IEC standards relevant to Human–Robot Interaction (HRI), including ISO 10218, ISO/TS 15066, ISO 13482, and ISO/IEC 42001.",
  openGraph: {
    title: "ISO & IEC Standards for Human–Robot Interaction",
    description:
      "What changed in recent robot and AI standards and what it means for safe human–machine interaction design.",
    url: "https://fua-robotics.vercel.app/blog/iso-iec-hri",
    siteName: "FUA Robotics",
    type: "article"
  }
};

export default function Page() {
  return <Post />;
}
