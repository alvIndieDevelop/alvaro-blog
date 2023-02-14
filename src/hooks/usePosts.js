import React, { useEffect, useState } from "react";
import { contentful } from "../config";

const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    contentful
      .getBlogPosts()
      .then((blogPosts) => {
        setPosts(blogPosts);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return [posts, isLoading];
};

export default usePosts;
