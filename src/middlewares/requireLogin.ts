export const requireLoginMiddleware = ({ request }: any) => {
  console.log(request);
  return true;
};
