import type { Metadata } from "next";
import Post from "./post";

export const metadata: Metadata = {
  title: "Robotika u poljoprivredi | FUA Robotics",
  description:
    "Strukturirani pregled ROS2 autonomnog okvira za kompaktne robote u poljoprivrednim okruženjima dijeljenim s ljudima.",
  openGraph: {
    title: "Robotika u poljoprivredi",
    description:
      "Pregled autonomije, sigurnosti i arhitekture sustava za poljoprivredne robotske platforme.",
    url: "https://fua-robotics.vercel.app/blog/mobilna-robotika",
    siteName: "FUA Robotics",
    type: "article"
  }
};

export default function Page() {
  return <Post />;
}
