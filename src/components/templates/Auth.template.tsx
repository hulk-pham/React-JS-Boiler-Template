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
    <Box>
      {HeaderComp}
      <Box minH="70vh" p="3rem">
        {ContentComp}
      </Box>
      {FooterComp}
    </Box>
  );
};

export default AuthTemplate;
