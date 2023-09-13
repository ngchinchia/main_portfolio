// app/route.ts
import {NextResponse } from 'next/server';

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos/1"
export async function GET() {
  // Your logic for handling GET requests goes here
  const res = await fetch(DATA_SOURCE_URL)
  
  const todos = await res.json()
  // Return a NextResponse with a JSON payload
  return NextResponse.json(todos)
}
