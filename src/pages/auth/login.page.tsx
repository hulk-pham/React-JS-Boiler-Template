import Footer from "components/mocules/footer";
import FormLogin from "components/organisms/form-login";
import Header from "components/mocules/header";
import AuthTemplate from "components/templates/auth.template";
import { useLoginController } from "./login.controller";

const Login = () => {
  const { onSubmitLogin } = useLoginController();
  return (
    <div>
      <AuthTemplate
        HeaderComp={<Header />}
        ContentComp={<FormLogin onSubmitLogin={onSubmitLogin} />}
        FooterComp={<Footer />}
      />
    </div>
  );
};

export default Login;
