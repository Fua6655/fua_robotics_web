import type { Metadata } from "next";
import Post from "./post";

export const metadata: Metadata = {
  title:
    "Kina 2025 — Sveobuhvatne mjere za AI i što to znači za sigurnost | FUA Robotics",
  description:
    "Analiza kineskih mjera za upravljanje generativnom i sintetičkom sadržaju (2025), implikacije za sigurnost i poveznica s deepfake napadima putem video-konferencija.",
  openGraph: {
    title: "Kina 2025 — Sveobuhvatne mjere za AI i što to znači za sigurnost",
    description:
      "Pregled novih pravila za označavanje AI-generiranog sadržaja, postojeće Interim Measures i rizika deepfake video-napada.",
    url: "https://fua-robotics.vercel.app/blog/kina-2025",
    siteName: "FUA Robotics",
    type: "article"
  }
};

export default function Page() {
  return <Post />;
}
