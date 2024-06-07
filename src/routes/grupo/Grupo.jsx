import { Card, CardBody, Image } from '@nextui-org/react';

const Grupo = () => {
  return (
    <div className='col-span-12 md:col-span-12 '>
      <Card radius='none'>
        <CardBody className='pt-20'>
          <h1 className='uppercase mb-4 titulo text-verdeSecundario'>
            Grupo nemo
          </h1>
          <div className='flex gap-4'>
            <div className=''>
              <Image
                radius='none'
                src='https://avatars.githubusercontent.com/u/123277481?v=4'
                alt=''
              />
              <p> Guilherme Nunes</p>
              <p>RM: 554327</p>
            </div>
            <div>
              <Image
                radius='none'
                src='https://avatars.githubusercontent.com/u/121178343?v=4'
                alt=''
              />
              <p> Pedro Ernesto</p>
              <p>RM: 553679</p>
            </div>
            <div>
              <Image
                radius='none'
                src='https://avatars.githubusercontent.com/u/135673275?v=4'
                alt=''
              />
              <p>Lucas Henrique</p>
              <p>RM: 552726</p>
            </div>
            <div>
              <Image
                radius='none'
                src='https://avatars.githubusercontent.com/u/118922633?v=4'
                alt=''
              />
              <p>Willian Gonçalves</p>
              <p>RM: 553417</p>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Grupo;
