import './Register.css';
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as yup from "yup";
import Axios from 'axios'
// import {DatePicker} from "react-datepicker";
// import { useState } from 'react';
// import "C:/Users/Caio/AppData/Local/Microsoft/TypeScript/4.8/node_modules/@types/react-DatePicker/index"



export default function Register() {
    // const [startDate, setStartDate] = useState(new Date());

const OnHandleClickRegister = (values) => {
  Axios.post("http://localhost/3001/bancos", {
    nome: values.nome,
    descricao: values.descricao,
    datacompra: values.datacompra,
    quantidade: values.quantidade,
    sistema: values.sistema,
    massa: values.massa,
    custo: values.custo,
    unidadedemedida: values.unidadedemedida,
    comp: values.comp
  }).then((response) => {
      console.log(response)
    }).catch(err => {
    console.log(err)
  })
}

const validationRegister = yup.object().shape({
  nome: yup.string().required("Campo obrigatório"),
  descricao: yup.string().min(20, "Mínimo de 50 caracteres").required("Campo obrigatório")

});

  return (
    

    <div className="container">
      <h1>Materials</h1>
    
        <Formik initialValues={{}} 
        onSubmit={OnHandleClickRegister} 
        validationSchema={validationRegister}>

         <Form className="material-form">
            <div className="material-form-group">
              <Field name="nome" className="form-field" placeholder="Nome do produto"/>
              <ErrorMessage component="spam" name="nome" className="form-error"/>
            </div>

            <div className="material-form-group">
              <Field name="descricao" className="form-field" placeholder="Descrição"/>
              <ErrorMessage component="spam" name="descricao" className="form-error"/>
            </div>

            <div className='material-form-group'>
              <Field name="datacompra" className="form-field" placeholder="Data de compra"/>
               {/* <div className="mateiral-form-group">
              <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}
               className="form-field" placeHolder="Data de compra"/> */}
              
                
            </div>

            <div className="material-form-group">
              <Field name="quantidade" className="form-field" placeholder="Quantidade"/>
              
            </div>

            <div className="material-form-group">
              <Field name="sistema" className="form-field" placeholder="Sistema"/>
             
            </div>

            <div className="material-form-group">
              <Field name="massa" className="form-field" placeholder="Massa em KG"/>
              
            </div>

            <div className="material-form-group">
              <Field name="custo" className="form-field" placeholder="Custo"/>
              
            </div>

            <div className="material-form-group">
              <Field name="unidadedemedida" className="form-field" placeholder="Unidade de Medida"/>
              
            </div>

            <div className="material-form-group">
              <Field name="comp" className="form-field" placeholder="Composição"/>
              
            </div>

            <button className='button' type="submit">Cadastrar</button>
          </Form>
        </Formik>
    </div>
  );
}

