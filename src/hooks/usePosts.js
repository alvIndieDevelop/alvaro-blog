import React, { useEffect, useState } from "react";
import { getBlogPosts } from "../contentful";

const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getBlogPosts()
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
