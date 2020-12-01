import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { Helmet } from 'react-helmet';

const Home: React.FC = () => {

    return (
      <>
      <Helmet>
        <title>Buscar | Mercado Libre</title>
        <meta name="description" content="Ingresa el producto a buscar | Mercado Libre" data-react-helmet="true"></meta>
      </Helmet>
      <div>
        <SearchBar />
        <div className="main-wrapper"></div>
      </div>
      </>
    );
};

export default Home;