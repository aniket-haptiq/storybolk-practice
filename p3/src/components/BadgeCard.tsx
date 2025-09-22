import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import { BadgeCardProps } from "@/types/storyblok";

const BadgeCard = ({ blok }: BadgeCardProps) => {
  const { title, description, lm_text, lm_link, image, background_color_card } = blok;

  return (
    <div
      {...storyblokEditable(blok)}
      className="shadow-[0px_8px_16px_0px_#0000000A] rounded-lg p-6 flex flex-col items-center text-center align-middle "
      style={{ backgroundColor: background_color_card?.color }}
    >
      {image?.filename && (
        <Image
          src={image.filename}
          alt={image.alt || title}
          width={100}
          height={100}
          className="mb-3"
        />
      )}

      <h3 className="text-[#19232D99] font-['Titillium_Web'] font-bold text-[18px] leading-[24px] tracking-[0%] mb-2">{title}</h3>

      {description && <p className="text-[#19232D] font-[Arial] font-normal text-[10px] leading-[12px] tracking-[0] mb-2">{description}</p>}

      {lm_link?.url && (
        <a href={lm_link.url} className="text-[#004E94] font-[Arial] font-bold text-[14px] leading-[150%] tracking-[0]">
          {lm_text}
        </a>
      )}
    </div>
  );
};

export default BadgeCard;
