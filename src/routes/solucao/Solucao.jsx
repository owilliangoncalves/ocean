import { Card, CardBody, CardHeader, Image } from '@nextui-org/react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
// import {Image} from "@nextui-org/image";

const Solucao = () => {
  return (
    <>
      <Helmet>
        <title>OCEAN - Solucao</title>
        <meta
          name='description'
          content='Entenda um pouco sobre o desafio proposto'
        />
      </Helmet>
      <Card radius='none'>
        <CardHeader className='p-0'>
          <div className='relative  h-[85vh] w-full'>
            <div className='absolute inset-0 bg-image0 bg-cover backdrop-blur-2xl'></div>
            <div className='relative z-1 flex items-center justify-center h-full'>
              <h1 className='titulo'>Solucão</h1>
            </div>
          </div>
        </CardHeader>

        <CardBody>
          <div>
            <h2 className='text-4xl pt-3 mb-3 uppercase'>
              Nossa Solução Inovadora para a Poluição Marinha
            </h2>
          </div>

          <div className='container'>
            <div>
              <h3 className='text-1xl pt-3 mb-3 uppercase font-bold'>
                Descubra como estamos utilizando tecnologia de ponta para
                monitorar e combater a poluição marinha, com inovação e
                tecnologia.
              </h3>
            </div>

            <p>
              <span className='ml-10'>Estamos</span> empregando tecnologias
              avançadas para monitorar e combater a poluição marinha,
              identificando com precisão suas fontes, principalmente onde
              desaguam os rios e fluentes. Nossa solução integra câmeras com
              visão computacional e sensores de qualidade da água para fornecer
              dados em tempo real e permitir uma resposta eficaz e proativa.
              Através de uma abordagem acertiva, conseguimos não apenas
              identificar a poluição, mas também compreender suas causas e
              impactos, facilitando ações preventivas e corretivas mais
              eficientes.
            </p>
            <div>
              <br />
              <p>
                Gostaríamos de chamar a atenção para o mapa do Brasil exposto,
                onde foram colocados cameras em vermelhos em cada rio ou
                afluente que desagua no mar. Cada ponto vermelho representa uma
                câmera de monitoramento estratégica instalada para fins de
                segurança e controle ambiental.
              </p>
            </div>
            <div className='my-6'>
              <Image
                radius='none'
                className=' object-cover h-full w-full'
                src='/img/lucas1.png'
                alt=''
              />
            </div>
          </div>
        </CardBody>

        <CardBody>
          <div className='container grid grid-cols-2 gap-3'>
            <div className='flex flex-col'>
              <div>
                <h2 className='text-3xl  mb-3 uppercase'>
                  Como Funciona a Nossa Solução
                </h2>
              </div>
              <p>
                <span className='ml-10'>Combinamos</span> o uso de câmeras
                equipadas com visão computacional e sensores avançados para
                monitorar e identificar fontes de poluição, elas serão alocadas
                em cada desague de rio, ou afluente. Nossas câmeras capturam
                imagens em alta resolução das áreas monitoradas, permitindo a
                identificação automática de resíduos como plásticos, metais e
                outros detritos. Além disso, os sensores de qualidade da água
                medem parâmetros essenciais, como pH, turbidez e temperatura,
                fornecendo dados cruciais para detectar mudanças na qualidade da
                água. Esta abordagem integrada nos permite agir rapidamente para
                mitigar fontes de poluição antes que se tornem problemas
                maiores. A solução também inclui a capacidade de gerar
                relatórios detalhados e visualizações de dados que facilitam a
                análise contínua e a tomada de decisões baseadas em evidências.
              </p>
              <div>
                <h2 className='text-3xl  mb-3 uppercase my-5'>
                  Câmeras e Visão Computacional
                </h2>
              </div>
              <p>
                <span className='ml-10'>Nossas </span> câmeras capturam imagens
                em alta resolução das áreas monitoradas, permitindo uma análise
                detalhada e precisa. Utilizando algoritmos de visão
                computacional, conseguimos identificar automaticamente resíduos
                como plásticos, metais e outros detritos. Este sistema de
                identificação automatizada possibilita uma resposta rápida e
                eficaz, alertando as autoridades competentes sobre a presença de
                poluentes e facilitando a remoção imediata dos mesmos. Além
                disso, o monitoramento em tempo real garante que tenhamos uma
                vigilância constante sobre os pontos críticos de descarga de
                poluição. As câmeras são equipadas com tecnologias de ponta que
                permitem a captura de imagens mesmo em condições climáticas
                adversas, garantindo que os dados sejam coletados de forma
                contínua e confiável.
              </p>
            </div>
            <div>
              <Image
                radius='none'
                className=' object-cover col-start-2 h-full w-full '
                src='/img/rio-camera.jpg'
                alt=''
              />
            </div>
          </div>
        </CardBody>

        <CardBody>
          <div className='container grid grid-cols-2 gap-4'>
            <div className='grid grid-cols-2 gap-2'>
              <Image
                radius='none'
                className='object-cover h-full w-full'
                src='/img/foto-fundo.jpeg'
                alt='Imagem 1'
              />
              <Image
                radius='none'
                className='object-cover h-full w-full'
                src='/img/uso-ia.jpg'
                alt='Imagem 2'
              />
            </div>
            <div className='flex flex-col'>
              <div>
                <h2 className='text-3xl mb-3 uppercase'>
                  Principais pontos da solução
                </h2>
              </div>
              <div className='grid grid-cols-1 gap-2'>
                <p className='p-2 bg-gray-100 hover:bg-gray-200 transition-colors duration-300 bg-opacity-80 bg-green-100'>
                  Captura de imagens em alta resolução
                </p>
                <p className='p-2 bg-gray-100 hover:bg-gray-200 transition-colors duration-300 bg-opacity-80 bg-green-100'>
                  Identificação automática de resíduos
                </p>
                <p className='p-2 bg-gray-100 hover:bg-gray-200 transition-colors duration-300 bg-opacity-80 bg-green-100'>
                  Monitoramento em tempo real
                </p>
                <p className='p-2 bg-gray-100 hover:bg-gray-200 transition-colors duration-300 bg-opacity-80 bg-green-100'>
                  Alertas instantâneos para ações rápidas
                </p>
                <p className='p-2 bg-gray-100 hover:bg-gray-200 transition-colors duration-300 bg-opacity-80 bg-green-100'>
                  Funcionamento em todas as condições climáticas
                </p>
              </div>
            </div>
          </div>
        </CardBody>
        <CardBody>
          <div className='container grid grid-cols-2 gap-4'>
            <div className='flex flex-col'>
              <div>
                <h2 className='text-3xl mb-3 uppercase'>
                  Sensores de Qualidade da Água
                </h2>
              </div>
              <p>
                <span className='ml-10'>Utilizamos </span> sensores de última
                geração para medir parâmetros essenciais da qualidade da água,
                como pH, turbidez, temperatura e níveis de oxigênio dissolvido.
                Estes sensores fornecem dados em tempo real, permitindo a
                detecção imediata de mudanças na qualidade da água. A análise
                contínua desses parâmetros é crucial para identificar fontes de
                poluição e tomar ações corretivas rapidamente. Além disso, os
                dados coletados ajudam a construir um histórico da qualidade da
                água, possibilitando a identificação de padrões e tendências a
                longo prazo. Os sensores são projetados para operar em diversos
                ambientes aquáticos, desde águas costeiras até rios e córregos,
                e são calibrados regularmente para garantir precisão e
                confiabilidade nos dados coletados.
              </p>
              <div className='grid grid-cols-1 gap-2'>
                <p className='p-2 bg-gray-100 hover:bg-gray-200 transition-colors duration-300 bg-opacity-80 bg-green-100'>
                  Medição de pH, turbidez e temperatura
                </p>
                <p className='p-2 bg-gray-100 hover:bg-gray-200 transition-colors duration-300 bg-opacity-80 bg-green-100'>
                  Monitoramento de oxigênio dissolvido
                </p>
                <p className='p-2 bg-gray-100 hover:bg-gray-200 transition-colors duration-300 bg-opacity-80 bg-green-100'>
                  Dados em tempo real
                </p>
                <p className='p-2 bg-gray-100 hover:bg-gray-200 transition-colors duration-300 bg-opacity-80 bg-green-100'>
                  Detecção de mudanças na qualidade da água
                </p>
                <p className='p-2 bg-gray-100 hover:bg-gray-200 transition-colors duration-300 bg-opacity-80 bg-green-100'>
                  Operação em diversos ambientes aquáticos
                </p>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-2'>
              <Image
                radius='none'
                className='object-cover h-full w-full'
                src='/img/sensor.jpeg'
                alt='Imagem 1'
              />
              <Image
                radius='none'
                className='object-cover h-full w-full'
                src='/img/qualidade-da-agua.jpg'
                alt='Imagem 2'
              />
            </div>
          </div>
        </CardBody>
        <CardBody>
          <div className='container grid grid-cols-2 gap-4'>
            <div className='grid grid-cols-2 gap-2'>
              <Image
                radius='none'
                className='object-cover h-full w-full'
                src='/img/visao-ia-1.png'
                alt='Imagem 1'
              />
              <Image
                radius='none'
                className='object-cover h-full w-full'
                src='/img/visao-ia-2.png'
                alt='Imagem 2'
              />
            </div>
            <div className='flex flex-col'>
              <div>
                <h2 className='text-3xl mb-3 uppercase'>
                  Uso da Azure Visual Studio para Análise de Imagens
                </h2>
                <p>
                  <span className='ml-10'>Utilizamos </span> a plataforma Azure
                  Visual Studio para uma análise avançada das imagens capturadas
                  por nossas câmeras de monitoramento ambiental. Esta ferramenta
                  poderosa nos permite processar grandes volumes de dados de
                  imagem de forma rápida e eficiente, facilitando a detecção e
                  identificação de resíduos e poluentes nos corpos d'água
                  monitorados. A integração perfeita com a infraestrutura Azure
                  nos oferece escalabilidade e confiabilidade, garantindo que
                  possamos lidar com os desafios de processamento de dados em
                  tempo real.
                  <br />
                  <span className='ml-10'> Com </span>o suporte da Azure Visual
                  Studio, podemos analisar tendências e padrões ao longo do
                  tempo, identificando variações na concentração de poluentes e
                  mudanças nos padrões de descarga. Essa análise retrospectiva
                  nos ajuda a compreender melhor os ciclos sazonais de poluição
                  e a desenvolver estratégias de longo prazo para a mitigação e
                  prevenção da poluição marinha.
                </p>
                <h2 className='text-2xl mb-3 uppercase'>
                  Voce pode reparar que eles nos retornam a descricao e os dados
                  em JSNO para consumo em nossa API.
                </h2>
              </div>
            </div>
          </div>
        </CardBody>
        <CardBody>
          <div className='container grid grid-cols-2 gap-4'>
            <div className='flex flex-col'>
              <div>
                <h2 className='text-3xl mb-3 uppercase'>
                  Sensores de Qualidade da Água
                </h2>
              </div>
              <p>
                <span className='ml-10'>Nosso</span> projeto é uma iniciativa
                inovadora que integra tecnologias avançadas, como câmeras com
                visão computacional e sensores de qualidade da água, para
                detectar e monitorar a poluição marinha de forma abrangente. Com
                o apoio da Azure Visual Studio, realizamos análises detalhadas
                de imagens, permitindo a identificação precisa de resíduos e
                padrões de poluição. Essa abordagem nos capacita a agir
                rapidamente, implementando medidas preventivas e corretivas para
                preservar os ecossistemas marinhos e garantir a sustentabilidade
                dos recursos hídricos. Nosso compromisso é contribuir para um
                ambiente marinho mais limpo e saudável, promovendo a conservação
                dos oceanos para as gerações futuras.
              </p>
              <Link
                to='https://github.com/lucashcribeiro/Azure-computer-vision'
                className=' text-lg mt-10 py-2 px-4 rounded-full border-1 border-black text-center  hover:bg-verdePrimario hover:border-verdePrimario place-self-center uppercase'
              >
                acesso o nosso site de analise de imagem
              </Link>
            </div>
            <div className='grid grid-cols-2 gap-2'>
              <Image
                radius='none'
                className='object-cover h-full w-full'
                src='/img/sensor.jpeg'
                alt='Imagem 1'
              />
              <Image
                radius='none'
                className='object-cover h-full w-full'
                src='/img/qualidade-da-agua.jpg'
                alt='Imagem 2'
              />
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
};
export default Solucao;
