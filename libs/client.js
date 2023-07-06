import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "blog-kagabu-nextjs",
  apiKey: process.env.API_KEY,
});
