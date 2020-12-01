import React from 'react';
import './App.scss';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import routes from './routes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route, i) => <Route key={i} {...route} />)}
      </Switch>
    </BrowserRouter>
  );
      
}

export default App;