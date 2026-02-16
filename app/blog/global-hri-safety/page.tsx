import type { Metadata } from "next";
import Post from "./post";

export const metadata: Metadata = {
  title: "Global HRI Safety Landscape — Europe, China, USA | FUA Robotics",
  description:
    "Deep technical comparison of NIST AI RMF, ISO/IEC standards, and EU AI Act in the context of ROS2-based robotic systems and Human–Robot Interaction.",
  openGraph: {
    title: "Global HRI Safety Landscape — Deep Technical Analysis",
    description:
      "How NIST, ISO, and EU AI Act frameworks apply to ROS2 distributed robotic systems.",
    url: "https://fua-robotics.vercel.app/blog/global-hri-safety",
    siteName: "FUA Robotics",
    type: "article"
  }
};

export default function Page() {
  return <Post />;
}
