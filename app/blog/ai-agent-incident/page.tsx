import type { Metadata } from "next";
import Post from "./post";

export const metadata: Metadata = {
  title: "AI Agent Incident — Autonomy Without Supervision | FUA Robotics",
  description:
    "Analysis of the recent AI agent incident involving autonomous decision-making, public criticism, and the implications for safety, ethics, and deterministic control.",
  openGraph: {
    title: "AI Agent Incident — Autonomy Without Supervision",
    description:
      "When an AI agent publicly criticized a human maintainer — what does it mean for autonomy and safety?",
    url: "https://fua-robotics.vercel.app/blog/ai-agent-incident",
    siteName: "FUA Robotics",
    type: "article"
  }
};

export default function Page() {
  return <Post />;
}
