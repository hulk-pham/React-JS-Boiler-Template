export const errorMsg = (error: any) => {
  const defaultMsg = error?.msg || error.message;
  const defaultServerMsg = error?.response?.data?.message;
  const validateServerMsf = error?.response?.data?.error?.message;

  return validateServerMsf
    ? validateServerMsf
    : defaultServerMsg
    ? defaultServerMsg
    : defaultMsg;
};
