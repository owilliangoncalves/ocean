import { Helmet } from 'react-helmet';
import NavBar from '../navbar/NavBar';
// import {Image} from "@nextui-org/image";
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
      <div id='titulo_conteudo' className='bg-image1'>
          <h1>Problema</h1>
      </div>
      
      {/* <section className='max-w-4xl mx-auto mt-8'>
      <div className='text-2xl mb-4'>
        <h2>Papel dos oceanos</h2>
      </div>
      <p>Desde o início da nossa história, os oceanos possuem papel de
destaque na vida humana.</p>
      <p>Há muito tempo, os oceanos já nos possibilitavam navegar entre países e continentes para descobrir novas terras e realizar a troca de mercadorias. Além disso, sempre foram fontes de alimento para a humanidade, pois já nos forneciam inúmeras espécies de peixes e demais frutos do mar para alimentação.</p>
      <p>
      Os oceanos cobrem 71% da superfície do planeta e continuam exercendo grande relevância na vida do homem. Mais recentemente, passaram a ser reconhecidos como importantes áreas para o desenvolvimento do lazer e do turismo, além da produção de energia e promoção da comunicação, configurando-se como uma região fundamental para a economia do nosso país e do mundo. Tal fato pode ser melhor visualizado quando observamos que a economia dos oceanos representou 19% do Produto Interno Bruto (PIB) do Brasil em 2015.
      </p>
      </section>

      <section className='max-w-4xl mx-auto mt-8'>
      <div className='text-2xl mb-4'>
        <h2>O Contexto Pós-revolução Industrial</h2>
      </div>
      <div className='flex flex-col md:flex-row items-center gap-10'>
        <div>
          <p>
          Após a revolução industrial ocorrida no séc. XVIII, os níveis de produção de mercadorias aumentaram e, consequentemente, os níveis de consumo também. Isso ocorreu devido a mecanização das indústrias, ou seja, devido a substituição do uso de ferramentas manuais por máquinas. Essa substituição possibilitou a produção de maiores quantidades de mercadorias em um curto espaço de tempo e, também, contribuiu para um rápido crescimento nas taxas de consumo, fruto dos baixos preços oferecidos nas mercadorias. 
          </p>
          <p>De lá para cá, como consequência da produção e consumo desenfreado de mercadorias de baixa durabilidade, observa-se que o descarte incorreto dos resíduos tem provocado a poluição dos oceanos</p>
        </div>
      <img src="../../../img/plastico-mar.jpg" alt="garrafas-na-areia" className='img1' />
      </div>
      </section> */}
      <section className='max-w-4xl mx-auto mt-8'>
      <div className='text-2xl mb-4'>
        <h2>O Que É Lixo No Mar?</h2>
      </div>
      <p>Segundo o Ministério do Meio Ambiente, o lixo no mar é todo aquele resíduo que o antigo dono classificou como sem utilidade e é encontrado no mar. Atualmente, a ONU estima que os resíduos plásticos sejam responsáveis por 60% a 80% do lixo que chega aos oceanos. Ademais, dados divulgados pelo Fórum Econômico Mundial de Davos estimam que em 2050 haverá mais plástico do que peixes nos oceanos, em peso. De difícil decomposição, hoje em dia sabe-se que o plástico nos oceanos se fragmenta em diversos tamanhos menores. Essa fragmentação se dá pela influência do sol, dos movimentos das ondas e, também, da ação de microrganismos.</p>
      <p>Segundo o Ministério do Meio Ambiente, o lixo no mar é todo aquele resíduo que o antigo dono classificou como sem utilidade e é encontrado no mar. Atualmente, a ONU estima que os resíduos plásticos sejam responsáveis por 60% a 80% do lixo que chega aos oceanos. Ademais, dados divulgados pelo Fórum Econômico Mundial de Davos estimam que em 2050 haverá mais plástico do que peixes nos oceanos, em peso. De difícil decomposição, hoje em dia sabe-se que o plástico nos oceanos se fragmenta em diversos tamanhos menores. Essa fragmentação se dá pela influência do sol, dos movimentos das ondas e, também, da ação de microrganismos.</p>
<img src="../../../img/desembogue-de-rio.jpg" alt="" className='object-none w-full h-[470px]'/>
      </section>
      <section className='max-w-4xl mx-auto mt-8'>
      <div className='text-2xl mb-4'>
        <h2>Para onde o lixo vai?</h2>
      </div>
      <p>Através da dispersão por ventos e chuvas, o resíduo produzido e mal descartado nas cidades e zonas rurais alcançam as águas dos rios. À medida em que os rios deságuam no mar, este resíduo produzido a milhares de quilômetros de distância do litoral também pode contribuir para a poluição dos oceanos. Além disso, a poluição das praias também tem potencial de poluir os mares, já que o resíduo disposto incorretamente nas areias está sujeito à ação das ondas e marés, que o carregam para dentro do oceano. Além disso, as atividades que ocorrem no mar também contribuem para a poluição dos oceanos. Os descartes inadequados de resíduos oriundos das atividades de pesca, de embarcações de turismo e lazer e de plataformas de petróleo são os principais contribuintes marítimos da poluição dos oceanos.</p>
      </section>
    </div>
  );
};

export default Problema;
