import { connectToDB } from "@/libs/mongo/script";
import Todo from "@/libs/mongo/todo";
import { NextResponse } from "next/server";
export async function POST(request) {
  const {title, description} = await request.json();
  await connectToDB();
  await Todo.create({title, description});
  return NextResponse.json({message: "Topic created"}, {status: 201});
}

export async function GET() {
  await connectToDB();
  const todos = await Todo.find();
  return NextResponse.json({todos});
}


export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get('id');
  await connectToDB();
  await Todo.findByIdAndDelete(id);
  return NextResponse.json({message: "Todo deleted"}, {status: 200});
}