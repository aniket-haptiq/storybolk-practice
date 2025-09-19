import { storyblokEditable } from "@storyblok/react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const StatisticsSection = ({ blok }: any) => {
  const { heading, description, data_points } = blok;

  return (
    <div className="bg-[#0D2C6B]">
      <section
      className="max-w-[1349px] mx-auto  text-[#FFFFFF] py-[62px] px-6"
      {...storyblokEditable(blok)}
    >
      <div className="grid grid-cols-1 lg:grid-cols-5 text-center gap-[108px]">
        
        {/* Heading + Description */}
        <div className="lg:col-span-2 lg:text-left">
          <h2 className="font-bold text-[36px] leading-[44px] tracking-normal ">
            {heading}
          </h2>
          <p className="mt-4 font-arial font-normal text-[18px] leading-[24px] tracking-normal">
            {description}
          </p>
        </div>

        {/* Data Points */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[100px] justify-items-center ">
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {data_points?.map((point: any) => (
            <div
              key={point._uid}
              className="flex flex-col w-[128px] gap-3"
            >
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
