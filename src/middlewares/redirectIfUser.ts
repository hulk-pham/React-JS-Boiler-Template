import store from "store";

export const redirectIfUserMiddleware = (data: any) => {
  console.log("token", store.getState().auth.token);

  return false;
};
