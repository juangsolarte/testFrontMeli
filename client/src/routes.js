import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import SearchDetail from './pages/SearchDetail/SearchDetail';

const routes = [{
        path: "/",
        component: Home,
        exact: true
    },
    {
        path: "/items",
        component: SearchDetail,
        exact: true
    },
    {
        path: "/items/:id",
        component: Product,
        exact: true
    }
];

export default routes;