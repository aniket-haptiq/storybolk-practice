import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import Link from "next/link";
import { AccreditationProps } from "@/types/storyblok";

const AccreditationSection = ({ blok }: AccreditationProps) => {
  const {
    logo,
    title = "",
    link_url,
    link_text = "",
    bg_sec_col = {},
    title_col = {},
    link_text_col = {},
  } = blok || {};

  // Safe variables
  const linkLearnMore = link_url?.url || "";
  const linkTarget = link_url?.target || "_self";
  const linkRel = linkTarget === "_blank" ? "noopener noreferrer" : undefined;

  const sectionBg = bg_sec_col?.color || "#FFFFFF";
  const titleCol = title_col?.color || "#19232D";
  const linkCol = link_text_col?.color || "#004E94";

  return (
    <div className="px-4 py-15 sm:px-6 md:px-10 lg:px-20">
      <section
        className="relative text-center border border-gray-500 rounded-lg shadow-lg 
               py-8 sm:py-12 md:py-16 lg:py-20 
               max-w-md sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto"
        style={{ backgroundColor: sectionBg }}
        {...storyblokEditable(blok)}
      >
        {/* Logo at top center */}
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
          {logo?.filename && (
            <Image
              src={logo.filename}
              alt={logo.alt || title || "Accreditation Logo"}
              width={100}
              height={100}
              className="mx-auto w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
            />
          )}
        </div>

        {/* Title */}
        {title && (
          <p
            className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 p-2"
            style={{ color: titleCol }}
          >
            {title}
          </p>
        )}

        {/* Link */}
        {linkLearnMore && (
          <Link
            href={linkLearnMore}
            target={linkTarget}
            rel={linkRel}
            className="font-bold hover:none text-sm sm:text-base md:text-lg"
            style={{ color: linkCol }}
          >
            {link_text}
          </Link>
        )}
      </section>
    </div>
  );
};

export default AccreditationSection;
