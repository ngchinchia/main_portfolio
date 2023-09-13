import { NextResponse } from "next/server";
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";
import { Experience } from "@/typings";

const query = groq`*[_type == "experience"]{
    ...,
    technologies[]->
  }`;

// type Data = {
//   experience: Experience[];
// };

export async function GET() {
  try {
    const experience: Experience[] = await sanityClient.fetch(query);
    return NextResponse.json({ experience });
  } catch (error) {
    console.error("Error fetching experience data:", error);
  }
}
