import React from 'react';
import './BreadCrumb.scss'

interface BreadCrumbProps {
    crumbs: any;
}

const BreadCrumbComponent: React.FC<BreadCrumbProps> = (props) => {

    let breadcrumbs = [];

    if (props.crumbs?.length) {
        breadcrumbs = props.crumbs.map((crumb) => {
            return <li className='breadcrumb-item' key={crumb}>{crumb}</li>;
        });
    }

    return (
    <div>
        <ol className='breadcrumb'>{breadcrumbs}</ol>
    </div>
    );
};

export default BreadCrumbComponent;