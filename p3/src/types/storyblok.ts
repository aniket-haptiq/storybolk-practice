import { HTMLAttributeAnchorTarget } from "react";

// Common Storyblok field types
export type StoryblokLink = {
  target: HTMLAttributeAnchorTarget | undefined;
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
    link_bg_color?:StoryblokColor;
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
    card_title_color?:StoryblokColor;
    card_desc_col?:StoryblokColor;
    card_link_col?:StoryblokColor;
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

//Statistics Section
export type StatItem = {
    _uid: string;
    value: string;   // Storyblok stores numbers as strings
    suffix?: string; // "+", "K", "M"
    label: string;
    component: string;
};

export type StatProps = {
  blok:{
  _uid: string;
  component: string;
  headline: string;
  description: string;
  stats: StatItem[];
  background_color?: StoryblokColor;
  font_color?: StoryblokColor;
  };
};
