import React from 'react';
import './ProductDetails.scss';

interface ProductDetailsComponentProps {
    product: any;
}

const ProductDetailsComponent: React.FC<ProductDetailsComponentProps> = (props) => {
    return (
      <>
      <div className='container'>
        <div className='listWrap'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='columnImg'>
                <img
                  className='imgProduct'
                  src={props.product.picture}
                  alt='Product'
                />
              </div>
              <div className='columnProduct'>
                <div className="conditionStyle">
                  {props.product.condition}
                  {props.product.sold_quantity !== 0
                    ? ` - ${props.product.sold_quantity} vendidos`
                    : ''}
                </div>
                <div className="titleProduct">{props.product.title}</div>
                <div className="priceProduct">{props.product.price?.amount}</div>
                <button type='button' className='btnBuy'>
                  Comprar
                </button>
              </div>
            </div>
            <div className="leftSpaceDescription">
                <div className="titleDescription">Descripción del Producto</div>
                <div className="descriptionProduct">
                    {props.product.description}
                </div>
            </div>
          </div>
        </div>
      </div>
      </>
    );
}

export default ProductDetailsComponent;