import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { signIn } from "../../../../api/auth";
import { Button } from "../../../../components/button";
import { useToast } from "../../../../components/hooks/ToastProvider/toastContext";
import Inputs from "../../../../components/Input";
import BoxContainer from "../../../../components/layout/Container";
import { Container } from "./styles";

interface IFormDataProps {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const { addToast } = useToast();
  const [loadSubmit, setLoadSubmit] = useState(false);

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  const formReferenceData = useForm<IFormDataProps>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (responseDataForms: any): Promise<any> => {
    setLoadSubmit(true);
    const { email, password }: IFormDataProps = responseDataForms;

    try {
      const responseSignIn = await signIn({
        email,
        password,
      });
      setLoadSubmit(false);
      localStorage.setItem("access_token", responseSignIn.data.accessToken);
      navigate("/");
      addToast({
        title: "Successful authentication",
        type: "success",
      });
    } catch (e) {
      const error = e as Error;
      setLoadSubmit(false);
      addToast({
        title: error.message,
        type: "error",
      });
    }

    setLoadSubmit(false);
  };

  return (
    <Container>
      <BoxContainer>
        <form onSubmit={formReferenceData.handleSubmit(onSubmit)}>
          <div className="card-header h1">
            <strong>Login</strong>
          </div>

          <div className="card-body">
            <Inputs.Text
              formReferenceData={formReferenceData}
              name="email"
              type="email"
              label="E-mail"
            />

            <Inputs.Text
              formReferenceData={formReferenceData}
              name="password"
              label="Senha"
            />

            <Link to="/">
              <small>
                <u>Esqueci minha senha</u>
              </small>
            </Link>

            <Button.Primary
              onClick={() => {}}
              type="submit"
              loadSubmit={loadSubmit}
              title={"Entrar"}
            />

            <Button.Outline
              onClick={() => navigate("/auth/sign-up")}
              type="button"
              title="Criar conta"
            />
            
          </div>
        </form>
      </BoxContainer>
    </Container>
  );
};

export default SignIn;
