// app/edit-topic/[id]/page.jsx
import EditTopicForm from "@/components/EditTopicForm";

const getTopicById = async (id) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
  try {
    const res = await fetch(`${apiUrl}/api/topics/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to get the topic");
    }

    return res.json(); // { topic: {...} }
  } catch (error) {
    console.error("Error fetching topic:", error);
    return { topic: null };
  }
};

export default async function EditTopic({ params }) {
  const { id } = params;
  const { topic } = await getTopicById(id);

  if (!topic) {
    return <p className="text-red-500">Topic not found</p>;
  }

  const { title, description } = topic;

  return <EditTopicForm id={id} title={title} description={description} />;
}
