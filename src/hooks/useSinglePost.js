import React, { useEffect, useState } from "react";
import { getSingleBlogPost } from "../contentful";

const useSinglePost = (slug) => {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getSingleBlogPost(slug)
      .then((result) => {
        setPost(result[0].fields);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return [post, isLoading];
};

export default useSinglePost;
