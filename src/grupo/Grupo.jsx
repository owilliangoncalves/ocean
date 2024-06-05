import { Card, CardHeader, Image } from '@nextui-org/react';

const Grupo = () => {
  return (
    <div className='gap-1 grid grid-cols-12 grid-rows-none px-0'>
      <Card className='col-span-12 sm:col-span-6 h-[300px]' radius='none'>
        <CardHeader className='absolute z-10 top-1 flex-col !items-start'>
          <p className='text-tiny text-white/60 uppercase font-bold'>Estudos</p>
          <h4 className='text-white font-medium text-large'>
            Veja as referências
          </h4>
        </CardHeader>

        <Image
          removeWrapper
          radius='none'
          alt='Pessoas segurando papeis'
          className='z-0 w-full h-full object-cover'
          src='/img/referencias.jpg'
        />
      </Card>
      <Card className='col-span-12 sm:col-span-6 h-[300px]' radius='none'>
        <CardHeader className='absolute z-10 top-1 flex-col !items-start'>
          <p className='text-tiny text-white/60 uppercase font-bold'>Estudos</p>
          <h4 className='text-white font-medium text-large'>
            Veja as referências
          </h4>
        </CardHeader>

        <Image
          removeWrapper
          radius='none'
          alt='Pessoas segurando papeis'
          className='z-0 w-full h-full object-cover'
          src='/img/referencias.jpg'
        />
      </Card>
      <Card className='col-span-12 sm:col-span-6 h-[300px]' radius='none'>
        <CardHeader className='absolute z-10 top-1 flex-col !items-start'>
          <p className='text-tiny text-white/60 uppercase font-bold'>Estudos</p>
          <h4 className='text-white font-medium text-large'>
            Veja as referências
          </h4>
        </CardHeader>

        <Image
          removeWrapper
          radius='none'
          alt='Pessoas segurando papeis'
          className='z-0 w-full h-full object-cover'
          src='/img/referencias.jpg'
        />
      </Card>
      <Card className='col-span-12 sm:col-span-6 h-[300px]' radius='none'>
        <CardHeader className='absolute z-10 top-1 flex-col !items-start'>
          <p className='text-tiny text-white/60 uppercase font-bold'>
            Willian Gonçalves
          </p>
          <h4 className='text-white font-medium text-large object-right'>
            Grupo NEMO
          </h4>
        </CardHeader>

        <Image
          removeWrapper
          radius='none'
          alt='Integrante Willian'
          className='z-0 w-full h-full object-contain object-left'
          src='https://avatars.githubusercontent.com/u/118922633?v=4'
        />
      </Card>
    </div>
  );
};

export default Grupo;
