import { LocalStorageKey } from "declares/interfaces/local-storage";
import { useStoreDispatch } from "store/hooks";
import { setToken } from "store/slices/auth.slices";
import { axiosInstance } from "utils/axios";
import { useToast } from "@chakra-ui/react";
import { errorMsg } from "utils/error";

export const useLoginController = () => {
  const dispatch = useStoreDispatch();
  const toast = useToast();

  const onSubmitLogin = async ({
    identifier,
    password,
  }: {
    identifier: string;
    password: string;
  }) => {
    try {
      const response = await axiosInstance.post("/auth/local", {
        identifier,
        password,
      });
      dispatch(setToken(response.data.jwt));
      localStorage.setItem(LocalStorageKey.AccessToken, response.data.jwt);
      toast({
        title: "Success",
        description: "Logged in!",
        status: "success",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: errorMsg(error),
        status: "error",
      });
    }
  };

  return {
    onSubmitLogin,
  };
};
