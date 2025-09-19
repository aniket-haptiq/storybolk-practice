import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";

// Mark this page as dynamic
export const dynamic = "force-dynamic";

export const generateStaticParams = async () => {
  const client = getStoryblokApi();
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


  if (!story) {
    return (
      <div className="container mx-auto py-16 text-center text-gray-600">
        <h1 className="text-2xl font-semibold">Tour Page Not Found</h1>
        <p className="mt-2">
          Please check your Storyblok space or publish the content.
        </p>
      </div>
    );
  }

  return <StoryblokStory story={story} />;
};

export default TourPage;
