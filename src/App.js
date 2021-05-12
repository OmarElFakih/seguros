import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';
import Condicionado from './views/Condicionado';
import CondicionesWeb from './views/CondicionesWeb';
import Cotizador from './views/Cotizador';
import PoliticaPrivacidad from './views/PoliticaPrivacidad';


import 'bootstrap/dist/css/bootstrap.min.css';

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          <AppRoute exact path="/cotizador" component={Cotizador} layout={LayoutDefault} />
          <AppRoute exact path="/condicionado" component={Condicionado} layout={LayoutDefault} />
          <AppRoute exact path="/condicionesWeb" component={CondicionesWeb} layout={LayoutDefault} />
          <AppRoute exact path="/politicaPrivacidad" component={PoliticaPrivacidad} layout={LayoutDefault} />
        </Switch>
      )} />
  );
}

export default App;