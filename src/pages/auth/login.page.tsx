import Logo from "components/atoms/logo.comp";
import PageHeading from "components/atoms/page-heading.comp";
import SampleForm from "components/mocules/sample-form";
import AuthTemplate from "components/templates/auth.template";

const Login = () => {
  return (
    <div>
      <AuthTemplate
        HeaderComp={
          <>
            <PageHeading />
            <Logo />
          </>
        }
        ContentComp={<SampleForm />}
        FooterComp={<p>This is footer</p>}
      />
    </div>
  );
};

export default Login;
