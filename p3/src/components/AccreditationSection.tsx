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
    <div className="py-15.5 px-6">
      <section
        className="container mx-auto text-center mt-15"
        style={{ backgroundColor: sectionBg }}
        {...storyblokEditable(blok)}
      >
        <div className="relative">
          {/* Logo at top center */}
          <div
            className="absolute left-1/2 -translate-x-1/2   -top-18
                      sm:-top-18                         
                      md:-top-18                         
                      lg:-top-19                          "
          >
            {logo?.filename && (
              <Image
                src={logo.filename}
                alt={logo.alt || title || "Accreditation Logo"}
                width={154}
                height={154}
              />
            )}
          </div>

          <div className="rounded-lg shadow-[0px_1px_20px_0px_#0000001A] p-4">
            {/* Title */}
            {title && (
              <p
                className="sm:text-lg md:text-xl lg:text-2xl mb-3 mt-18 "
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccreditationSection;
