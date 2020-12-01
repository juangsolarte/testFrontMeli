import React from 'react';

const ProductNotFoundComponent: React.FC = (props: any) => {
    return (
        <div className='container'>
        <div className='listWrap'>
          <div className='container-fluid'>No encontraron resultados para su busqueda</div>
        </div>
      </div>
    );
}

export default ProductNotFoundComponent;