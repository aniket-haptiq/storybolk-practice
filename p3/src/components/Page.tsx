import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

type PageProps = {
  blok: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    body: any[];
    _uid: string;
    component: string;
  };
};

const Page = ({ blok }: PageProps) => {
  return (
    <div {...storyblokEditable(blok)}>
      {blok.body?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default Page;
