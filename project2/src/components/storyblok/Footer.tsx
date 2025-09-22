import { storyblokEditable } from "@storyblok/react";

export default function Footer({ blok }) {
  return (
    <footer {...storyblokEditable(blok)} className="text-center py-6 mt-10 border-t">
      <div className="flex justify-center gap-6 mb-4">
        {blok.social_links?.map((social) => (
          <img key={social._uid} src={social.social_icon?.filename} alt="icon" className="w-6 h-6" />
        ))}
      </div>
      <p className="text-sm text-gray-500">{blok.copyright}</p>
    </footer>
  );
}
