import Link from "next/link";
import Image from "next/image";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const RecommendedTour = (props: any) => {
  const { story } = props;

  return (
    <div className="bg-white rounded-sm shadow">
      <div className="relative aspect-video w-full">
        <Image
          src={story.content.main_imgae.filename}
          alt={story.content.name || 'Tour Image'}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-8">
        <div className="flex gap-4 justify-between text-lg font-bold">
          <h3>{story.content.name}</h3>
          <p>
            {Number(story.content.price).toLocaleString("en-US", {
              style: "currency",
              currency: "INR",
              minimumFractionDigits: 0,
            })}
          </p>
        </div>

        <p className="text-gray-700 uppercase font-bold mt-2 text-sm tracking-wide">
          {story.content.location}, India
        </p>

        <Link href={`/${story.full_slug}`} className="text-blue-600 hover:underline">
          View Tour
        </Link>
      </div>
    </div>
  );
};
