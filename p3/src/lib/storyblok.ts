import { storyblokAPI } from "@/app/components/storyblok";

const storyblokApi = storyblokAPI();

export async function fetchStory(slug: string) {
  const { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
    version: "draft",
  });
  return data.story;
}
