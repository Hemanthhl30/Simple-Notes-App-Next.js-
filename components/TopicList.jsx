// components/TopicList.jsx
import RemoveButton from "./RemoveButton";
import EditButton from "./EditButton";

const getTopics = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"; 
  try {
    const res = await fetch(`${apiUrl}/api/topics`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    const data = await res.json(); // { topics: [...] }
    console.log("API DATA:", data);
    return data; 
  } catch (error) {
    console.error("Error fetching topics: ", error);
    return { topics: [] }; 
  }
};

export default async function TopicList() {
  const { topics } = await getTopics();

  return (
    <>
      {topics.length > 0 ? (
        topics.map((topic) => (
          <div
            key={topic._id}
            className="p-4 border border-gray-200 bg-white my-3 flex justify-between gap-5 rounded"
          >
            <div>
              <h2 className="font-bold text-2xl">{topic.title}</h2>
              <p>{topic.description}</p>
            </div>
            <div className="flex gap-2">
              <RemoveButton id={topic._id} />
              <EditButton id={topic._id} />
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No topics found.</p>
      )}
    </>
  );
}
