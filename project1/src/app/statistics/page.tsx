import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";

export const dynamic = "force-dynamic"; // Always fetch fresh data

const fetchStatPage = async () => {
  try {
    const client = getStoryblokApi();
    const response = await client.getStory("statistics", {
      version: process.env.NODE_ENV === "development" ? "draft" : "published",
    });
    return response.data.story;
  } 
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  catch (error: any) {
    console.error("Error fetching statistics story:", error?.message || error);
    return null; // return null if not found
  }
};

const StatisticsPage = async () => {
  const story = await fetchStatPage();

  if (!story) {
    return (
      <div className="container mx-auto py-16 text-center text-gray-600">
        <h1 className="text-2xl font-semibold">Statistics Page Not Found</h1>
        <p className="mt-2">
          Please check your Storyblok space or publish the content.
        </p>
      </div>
    );
  }

  return <StoryblokStory story={story} />;
};

export default StatisticsPage;
