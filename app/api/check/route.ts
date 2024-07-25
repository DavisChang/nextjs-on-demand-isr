import { unstable_noStore as noStore } from "next/cache";

export async function GET() {
  noStore(); // Opt-into dynamic rendering
  const data = {
    VERSION: process.env.VERSION || "VERSION",
    NODE_ENV: process.env.NODE_ENV || "NODE_ENV",
    MY_SECRET_TOKEN: process.env.MY_SECRET_TOKEN || "MY_SECRET_TOKEN",
    NEXT_PUBLIC_ANALYTICS_ID:
      process.env.NEXT_PUBLIC_ANALYTICS_ID || "NEXT_PUBLIC_ANALYTICS_ID",
  };

  return Response.json({ data });
}
