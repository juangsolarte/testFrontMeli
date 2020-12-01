import React, { useEffect, useState } from 'react';
import BreadCrumbComponent from '../../components/BreadCrumb/BreadCrumbComponent';
import SearchBarComponent from '../../components/SearchBar/SearchBarComponent';
import './SearchDetail.scss';
import {parse} from 'qs';
import ProductListComponent from '../../components/ProductList/ProductListComponent';
import ProductNotFoundComponent from '../../components/ProductNotFound/ProductNotFoundComponent';
import {Helmet} from 'react-helmet';

const SearchDetail: React.FC = (props: any) => {
  
  const [lstProducts, setLstProducts] = useState([]);
  const [lstCategories, setLstCategories] = useState([]);
  const [search, setSearch] = useState('');
  const searchParam = parse(props.location.search.substr(1)).search?.toString();

  useEffect(() => {
    setSearch(searchParam !== undefined ? searchParam : '');
  }, [searchParam]);

  useEffect(() => {
    const getProducts = (search: string) => {
      setSearch(search);
      requestInitData(search)
        .then((data: any) => {
          setLstProducts(!data ? [] : data.items);
          setLstCategories(!data ? [] : data.categories);
        });
    };
    if (search !== undefined && search.length) {
      getProducts(search.toString());
    }
  }, [search]);
  
  async function requestInitData(search, baseUrl = '') {
    try {
      const response = await fetch(baseUrl + "/api/items?search=" + search);
      return await response.json();
    } catch (error) {
      return console.log(error);
    }
  }

  const categoriesDesc = !lstCategories ? '' : lstCategories.join(' - ');

  return (
    <>
      <Helmet>
        <title>{searchParam} en Mercado Libre</title>
        <meta name="description" content={categoriesDesc} data-react-helmet="true"></meta>
      </Helmet>
      <SearchBarComponent />
      <div className="main-wrapper">
        <div className="spaceBreadCrumb" />
          <BreadCrumbComponent crumbs={lstCategories} />
        <div className="spaceBreadCrumb" />
        {!lstProducts ? <ProductNotFoundComponent /> : <ProductListComponent products={lstProducts} />}
      </div>
    </>
  );
};

export default SearchDetail;