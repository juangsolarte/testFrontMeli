import React from 'react';
import './ProductList.scss';
import ProductListItemComponent from './ProductListItemComponent';

interface ProductListComponentProps {
    products: any;
}

const ProductListComponent: React.FC<ProductListComponentProps> = (props: any) => {

    let products = [];
    if (props.products && props.products.length) {
        products = props.products.map((product, ind) => {
            return <ProductListItemComponent key={product.id} product={product} index={ind} />;
        });      
    }

    return (
      <div className='container'>
        <div className='listWrap'>
          <div className='container-fluid'>{products}</div>
        </div>
      </div>
    );
};

export default ProductListComponent;