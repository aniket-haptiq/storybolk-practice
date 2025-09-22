import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

export default function FeaturedWorks({ blok }) {
  return (
    <section {...storyblokEditable(blok)} className="px-6 py-10">
      <h2 className="text-xl font-bold mb-6">{blok.title}</h2>
      <div className="flex flex-col gap-8">
        {blok.works?.map((work) => (
          <StoryblokComponent blok={work} key={work._uid} />
        ))}
      </div>
    </section>
  );
}
