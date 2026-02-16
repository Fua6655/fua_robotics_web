import type { Metadata } from "next";
import BlogIndex from "./blog-index";

export const metadata: Metadata = {
  title: "Blog | FUA Robotics",
  description:
    "Bilješke s terena i tehničke perspektive FUA Robotics tima o autonomiji, HMI i robotici u poljoprivredi.",
  openGraph: {
    title: "FUA Robotics Blog",
    description:
      "Bilješke s terena i tehničke perspektive o autonomiji, HMI i robotici u poljoprivredi.",
    url: "https://fua-robotics.vercel.app/blog",
    siteName: "FUA Robotics",
    type: "website"
  }
};

export default function Page() {
  return <BlogIndex />;
}
