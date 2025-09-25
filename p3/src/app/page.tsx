import { StoryblokComponent } from "@storyblok/react";
import { fetchStory } from "@/lib/storyblok";

export default async function Home() {
  const story = await fetchStory("home");

  return (
    <main>
      <StoryblokComponent blok={story.content} />
    </main>
  );
}
