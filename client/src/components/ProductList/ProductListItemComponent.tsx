import React from 'react';
import { Link } from 'react-router-dom';
import './ProductList.scss';
import ShippingImg from './ic_shipping.png';

interface ProductsListItemProps {
    key: number;
    product: any;
    index: number;
}

const ProductListItemComponent: React.FC<ProductsListItemProps> = (props) => {

    return (
      <div className='product-list'>
        <div className='row'>
          <div className='image-content'>
            <Link to={`/items/${props.product.id}`}>
              <img src={props.product.picture} className="imgProduct" alt='Product' />
            </Link>
          </div>
          <div className="double-column">
            <div className="contain-detail">
              <div className='info-product'>
                <div className='shippingInline'>
                  <Link className="txtAmount" to={`/items/${props.product.id}`}>
                    <div className="txtAmount">{props.product.price.amount}
                      {props.product.free_shipping && (
                        <img className="imgShipping"
                          src={ShippingImg}
                          alt='shipping'
                        />
                      )}
                    </div>
                  </Link>
                </div>
                <div className="textDescription">{props.product.title}</div>
                <div className="textDescription">Completo Unico!</div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="location">
              <p>{props.product.address}</p>
            </div>
          </div>
        </div>
        {props.index < 3 && (
          <div className="borderBottom" />
        )}
      </div>
    );
};

export default ProductListItemComponent;