import { apiPlugin } from "@storyblok/react";
import { storyblokInit } from "@storyblok/react";
import Page from "@/components/Page";
import BadgeSection from "@/components/BadgeSection";
import BadgeCard from "@/components/BadgeCard";
import AccreditationSection from "@/components/AccreditationSection"

export const storyblokAPI = storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
  components: {
    page: Page,
    badge_section: BadgeSection,
    badge_card: BadgeCard,
    accreditation_section:AccreditationSection,
  },
});
