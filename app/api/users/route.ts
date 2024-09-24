import { NextResponse } from "next/server";

export async function Get(request: Request) {
  return NextResponse.json({
    users: [
      { id: 1, name: "ehtmd" },
      { id: 2, name: "Bob" },
      { id: 3, name: "동동" },
    ],
  });
}
