import { Helmet } from 'react-helmet';
// import {Image} from "@nextui-org/image";

const Solucao = () => {
  return (
    <div>
      <Helmet>
        <title>OCEAN - Solucao</title>
        <meta
          name='description'
          content='Entenda um pouco sobre o desafio proposto'
        />
      </Helmet>
      <div className='relative h-[85vh]'>
        <div className='absolute inset-0 bg-image bg-cover backdrop-blur-2xl'></div>
        <div className='relative z-10 flex items-center justify-center h-full'>
          <h1 className='titulo'>Solucao</h1>
        </div>
      </div>

      <section className='mx-auto px-4 py-4 max-w-screen-xl'>
        <div className='text-2xl mb-4'>
          <h2>Solucao</h2>
        </div>
        <p>
          Segundo o Ministério do Meio Ambiente, o lixo no mar é todo aquele
          resíduo que o antigo dono classificou como sem utilidade e é
          encontrado no mar. Atualmente, a ONU estima que os resíduos plásticos
          sejam responsáveis por 60% a 80% do lixo que chega aos oceanos.
          Ademais, dados divulgados pelo Fórum Econômico Mundial de Davos
          estimam que em 2050 haverá mais plástico do que peixes nos oceanos, em
          peso. De difícil decomposição, hoje em dia sabe-se que o plástico nos
          oceanos se fragmenta em diversos tamanhos menores. Essa fragmentação
          se dá pela influência do sol, dos movimentos das ondas e, também, da
          ação de microrganismos.(MMA,2019;FURG,2019).
        </p>
        <img
          src='../../../img/desembogue-de-rio.jpg'
          alt=''
          className='object-cover w-full h-[470px]'
        />
      </section>
      <section className='mx-auto px-4 py-4 max-w-screen-xl'>
        <div className='text-2xl mb-4'>
          <h2>Para onde o lixo vai?</h2>
        </div>
        <p>
          Através da dispersão por ventos e chuvas, o resíduo produzido e mal
          descartado nas cidades e zonas rurais alcançam as águas dos rios. À
          medida em que os rios deságuam no mar, este resíduo produzido a
          milhares de quilômetros de distância do litoral também pode contribuir
          para a poluição dos oceanos. Além disso, a poluição das praias também
          tem potencial de poluir os mares, já que o resíduo disposto
          incorretamente nas areias está sujeito à ação das ondas e marés, que o
          carregam para dentro do oceano. Além disso, as atividades que ocorrem
          no mar também contribuem para a poluição dos oceanos. Os descartes
          inadequados de resíduos oriundos das atividades de pesca, de
          embarcações de turismo e lazer e de plataformas de petróleo são os
          principais contribuintes marítimos da poluição dos
          oceanos.(MMA,2019;FURG,2019).
        </p>
      </section>
    </div>
  );
};

export default Solucao;
