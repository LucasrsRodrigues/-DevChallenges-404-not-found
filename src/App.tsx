import React from 'react';

import GlobalStyle from './styles/global';
import PageNotFound from './pages/PageNotFound';

const src: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <PageNotFound />
    </>
  );
};

export default src;
