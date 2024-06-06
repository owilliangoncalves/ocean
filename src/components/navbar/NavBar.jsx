import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';
import FiapLogo from '/img/fiapLogo.svg';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <Navbar shouldHideOnScroll className='bg-transparent'>
      <NavbarBrand>
        <img src={FiapLogo} alt='' />
      </NavbarBrand>
      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <NavbarItem>
          <Link to='/'>
            <a className='text-verdeSecundario p-2 rounded-md hover:bg-verdePrimario transition duration-300 active:bg-verdePrimario uppercase'>
              Home
            </a>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to=''>
            <a
              className='text-verdeSecundario p-2 rounded-md hover:bg-verdePrimario transition duration-300 uppercase '
              href=''
            >
              Desafio
            </a>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to='/estudos'>
            <a
              className='text-verdeSecundario p-2 rounded-md hover:bg-verdePrimario transition duration-300 uppercase '
              href=''
            >
              Estudos
            </a>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to='/problema'>
            <a
              className='text-verdeSecundario p-2 rounded-md hover:bg-verdePrimario transition duration-300 uppercase'
              href=''
            >
              Problema
            </a>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to='/solucao'>
            <a
              className='text-verdeSecundario p-2 rounded-md hover:bg-verdePrimario transition duration-300 uppercase'
              href=''
            >
              Solução
            </a>
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
