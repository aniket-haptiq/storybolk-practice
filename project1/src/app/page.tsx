import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";

export const dynamic = "force-dynamic"; // Ensure this page is not statically prerendered

const fetchHomePage = async () => {
  const client = getStoryblokApi();
  const response = await client.getStory(`home`, {
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
    resolve_relations: "recommended_tours.tours",
  });
  return response.data.story;
};

const HomePage = async () => {
  const story = await fetchHomePage();

  if (!story) {
    return (
      <div className="container mx-auto py-16 text-center text-gray-600">
        <h1 className="text-2xl font-semibold">Home Page Not Found</h1>
        <p className="mt-2">
          Please check your Storyblok space or publish the content.
        </p>
      </div>
    );
  }
  return <StoryblokStory story={story} />;
};

export default HomePage;
