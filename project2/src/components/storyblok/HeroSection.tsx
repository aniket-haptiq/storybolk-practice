import { storyblokEditable } from "@storyblok/react";

export default function HeroSection({ blok }:any) {
  return (
    <section {...storyblokEditable(blok)} className="flex justify-between items-center px-6 py-12">
      <div className="max-w-lg">
        <h1 className="text-4xl font-bold">{blok.name}</h1>
        <h2 className="text-2xl text-gray-700">{blok.title}</h2>
        <p className="mt-4 text-gray-600">{blok.description}</p>
        <button className="mt-6 px-6 py-2 bg-red-500 text-white rounded">
          {blok.resume_button}
        </button>
      </div>
      <img src={blok.profile_image?.filename} alt="Profile" className="w-40 h-40 rounded-full" />
    </section>
  );
}
