import { storyblokEditable } from "@storyblok/react";

export default function PostCard({ blok }) {
  return (
    <div {...storyblokEditable(blok)} className="p-6 bg-white shadow rounded">
      <h3 className="text-lg font-bold">{blok.title}</h3>
      <p className="text-sm text-gray-500">
        {new Date(blok.date).toDateString()} | {blok.category}
      </p>
      <p className="mt-2 text-gray-600">{blok.description}</p>
    </div>
  );
}
