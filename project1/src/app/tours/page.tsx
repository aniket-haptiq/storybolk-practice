import { RecommendedTour } from "@/components/RecommendedTour";
import { getStoryblokApi } from "@storyblok/react/rsc";
import { StoryblokComponent } from "@storyblok/react";

// Force this page to run dynamically on every request
export const dynamic = "force-dynamic";

// Fetch a general "tours" page story
const fetchTourPage = async () => {
  const client = getStoryblokApi();
  const response = await client.getStory(`tours`, {
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
  });

  return response.data.story;
};

// Fetch all individual tour stories
const fetchAllTours = async () => {
  const client = getStoryblokApi();
  const response = await client.getStories({
    content_type: "tour",
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
  });

  return response.data.stories;
};

const TourPage = async () => {
  const story = await fetchTourPage();
  const tours = await fetchAllTours();

  return (
    <div>
      <StoryblokComponent blok={story.content} />
      <div className="grid md:grid-cols-2 gap-8 container mx-auto px-4 w-full py-16">
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {tours.map((tour: any) => (
          <RecommendedTour story={tour} key={tour.content._uid} />
        ))}
      </div>
    </div>
  );
};

export default TourPage;
