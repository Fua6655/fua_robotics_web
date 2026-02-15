import { redirect } from "next/navigation";

export default function Page() {
  // Default to English for the root path.
  redirect("/en");
}
