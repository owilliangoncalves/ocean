import { Helmet } from 'react-helmet';
import { Card, CardBody, CardHeader, Image } from '@nextui-org/react';

// import {Image} from "@nextui-org/image";

const Problema = () => {
  return (
    <div>
      <Helmet>
        <title>OCEAN - Problema</title>
        <meta
          name='description'
          content='Entenda um pouco sobre o desafio proposto'
        />
      </Helmet>
      <Card radius='none'>
        <CardHeader className='p-0'>
          <div className='relative  h-[85vh] w-full'>
            <div className='absolute inset-0 bg-image bg-cover backdrop-blur-2xl'></div>
            <div className='relative z-1 flex items-center justify-center h-full'>
              <h1 className='titulo'>Problema</h1>
            </div>
          </div>
        </CardHeader>

        <CardBody>
          <div>
            <h2 className='text-5xl pt-3 mb-3 uppercase'>O Que É Lixo No Mar?</h2>
          </div>

          <div className='container'>
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
              ação de microrganismos.(MMA,2019; FURG,2019).
            </p>
          </div>
        </CardBody>

        <CardBody>
          <div>
            <h2 className='text-3xl  mb-3 uppercase'>
            Para onde o lixo vai?
            </h2>
          </div>

          <div className='container grid grid-cols-2 gap-3'>
            <div className='flex flex-col'>
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
                oceanos.(MMA,2019; FURG,2019).
              </p>

            </div>
            <Image
              radius='none'
              className=' object-contain col-start-2 h-96 w-96 '
              src='/img/grafico-cidades.png'
              alt=''
            />
          </div>
        </CardBody>
        <CardBody>
          <div>
            <h2 className='text-3xl  mb-3 uppercase'>
              O Problema de lixo marinho
            </h2>
          </div>
          <div className='container'>
            <p>
              O lixo marinho é composto por materiais sólidos fabricados ou
              transformados (plásticos, filtros de cigarros, vidro, metal e
              madeira) que são jogados no ambiente marinho, constituindo grave
              ameaça à saúde dos nossos mares, rios e lagos, mas também à nossa
              economia e à sociedade. Nesse cenário, os plásticos são o
              principal detrito encontrado no ambiente marinho. Ao contrário dos
              materiais orgânicos, os plásticos concentram-se nos oceanos e
              podem levar 500 anos para se decomporem. Afetam diretamente a
              fauna marinha, pois são confundidos com alimentos e ingeridos
              pelos animais, causando sua morte e contaminando cadeias
              alimentares, com sérios impactos na saúde dos seres humanos.(MARINHA, 2017)
            </p>
          </div>
        </CardBody>
      </Card>

      <section className='mx-auto px-4 py-4 max-w-screen-xl'>
        <div className='text-2xl mb-4'>
          <h2 className='text-5xl mb-3 uppercase'>O Que É Lixo No Mar?</h2>
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
          ação de microrganismos. 
        </p>
        <br/>
        <img
          src='/img/desembogue-de-rio.jpg'
          alt=''
          className='object-cover w-full h-[470px]'
        />
      </section>
      <section className='mx-auto px-4 py-4 max-w-screen-xl'>
        <div>
          <h2 className='text-3xl mb-3 uppercase'>Para onde o lixo vai?</h2>
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
          oceanos.<br /> Fonte: MB MIL 2019 e FURG 2019.
        </p>
      </section>
    </div>
  );
};

export default Problema;
