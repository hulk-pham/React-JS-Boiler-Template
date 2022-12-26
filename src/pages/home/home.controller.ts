import Post from "declares/models/post.model";
import User from "declares/models/user.model";
import { useAPI, useAPISyncStore } from "hooks/use-api";
import { userSelector, userActions } from "store/slices/user.slices";

export const useHomeController = () => {
  const homeData = useAPI<Post[]>({ url: "/posts" });
  const userData = useAPISyncStore<User>({
    url: "/users/1",
    getSelector: userSelector.selectUser,
    setAction: userActions.setUser,
  });

  return {
    userData,
    homeData,
  };
};
