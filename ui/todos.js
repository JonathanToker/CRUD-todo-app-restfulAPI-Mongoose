import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

const getTodos = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/todos", {cache:"no-store"});
    if (!res.ok) {
      throw new Error("Failed to fetch todos");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export default async function TodosList() {
  const { todos } = await getTodos();

  return (
    <>
      {todos.map((t) => (
        <div
          key={t._id}
          className="p-4 border border-slate-400 my-3 flex justify-between gap-5 items-start mb-2"
        >
          <div>
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <div>{t.description}</div>
          </div>

          <div className="flex gap-2">
            <RemoveBtn id={t._id} />
            <Link href={`/editTodo/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}