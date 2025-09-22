import { storyblokEditable } from "@storyblok/react";

export default function WorkCard({ blok }) {
  return (
    <div {...storyblokEditable(blok)} className="flex gap-6">
      <img src={blok.image?.filename} alt={blok.image?.alt} className="w-48 h-36 object-cover rounded" />
      <div>
        <h3 className="text-lg font-bold">{blok.title}</h3>
        <p className="text-sm text-gray-500">{blok.year} • {blok.category}</p>
        <p className="mt-2 text-gray-600">{blok.description}</p>
      </div>
    </div>
  );
}
