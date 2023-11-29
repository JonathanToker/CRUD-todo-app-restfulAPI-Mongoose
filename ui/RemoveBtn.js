"use client";
import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";
const RemoveBtn = ({ id }) => {
  const router = useRouter();
  const removeTodo = async () => {
    // This will remove it with the id
    const confirmed = confirm("Are you sure you want to delete?");
    if (confirmed) {
      const res = await fetch(`https://crud-app-restful-api-mongoose.vercel.app/api/todos?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        router.refresh();
      }
    }
  };
  return (
    <button onClick={removeTodo} className="text-red-500 bg-red-500">
      <HiOutlineTrash size={24} />
    </button>
  );
};

export default RemoveBtn;
