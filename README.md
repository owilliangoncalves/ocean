**OCEAN - Projeto de Conscientização e Combate à Poluição Marinha com Azure IA e Machine Learning**

    O projeto OCEAN é uma iniciativa da faculdade para aumentar a conscientização sobre a poluição marinha e apresentar uma solução tecnológica inovadora para combatê-la: a utilização de inteligência artificial (IA), aprendizado de máquina (Machine Learning) e sensores para identificar, quantificar e rastrear a origem da poluição em tempo real, utilizando os serviços Azure IA e Machine Learning da Microsoft.

Solução Proposta

    Nossa solução consiste na instalação de câmeras subaquáticas e sensores em pontos estratégicos do oceano, com foco inicial nas áreas onde os rios desaguam no mar. As câmeras capturarão imagens em alta resolução que serão enviadas para o Azure, onde o serviço Azure Custom Vision será utilizado para treinar um modelo de IA capaz de identificar diferentes tipos de poluição, como garrafas PET, sacolas plásticas, redes de pesca abandonadas, entre outros.

    Os sensores coletarão dados adicionais sobre a qualidade da água, como temperatura, salinidade, pH e presença de poluentes químicos. Esses dados, combinados com as imagens, serão enviados para o Azure Machine Learning, onde serão utilizados para treinar modelos de aprendizado de máquina capazes de identificar padrões e correlações entre os diferentes tipos de poluição e as condições da água, auxiliando na identificação das fontes e no desenvolvimento de soluções mais eficazes.

Dados Necessários e Retornados

Dados Necessários:

    Imagens: 
        Imagens em alta resolução capturadas pelas câmeras subaquáticas, devidamente rotuladas com os tipos de poluição presentes.
        Dados de Sensores: Dados coletados pelos sensores sobre a qualidade da água, como temperatura, salinidade, pH e presença de poluentes químicos.
        Dados Retornados:

    Identificação de Poluição: 
        O Azure Custom Vision retornará a identificação dos tipos de poluição presentes nas imagens, com um grau de confiança para cada identificação.
        Análise de Dados: O Azure Machine Learning retornará análises e insights sobre os dados coletados, como correlações entre os tipos de poluição e as condições da água, identificação de fontes de poluição e previsões sobre a evolução da poluição ao longo do tempo.



Tecnologias Utilizadas

    React: Biblioteca JavaScript para construção de interfaces de usuário.
    Tailwind CSS: Framework CSS utilitário para estilização rápida e responsiva.
    Next UI: Biblioteca de componentes React com design moderno e intuitivo.
    Azure Custom Vision: Serviço de IA da Microsoft para treinamento de modelos de visão computacional personalizados.
    Azure Machine Learning: Serviço de aprendizado de máquina da Microsoft para treinamento e implantação de modelos de IA.
    Sensores: Para coleta de dados sobre a qualidade da água.

Passos do projeto

    Coletar dados: Capturar imagens e dados de sensores em diferentes pontos do oceano.
    Rotular dados: Identificar e rotular os diferentes tipos de poluição presentes nas imagens.
    Treinar modelos: Utilizar o Azure Custom Vision e o Azure Machine Learning para treinar modelos de IA e aprendizado de máquina.
    Implantar modelos: Implantar os modelos treinados no Azure para realizar a análise de dados em tempo real.
    Desenvolver interface: Utilizar React, Tailwind CSS e Next UI para criar uma interface intuitiva para visualizar os dados e resultados da análise.

Instalação

1 - Clone o repositório:

    git clone https://github.com/owilliangoncalves/ocean.git
    
    Use code with caution.

2 - Navegue até o diretório do projeto:

    cd ocean
    
    Use code with caution.

3 - Instale as dependências:

    npm install
    
    Use code with caution.

4 - Instale o Next UI

    npx nextui-cli@latest init
    
    Use code with caution.

5 - Istale o VITE

    npm create vite@latest

    Use code with caution.


**Execução**

Para iniciar o servidor de desenvolvimento, execute:

    npm run dev
    
    Use code with caution.

Em seguida, acesse http://localhost:3000 no seu navegador para visualizar o projeto.

Contribuição

Sinta-se à vontade para contribuir com o projeto! Crie um fork do repositório, faça suas alterações e envie um pull request.