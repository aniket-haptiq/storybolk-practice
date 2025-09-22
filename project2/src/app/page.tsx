import { StoryblokComponent, getStoryblokApi } from "@storyblok/react";
import "@/lib/storyblok"; // 👈 ensure storyblokInit runs



async function fetchStory() {
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get("cdn/stories/home", {
    version: "draft",
  });
  return data.story;
}

export default async function HomePage() {
  const story = await fetchStory();
  return <StoryblokComponent blok={story.content} />;
}
