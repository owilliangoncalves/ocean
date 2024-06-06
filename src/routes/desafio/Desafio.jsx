import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
// import {Image} from "@nextui-org/image";

const Desafio = () => {
  return (
    <div>
      <Helmet>
        <title>OCEAN - Desafio</title>
        <meta
          name='description'
          content='Entenda um pouco sobre o desafio proposto'
        />
      </Helmet>
      <div className='relative h-[85vh]'>
        <div className='absolute inset-0 bg-image0 bg-cover backdrop-blur-2xl'></div>
        <div className='relative z-10 flex items-center justify-center h-full'>
          <h1 className='titulo'>Desafio</h1>
        </div>

        <section className='mx-auto px-4 py-4 max-w-screen-xl'>
          <div>
            <h2 className='text-5xl mb-3 uppercase'>Papel dos oceanos</h2>
          </div>
          <p>
            Desde o início da nossa história, os oceanos possuem papel de
            destaque na vida humana.
          </p>

          <p>
            Há muito tempo, os oceanos já nos possibilitavam navegar entre
            países e continentes para descobrir novas terras e realizar a troca
            de mercadorias. Além disso, sempre foram fontes de alimento para a
            humanidade, pois já nos forneciam inúmeras espécies de peixes e
            demais frutos do mar para alimentação.
          </p>

          <p>
            Os oceanos cobrem 71% da superfície do planeta e continuam exercendo
            grande relevância na vida do homem. Mais recentemente, passaram a
            ser reconhecidos como importantes áreas para o desenvolvimento do
            lazer e do turismo, além da produção de energia e promoção da
            comunicação, configurando-se como uma região fundamental para a
            economia do nosso país e do mundo. Tal fato pode ser melhor
            visualizado quando observamos que a economia dos oceanos representou
            19% do Produto Interno Bruto (PIB) do Brasil em 2015.Os oceanos
            cobrem 71% da superfície do planeta e continuam exercendo grande
            relevância na vida do homem. Mais recentemente, passaram a ser
            reconhecidos como importantes áreas para o desenvolvimento do lazer
            e do turismo, além da produção de energia e promoção da comunicação,
            configurando-se como uma região fundamental para a economia do nosso
            país e do mundo. Tal fato pode ser melhor visualizado quando
            observamos que a economia dos oceanos representou 19% do Produto
            Interno Bruto (PIB) do Brasil em 2015.
          </p>
        </section>

        <section className='mx-auto px-4 py-4 max-w-screen-xl'>
          <div className='text-2xl mb-4'>
            <h2 className='text-3xl mb-3 uppercase'>
              O Contexto Pós-revolução Industrial
            </h2>
          </div>
          <div className='gap-10 flex flex-col xl:flex-row'>
            <div>
              <p>
                Após a revolução industrial ocorrida no séc. XVIII, os níveis de
                produção de mercadorias aumentaram e, consequentemente, os
                níveis de consumo também. Isso ocorreu devido a mecanização das
                indústrias, ou seja, devido a substituição do uso de ferramentas
                manuais por máquinas. Essa substituição possibilitou a produção
                de maiores quantidades de mercadorias em um curto espaço de
                tempo e, também, contribuiu para um rápido crescimento nas taxas
                de consumo, fruto dos baixos preços oferecidos nas mercadorias.
              </p>
              <p>
                Diante disso Estima-se que 80% do lixo marinho tenha origem em
                terra, chegando aos oceanos por meio dos cursos d'água, o que
                indica uma necessidade de melhores gestões dos recursos hídricos
                e dos resíduos sólidos.
              </p>
              <Link
                to='/solucao'
                className=' text-lg py-2 px-4 rounded-full border-1 border-black w-full text-center mt-6 xl:w-[400px] block hover:bg-verdePrimario hover:border-verdePrimario'
              >
                Nossa Proposta de Solução
              </Link>
            </div>
            <img
              className='h-[330px] md:w-full object-contain'
              src='/img/mar_de_plastico.jpg'
              alt='cano_depositando_residuo'
            />
          </div>
        </section>
        <section className='mx-auto px-4 py-4 max-w-screen-xl'>
          <div className='text-2xl mb-4'>
            <h2 className='text-3xl mb-3 uppercase'>
              O Problema de lixo marinho
            </h2>
          </div>
          <p>
            O lixo marinho é composto por materiais sólidos fabricados ou
            transformados (plásticos, filtros de cigarros, vidro, metal e
            madeira) que são jogados no ambiente marinho, constituindo grave
            ameaça à saúde dos nossos mares, rios e lagos, mas também à nossa
            economia e à sociedade. Nesse cenário, os plásticos são o principal
            detrito encontrado no ambiente marinho. Ao contrário dos materiais
            orgânicos, os plásticos concentram-se nos oceanos e podem levar 500
            anos para se decomporem. Afetam diretamente a fauna marinha, pois
            são confundidos com alimentos e ingeridos pelos animais, causando
            sua morte e contaminando cadeias alimentares, com sérios impactos na
            saúde dos seres humanos.
          </p>
          <p>
            Segundo o site G1 Pesquisadores holandeses conseguiram detectar,
            pela primeira vez, fragmentos de plástico no sangue de seres
            humanos. Eles analisaram amostras de 22 pessoas. De tão pequenas, as
            partículas não podem ser vistas nem no microscópio. Os cientistas
            precisaram de uma máquina especial para transformá-las em gás. Um
            computador identificou a presença do plástico. Os tipos encontrados
            são principalmente aqueles usados nas garrafas pet, em embalagens de
            alimentos e em sacolas plásticas.
          </p>
        </section>
      </div>
    </div>
  );
};
export default Desafio;
