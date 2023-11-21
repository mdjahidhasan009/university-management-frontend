// import { NextApiRequest, NextApiResponse } from "next";
import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

// export async function POST(req: NextApiRequest, res: NextApiResponse) {
export async function POST(req: NextRequest, res: NextApiResponse) {
  return NextResponse.json({ name: "File uploaded" });
}