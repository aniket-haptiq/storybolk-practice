import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";

// Mark this page as dynamic
export const dynamic = "force-dynamic";

const client = getStoryblokApi();
export const generateStaticParams = async () => {
  const response = await client.getStories({
    content_type: "tour",
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
  });

  return response.data.stories.map((story) => ({
    slug: story.slug,
  }));
};

const fetchTourPage = async (slug: string) => {
  const client = getStoryblokApi();
  const response = await client.getStory(`tours/${slug}`, {
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
  });

  return response.data.story;
};

const TourPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const story = await fetchTourPage(slug);

  return <StoryblokStory story={story} />;
};

export default TourPage;
