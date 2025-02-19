export async function fetchImageDetails(imageId) {
  try {
    const response = await fetch(`https://picsum.photos/id/${imageId}/info`);

    // Check if response is OK (status 200)
    if (!response.ok) {
      throw new Error(`Failed to fetch image details: ${response.statusText}`);
    }

    // Ensure the response is JSON before parsing
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("Invalid response format (not JSON)");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching image details:", error);
    return null; // Return null so the UI can handle errors gracefully
  }
}
