import EditTodo from "@/ui/EditTodo"

const getTodoById = async (id) => {
  try {
    const res = await fetch(`https://crud-app-restful-api-mongoose-git-main-yonatan-tokers-projects.vercel.app/${id}`, {cache: "no-store"});
    
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