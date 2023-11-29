"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
const AddTopic = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and Description are required!");
      return;
    }
    try {
      const res = await fetch("https://crud-app-restful-api-mongoose.vercel.app/api/todos", {
        method: "POST",
        header: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({title, description})
      });

      if (res.ok) {
        router.push('/');
        router.refresh();
      } else {
        throw new Error("Failed to create a todo");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="border border-slate-500 px-8 py-2 dark:bg-slate-800 dark:text-white"
        type="text"
        placeholder="Topic title"
      />
      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="border border-slate-500 px-8 py-2 dark:bg-slate-800 dark:text-white"
        type="text"
        placeholder="Topic Description"
      />
      <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Add Todo
      </button>
    </form>
  );
};

export default AddTopic;
