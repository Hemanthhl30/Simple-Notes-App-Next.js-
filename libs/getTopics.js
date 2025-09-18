// libs/getTopics.js

export default async function getTopics() {
  const apiUrl = process.env.API_URL || "http://localhost:3000";

  try {
    const res = await fetch(`${apiUrl}/api/topics`, {
      cache: "no-store", // ensures fresh data
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch topics: ${res.statusText}`);
    }

    const data = await res.json();
    return data; // ✅ { topics: [...] }
  } catch (error) {
    console.error("Error fetching topics:", error);
    return { topics: [] }; // ✅ fallback to avoid undefined
  }
}
