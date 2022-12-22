import Post from "declares/models/post.model";
import { useAPI } from "hooks/use-api";

export const useHomeController = () => {
  const { data, isLoading, error } = useAPI<Post[]>({ url: "/posts" });

  return {
    homeData: {
      data,
      isLoading,
      error,
    },
  };
};
