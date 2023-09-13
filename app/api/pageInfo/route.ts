import { NextResponse } from "next/server";
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";
import { PageInfo } from "@/typings";

const query = groq`*[_type == "pageInfo"]{
    ...,
    socials[]->
  }`;


export async function GET() {
  try {
    const pageInfo: PageInfo[] = await sanityClient.fetch(query);
    return NextResponse.json({ pageInfo });
  } catch (error) {
    console.error("Error fetching PageInfo data:", error);
  }
}
