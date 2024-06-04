import NavBar from './components/navbar/NavBar.jsx';
import Content from './components/content/Content.jsx';

export function App() {
  return (
    <>
      {/* lembrar de adicionar classe "isActive" la no componente se o link estiver ativo */}
      <NavBar />
      {/* <Header /> */}
      <Content />
    </>
  );
}

export default App;
