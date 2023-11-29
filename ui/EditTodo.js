"use client";
import React from 'react'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
const EditTopic = ({id, title, description}) => {

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newTitle || !newDescription) {
      alert("Title and Description are required!");
      return;
    }
    try {
      const res = await fetch(`https://crud-app-restful-api-mongoose.vercel.app/api/todos/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({newTitle, newDescription})
      });
      
      if (!res.ok) {
        throw new Error("Failed to update todo");
      }
      router.push("/");
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  }
  
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const router = useRouter();

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        className="border border-slate-500 px-8 py-2 dark:bg-slate-800 dark:text-white"
        type="text"
        placeholder="Topic title"
      />
      <input
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        className="border border-slate-500 px-8 py-2 dark:bg-slate-800 dark:text-white"
        type="text"
        placeholder="Topic Description"
      />
      <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Update Todo
      </button>
    </form>
  )
}

export default EditTopic