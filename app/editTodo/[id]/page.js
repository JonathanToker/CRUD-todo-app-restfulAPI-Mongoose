import EditTodo from "@/ui/EditTodo"

const getTodoById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/${id}`, {cache: "no-store"});
    
    if (!res.ok) {
      throw new Error("Failed to fetch todo");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

const Page = async ({params}) => {
  const {id} = params;
  const {todo} = await getTodoById(id);
  const {title, description} = todo;

  return <EditTodo id={id} title={title} description={description} />
}

export default Page