import React, { useEffect, useState } from 'react';
import BreadCrumbComponent from '../../components/BreadCrumb/BreadCrumbComponent';
import SearchBarComponent from '../../components/SearchBar/SearchBarComponent';
import ProductDetailsComponent from '../../components/ProductDetails/ProductDetailsComponent';
import {Helmet} from 'react-helmet';

const Product: React.FC = (props: any) => {
  const idProduct = props.match.params.id;

  const [product, setProducts] = useState<any>([]);
  const [lstCategories, setLstCategories] = useState([]);
  const [identificationProduct, setIdentificationProduct] = useState(idProduct);

  useEffect(() => {
    const getProduct = (id: string) => {
      setIdentificationProduct(id);
      requestInitData(id)
        .then((data: any) => {
          setProducts(data.item);
          setLstCategories(data.categories);
        });
    };
    if (identificationProduct !== undefined && identificationProduct.length) {
      getProduct(identificationProduct.toString());
    }
  }, [identificationProduct]);
  
  async function requestInitData(id: string, baseUrl = '') {
    try {
      const response = await fetch(baseUrl + "/api/items/" + id);
      return await response.json();
    } catch (error) {
      return console.log(error);
    }
  }

  return (
    <> 
      <Helmet>
        <title>{product.title}</title>
        <meta name="description" content={product.description} data-react-helmet="true"></meta>
      </Helmet>
      <SearchBarComponent />
      <div className="main-wrapper">
        <div className="spaceBreadCrumb" />
          <BreadCrumbComponent crumbs={lstCategories} />
        <div className="spaceBreadCrumb" />
        <ProductDetailsComponent product={product} />
      </div>
    </>
  );
};

export default Product;