import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";

export const dynamic = "force-dynamic"; // Ensure this page is not statically prerendered

const fetchStatPage = async () => {
  const client = getStoryblokApi();
  const response = await client.getStory(`statistics`, {
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
  });
  return response.data.story;
};

const StatisticsPage = async () => {
  const story = await fetchStatPage();
  return <StoryblokStory story={story} />;
};

export default StatisticsPage;
