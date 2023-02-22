import React from "react";

import postList from "../posts.json";

const useSinglePost = (id) => {
  const [article, setArticle] = React.useState({
    id: "",
    title: "",
    author: "",
    date: "",
    time: "",
    thumbnail: "",
    content: "",
  });
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    try {
      setIsLoading(true);
      const post = postList.find((el) => el.id === +id);
      if (!post) {
        throw new Error("");
      }
      setArticle(post);
    } catch (error) {
      setArticle({});
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  return [article, isLoading];
};

export default useSinglePost;
