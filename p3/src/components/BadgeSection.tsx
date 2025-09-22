import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { BadgeSectionProps } from "@/types/storyblok";

const BadgeSection = ({ blok }: BadgeSectionProps) => {
const {
  headline = "",
  badges = [],
  button_text = "",
  button_link,
  background_color = {},
  link_bg_color = {},
} = blok || {}; // fallback if blok is null/undefined

  //Assign safe values with fallbacks
const sectionBg = background_color?.color || "#F2F2F2";
const buttonBg = link_bg_color?.color || "#004E94";

const linkUrl = button_link?.url || "";
const linkTarget = button_link?.target || "_self";
const linkRel = linkTarget === "_blank" ? "noopener noreferrer" : undefined;


  return (
    <section
      {...storyblokEditable(blok)}
      className="py-15.5 px-6 h-auto w-auto"
      style={{ backgroundColor: sectionBg }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">{headline}</h2>

        {/* Badge Cards */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {badges?.map((badge) => (
            <StoryblokComponent blok={badge} key={badge._uid} />
          ))}
        </div>

        {/* CTA */}
        {button_text && (
          <div className="mt-10">
            <a
              href={linkUrl}
              target={linkTarget}
              rel={ linkRel }
              style={{ backgroundColor: buttonBg }}
              className="text-[18px] font-semibold text-white px-6 py-3 rounded-[5px] border border-white "
            >
              {button_text}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default BadgeSection;
