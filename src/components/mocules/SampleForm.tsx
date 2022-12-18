import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { useStoreDispatch } from "store/hooks";
import { setToken } from "store/slices/auth.slices";
import * as yup from "yup";

type SampleFormValues = {
  name: string;
};

const schema = yup
  .object({
    name: yup.string().required(),
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

  const onSubmit: SubmitHandler<SampleFormValues> = (values) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        dispatch(setToken(values.name));
        resolve();
      }, 1000);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.name} className="global-themes">
        <FormLabel htmlFor="name">First name</FormLabel>
        <Input id="name" placeholder="name" {...register("name")} />
        <FormErrorMessage>
          {errors.name && (errors.name.message as string)}
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
