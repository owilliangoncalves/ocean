import { Card, CardHeader, Image } from '@nextui-org/react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className='  gap-1 grid grid-cols-12 grid-rows-none px-0'>
      <Helmet>
        <title>Global Solution - OCEAN</title>
        <meta name='description' content='Página inicial da Global Solution' />
      </Helmet>
      <Card className='col-span-12 sm:col-span-4 h-[300px] ' radius='none'>
        <CardHeader className='absolute z-10 top-1 flex-col !items-start'>
          <p className='text-tiny text-white/60 uppercase font-bold'>Desafio</p>
          <h4 className='text-white font-medium text-large'>
            Veja o desafio proposto
          </h4>
        </CardHeader>
        <Link to={'/desafio'}>
          <Image
            removeWrapper
            radius='none'
            alt='Turtle background'
            className='z-0 w-full h-full object-cover'
            src='/img/turtle.jpg'
          />
        </Link>
      </Card>

      <Card className='col-span-12 sm:col-span-4 h-[300px]' radius='none'>
        <CardHeader className='absolute z-10 top-1 flex-col !items-start'>
          <p className='text-tiny text-white/60 uppercase font-bold'>Estudos</p>
          <h4 className='text-white font-medium text-large'>
            Veja as referências
          </h4>
        </CardHeader>
        <Link to={'/estudos'}>
          <Image
            removeWrapper
            radius='none'
            alt='Pessoas segurando papeis'
            className='z-0 w-full h-full object-cover'
            src='/img/referencias.jpg'
          />
        </Link>
      </Card>
      <Card className='col-span-12 sm:col-span-4 h-[300px]' radius='none'>
        <CardHeader className='absolute z-10 top-1 flex-col !items-start'>
          <p className='text-tiny text-white/60 uppercase font-bold'>
            Problema
          </p>
          <h4 className='text-white font-medium text-large'>
            Entenda mais um pouco o problema
          </h4>
        </CardHeader>
        <Link to={'/problema'}>
          <Image
            removeWrapper
            radius='none'
            alt='Garbage Background'
            className='z-0 w-full h-full object-cover'
            src='/img/problema.jpg'
          />
        </Link>
      </Card>

      <Card
        isFooterBlurred
        className='w-full h-[445px] col-span-12 sm:col-span-12'
        radius='none'
      >
        <CardHeader className='absolute z-10 top-1 flex-col items-start'>
          <p className='text-tiny text-white/60 uppercase font-bold'>Solução</p>
          <h4 className='text-white/90 font-medium text-xl'>
            Entenda um pouco mais da solução proposta
          </h4>
        </CardHeader>
        <Link to={'/solucao'}>
          <Image
            radius=''
            removeWrapper
            alt='Relaxing app background'
            className='z-0 w-full h-[500]: object-cover'
            src='/img/solucao.jpg'
          />
        </Link>
      </Card>
    </div>
  );
}
