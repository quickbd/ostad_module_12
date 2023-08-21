import { NextResponse } from "next/server";
export async function GET(request) {
  const res = await fatch(
    "https://basic-blog.teamrabbil.com/api/post-categories",
    {
      Cache: "force-cache",
      next: {
        revalidate: 60,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Fetching Api error");
  }
  return NextResponse.json(res);
}
