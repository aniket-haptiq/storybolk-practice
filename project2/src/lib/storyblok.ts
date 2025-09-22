import { storyblokInit, apiPlugin } from "@storyblok/react";
import components from "@/components/storyblok";

storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
  components,
});

export { };
