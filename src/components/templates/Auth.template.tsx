import { Box } from "@chakra-ui/react";

const AuthTemplate = ({
  HeaderComp,
  ContentComp,
  FooterComp,
}: {
  HeaderComp: React.ReactNode;
  ContentComp: React.ReactNode;
  FooterComp: React.ReactNode;
}) => {
  return (
    <Box p={"3rem"}>
      {HeaderComp || <></>}
      {ContentComp || <></>}
      {FooterComp || <></>}
    </Box>
  );
};

export default AuthTemplate;
