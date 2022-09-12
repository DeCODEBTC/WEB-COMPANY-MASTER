import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Input from "../../../../components/Input"

const SignUp: React.FC = () => {
  const form = useForm();

  function onSubmit(data: any) {
    console.log(data);
  }

  return (
        <div className="container">
          <form onSubmit={form.handleSubmit(onSubmit)}>
            

              <div className="columns col-5 col-mx-auto">
                <div className="container card">

                <div className="card-header h1">
                  <strong>Registrar-se</strong>
                </div>

                  <div className="card-body">
                      <Input.Text formReferenceData={form} label="Nome da Empresa" name="name"/>
                      
                      <Input.Text formReferenceData={form} label="Email" name="email"/>

                      <Input.Password formReferenceData={form} label="Senha" name="password"/>

                      <Input.Text formReferenceData={form} label="CPF/CNPJ" name="document"/>

                      <Input.Text formReferenceData={form} label="Descrição" name="description"/>

                      <Input.Text formReferenceData={form} label="Telefone" name="phone"/>
                      
                      <Link to="/#">
                        <small>
                          <u>Política de Privacidade – Privacidade & Termos</u>
                        </small>
                      </Link>

                      <br/>

                      <Input.CheckBox formReferenceData={form} label="Eu concordo com os termos de Privacidade" name="terms" />

                    </div>
                    <br/>
                    <div className="input-group">
                      <button id="btn" type="submit" className="btn btn-primary input-group-btn">Enviar</button>
                    </div>
                    <br/>
                </div>
              </div>
          </form>
        </div>
  );
};

export default SignUp;
