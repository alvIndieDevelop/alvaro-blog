import OPTIONS from "../config/options";

const client = require("contentful").createClient({
  space: OPTIONS.CONTENTFUL.space,
  accessToken: OPTIONS.CONTENTFUL.access_token,
});

const getBlogPosts = () => client.getEntries().then((res) => res.items);
const getSingleBlogPost = (slug) =>
  client
    .getEntries({
      "fields.slug": slug,
      content_type: "articles",
    })
    .then((res) => res.items);

const contentful = {
  getBlogPosts,
  getSingleBlogPost,
};

export default contentful;
