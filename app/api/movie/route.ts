import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.formData();
    const movie = body.get("favorite-movie");
    const redirectTo = new URL("/movie/", request.url);
    redirectTo.searchParams.set("favorite", movie.toString());
    return NextResponse.redirect(redirectTo);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      {
        message: "Ups! El servidor no responde, intenta más tarde",
      },
      {
        status: 500,
      }
    );
  }
}
