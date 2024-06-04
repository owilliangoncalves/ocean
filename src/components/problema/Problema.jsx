import { Helmet } from 'react-helmet';
import NavBar from '../navbar/NavBar';
import {Image} from "@nextui-org/image";
import './Problema.css';


const Problema = () => {
  return (
    <div>
      <NavBar />
      <Helmet>
        <title>OCEAN - Problema</title>
        <meta
          name='description'
          content='Entenda um pouco sobre o desafio proposto'
        />
      </Helmet>
      <section id='tituloProblema'>
        
      </section>
      <div className='titulo_conteudo'>
        <h1>Problema</h1>
      </div>
      <section id='conteudoDescricao'>
      <div id='textoDescricaoProblema'>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptas possimus laboriosam ex, dolores harum provident laudantium quasi quo saepe omnis doloremque rem ad blanditiis error cum  
      </p>
      <img src="../../../img/lixo_no_mar.jpg" alt="" />
      </div>
      </section>
    </div>
  );
};

export default Problema;
