import Logo from "components/atoms/Logo.comp";
import PageHeading from "components/atoms/PageHeading.comp";
import SampleForm from "components/mocules/SampleForm";
import AuthTemplate from "components/templates/Auth.template";

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
