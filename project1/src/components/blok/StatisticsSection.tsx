import { storyblokEditable, SbBlokData } from "@storyblok/react";

interface DataPoint extends SbBlokData {
  primary_text: string;
  secondary_text: string;
}

interface StatisticsSectionBlok extends SbBlokData {
  heading: string;
  description: string;
  data_points: DataPoint[];
  background_color?: string; // new optional field
}


interface StatisticsSectionProps {
  blok: StatisticsSectionBlok;
}

export const StatisticsSection = ({ blok }: StatisticsSectionProps) => {
  const { heading, description, data_points, background_color } = blok;

  return (
    <div style={{ backgroundColor:"#0D2C6B"||background_color }}>
      <section
        className="max-w-[1349px] mx-auto text-[#FFFFFF] py-[62px] px-6"
        {...storyblokEditable(blok)}
      >
        <div className="grid grid-cols-1 lg:grid-cols-5 text-center gap-[108px]">
          {/* Heading + Description */}
          <div className="lg:col-span-2 lg:text-left">
            <h2 className="font-bold text-[36px] leading-[44px] tracking-normal">
              {heading}
            </h2>
            <p className="mt-4 font-arial font-normal text-[18px] leading-[24px] tracking-normal">
              {description}
            </p>
          </div>

          {/* Data Points */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[100px] justify-items-center">
            {data_points?.map((point) => (
              <div key={point._uid} className="flex flex-col w-auto gap-3">
                <p className="font-semibold text-[75px] leading-[80px] tracking-normal">
                  {point.primary_text}
                </p>
                <p className="text-[16px] leading-[24px] tracking-normal">
                  {point.secondary_text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

