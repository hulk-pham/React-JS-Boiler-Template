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
    <>
      {HeaderComp || <></>}
      {ContentComp || <></>}
      {FooterComp || <></>}
    </>
  );
};

export default AuthTemplate;
