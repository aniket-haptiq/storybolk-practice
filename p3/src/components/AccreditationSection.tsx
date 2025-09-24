import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";

type AccreditationProps = {
  blok: {
    logo: {
      filename: string;
      alt?: string;
    };
    title: string;
    link_url: {
      url: string;
      cached_url: string;
    };
    link_text: string;
  };
};

const AccreditationSection = ({ blok }: AccreditationProps) => {
  return (
    <section
      className="max-w-4xl mx-auto p-6 flex flex-col items-center text-center border rounded-lg shadow-sm bg-white"
      {...storyblokEditable(blok)}
    >
      {blok.logo?.filename && (
          <Image
                  src={blok.logo.filename}
                  alt={blok.logo.filename}
                  width={100}
                  height={100}
                  className="w-24 h-24 mb-4"
                />
      )}

      <p className="text-gray-700 text-lg mb-3">{blok.title}</p>

       {blok.link_url?.url && (
        <a
            href={blok.link_url.url}
                className="text-blue-600 font-medium hover:underline"
            >
            {blok.link_text}
      </a>
       )}

     
    </section>
  );
};


export default AccreditationSection;