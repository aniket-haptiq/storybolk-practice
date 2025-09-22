import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import { BadgeCardProps } from "@/types/storyblok";

const BadgeCard = ({ blok }: BadgeCardProps) => {
  const {
    title = "",
    description = "",
    lm_text = "",
    lm_link,
    image ,
    background_color_card = {},
    card_title_color = {},
    card_desc_col = {},
    card_link_col = {},
  } = blok || {}; // safe destructure if blok is null/undefined

  // Assign safe values with fallbacks
  const cardBgColor = background_color_card?.color || "#FFFFFF";
  const cardTitleColor = card_title_color?.color || "#19232D99";
  const cardDescColor = card_desc_col?.color || "#19232D";
  const cardLinkColor = card_link_col?.color || "#004E94";

  const imageUrl = image?.filename || "";
  const imageAlt = image?.alt || title;

  const linkUrl = lm_link?.url || "";
  const linkTarget = lm_link?.target || "_self";
  const linkRel = linkTarget === "_blank" ? "noopener noreferrer" : undefined;

  return (
    <div
      {...storyblokEditable(blok)}
      className="shadow-[0px_8px_16px_0px_#0000000A] rounded-lg p-6 flex flex-col items-center text-center align-middle "
      style={{ backgroundColor: cardBgColor}}
    >
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={100}
          height={100}
          className="mb-3"
        />
      )}

      <h3
        className="font-bold text-[18px] leading-[24px] tracking-[0%] mb-2"
        style={{ color: cardTitleColor}}
      >
        {title}
      </h3>

      {description && (
        <p
          className="font-[Arial] font-normal text-[10px] leading-[12px] tracking-[0] mb-2"
          style={{ color: cardDescColor }}
        >
          {description}
        </p>
      )}

      {linkUrl&& (
        <a
          href={linkUrl}
          target={linkTarget}
          rel={linkRel}
          className="font-[Arial] font-bold text-[14px] leading-[150%] tracking-[0]"
          style={{ color: cardLinkColor}}
        >
          {lm_text}
        </a>
      )}
    </div>
  );
};

export default BadgeCard;
