import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

export default function RecentPosts({ blok }) {
  return (
    <section {...storyblokEditable(blok)} className="bg-blue-50 px-6 py-10">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">{blok.title}</h2>
        <a href="#" className="text-blue-500">
          View all
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {blok.posts?.map((post) => (
          <StoryblokComponent blok={post} key={post._uid} />
        ))}
      </div>
    </section>
  );
}
