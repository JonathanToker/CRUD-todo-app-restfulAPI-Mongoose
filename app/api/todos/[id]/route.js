// "use server"; not sure if needed?
import { connectToDB } from "@/libs/mongo/script";
import Todo from "@/libs/mongo/todo";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const {id} = params;
  const { newTitle: title, newDescription: description } = await request.json();
  await connectToDB();
  await Todo.findByIdAndUpdate(id, {title, description});
  const todo = Todo.findById(id);
  //without schema validation, if want validation then .save()
  return NextResponse.json({message: "Todo updated"}, {status: 200});
}

export async function GET(request, {params}) {
  const {id} = params;
  await connectToDB();
  const todo = await Todo.findOne({_id: id});
  return NextResponse.json({todo}, {status: 200});
}