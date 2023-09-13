import { NextResponse } from "next/server";
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";
import { Skill } from "@/typings";

const query = groq`*[_type == "skill"]`;

// type Data = {
//     skills: Skill[]
// }

export async function GET() {
  try {
    const skills: Skill[] = await sanityClient.fetch(query);
    return NextResponse.json({ skills });
  } catch (error) {
    console.error("Error fetching social data:", error);
  }
}
