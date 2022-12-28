import { Box } from "@chakra-ui/react";

function LandingTemplate({
  HeaderComp,
  ContentComp,
  FooterComp,
}: {
  HeaderComp: React.ReactNode;
  ContentComp: React.ReactNode;
  FooterComp: React.ReactNode;
}) {
  return (
    <Box>
      {HeaderComp}
      <Box minH="70vh" p="3rem">
        {ContentComp}
      </Box>
      {FooterComp}
    </Box>
  );
}

export default LandingTemplate;
