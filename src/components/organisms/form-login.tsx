import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

type SampleFormValues = {
  email: string;
  password: string;
};

type LoginFormProps = {
  onSubmitLogin: ({
    identifier,
    password,
  }: {
    identifier: string;
    password: string;
  }) => Promise<void>;
};

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

function FormLogin({ onSubmitLogin }: LoginFormProps) {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<SampleFormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<SampleFormValues> = async (values) => {
    return onSubmitLogin({
      identifier: values.email,
      password: values.password,
    });
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
FormLogin.whyDidYouRender = true;

export default FormLogin;
