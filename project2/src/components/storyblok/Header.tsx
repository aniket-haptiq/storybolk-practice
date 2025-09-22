import { storyblokEditable } from "@storyblok/react";

export default function Header({ blok }) {
  return (
    <header {...storyblokEditable(blok)} className="flex justify-end gap-8 p-6">
      {blok.nav_links?.map((link, index) => (
        <a key={index} href="#" className="text-gray-700 hover:text-black">
          {link}
        </a>
      ))}
    </header>
  );
}
