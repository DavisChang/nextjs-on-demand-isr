export async function GET() {
  const data = {
    MY_SECRET_TOKEN: process.env.MY_SECRET_TOKEN || "MY_SECRET_TOKEN",
    NEXT_PUBLIC_ANALYTICS_ID:
      process.env.NEXT_PUBLIC_ANALYTICS_ID || "NEXT_PUBLIC_ANALYTICS_ID",
  };

  return Response.json({ data });
}
