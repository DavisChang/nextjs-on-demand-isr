// app/api/revalidate/route.js
import axios from "axios";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(req) {
  const { searchParams } = new URL(req.url);
  const secret = searchParams.get("secret");
  const id = searchParams.get("id");

  if (secret !== process.env.MY_SECRET_TOKEN) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  try {
    // Make a request to the page you want to revalidate
    await axios.get(`http://localhost:3000/photo/${id}`);
    return NextResponse.json({ revalidated: true });
  } catch (err) {
    console.error("Error revalidating", err);
    return NextResponse.json(
      { message: "Error revalidating" },
      { status: 500 }
    );
  }
}
