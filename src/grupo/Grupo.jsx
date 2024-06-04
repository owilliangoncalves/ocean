import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
} from '@nextui-org/react';

const Grupo = () => {
  return (
    <div>
      <Card className='max-w-[340px]'>
        <CardHeader className='justify-between'>
          <div className='flex gap-5'>
            <Avatar
              radius='full'
              size='md'
              src='https://avatars.githubusercontent.com/u/118922633?v=4'
            />
            <div className='flex flex-col gap-1 items-start justify-center'>
              <h4 className='text-small font-semibold leading-none text-default-600'>
                Willian Gonçalves
              </h4>
            </div>
          </div>
        </CardHeader>
        <CardBody className='px-3 py-0 text-small text-default-400'>
          <p>Estudante de Engenharia de Software na FIAP</p>
          <span className='pt-2'>
            #GlobalSolution
            <span className='py-2' aria-label='computer' role='img'>
              💻
            </span>
          </span>
        </CardBody>
        <CardFooter className='gap-3'>
          <div className='flex gap-1'>
            <p className='font-semibold text-default-400 text-small'>Grupo</p>
            <p className=' text-default-400 text-small'>NEMO</p>
          </div>
          <div className='flex gap-1'>
            <p className='font-semibold text-default-400 text-small'>Ocean</p>
            <p className='text-default-400 text-small'>2024</p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Grupo;
