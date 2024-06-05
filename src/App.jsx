import NavBar from './components/navbar/NavBar.jsx';
import Content from './components/content/Content.jsx';

import Teste from './grupo/Teste.jsx';
import Footer from './components/footer/Footer.jsx';
import { Fragment } from 'react';

export function App() {
  return (
    <Fragment>
      {/* lembrar de adicionar classe "isActive" la no componente se o link estiver ativo */}
      <NavBar />
      {/* <Header /> */}
      <Content />
      <Teste />
      <Footer />
    </Fragment>
  );
}

export default App;
