// Common Storyblok field types
export type StoryblokLink = {
  target: string;
  url?: string;
  cached_url?: string;
};

export type StoryblokImage = {
  filename: string;
  alt?: string;
};

export type StoryblokColor = {
  color?: string;
};

// Page
export type PageProps = {
  blok: {
    _uid: string;
    component: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    body: any[];
  };
};

// Badge Section
export type BadgeSectionProps = {
  blok: {
    _uid: string;
    component: string;
    headline: string;
    button_text?: string;
    button_link?: StoryblokLink;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    badges?: any[];
    background_color?: StoryblokColor;
    text_color?:StoryblokColor;
  };
};

// Badge Card
export type BadgeCardProps = {
  blok: {
    _uid: string;
    component: string;
    title: string;
    description?: string;
    lm_text?: string;
    lm_link?: StoryblokLink;
    image?: StoryblokImage;
    background_color_card?: StoryblokColor;
  };
};

//Accreditation Section
export type AccreditationProps = {
  blok: {
    logo: StoryblokImage;
    title: string;
    link_url: StoryblokLink;
    link_text: string;
    bg_sec_col:StoryblokColor;
    title_col:StoryblokColor;
    link_text_col:StoryblokColor;
  };
};
