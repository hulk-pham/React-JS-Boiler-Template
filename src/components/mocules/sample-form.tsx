import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { LocalStorageKey } from "declares/interfaces/local-storage";
import { SubmitHandler, useForm } from "react-hook-form";
import { useStoreDispatch } from "store/hooks";
import { setToken } from "store/slices/auth.slices";
import { axiosInstance } from "utils/axios";
import * as yup from "yup";

type SampleFormValues = {
  email: string;
  password: string;
};

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

function SampleForm({ token }: any) {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<SampleFormValues>({
    resolver: yupResolver(schema),
  });

  const dispatch = useStoreDispatch();

  const onSubmit: SubmitHandler<SampleFormValues> = async (values) => {
    const response = await axiosInstance.post("/auth/local", {
      identifier: values.email,
      password: values.password,
    });

    dispatch(setToken(response.data.jwt));
    localStorage.setItem(LocalStorageKey.AccessToken, response.data.jwt);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl
        isInvalid={!!errors.email || !!errors.password}
        className="global-themes"
      >
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input id="email" placeholder="Email" {...register("email")} />
        <FormErrorMessage>
          {errors.email && (errors.email.message as string)}
        </FormErrorMessage>

        <FormLabel htmlFor="email">Password</FormLabel>
        <Input
          type="password"
          id="password"
          placeholder="Password"
          {...register("password")}
        />
        <FormErrorMessage>
          {errors.password && (errors.password.message as string)}
        </FormErrorMessage>
      </FormControl>
      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  );
}

// optional - only for debugging
SampleForm.whyDidYouRender = true;

export default SampleForm;
