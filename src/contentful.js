import { contentful as contentfulConfig } from "./utils/config";

const client = require("contentful").createClient({
  space: contentfulConfig.space,
  accessToken: contentfulConfig.access_token,
});

export const getBlogPosts = () => client.getEntries().then((res) => res.items);
export const getSingleBlogPost = (slug) =>
  client
    .getEntries({
      "fields.slug": slug,
      content_type: "articles",
    })
    .then((res) => res.items);
