import { Card, CardBody, CardHeader, Image } from '@nextui-org/react';

const Footer = () => {
  return (
    <Card>
      <CardHeader className='text-7xl'> Parceiros</CardHeader>
      <CardBody className='container sm:flex'>
        <Image src='/img/rede-oceano-limpo-logo.svg' />
        <Image src='/img/aws-partner-logo.svg' alt='' />
        <Image src='/img/softtek-logo.svg' alt='' />
        <Image src='/img/pacto-global.svg' alt='' />
        <Image src='/img/select.svg' alt='' />
        <Image src='/img/catedra.svg' alt='' />
        <Image src='/img/unesco.svg' alt='' />
        <Image src='/img/o2o.svg' alt='' />
      </CardBody>
    </Card>
  );
};

export default Footer;
