import React from 'react';

import { Container, Header, Footer } from './styles';

// eslint-disable-next-line import/no-unresolved
import scarecrow from '../../assets/scarecrow.png';

const PageNotFound: React.FC = () => {
  return (
    <Container>
      <Header>
        <h1>404 not found</h1>
      </Header>
      <main>
        <img src={scarecrow} alt={scarecrow} />

        <div>
          <h1>I have bad news for you</h1>
          <p>
            The page you are looking for might be removed or is temporarily
            unavailable
          </p>
          <button type="button">Back to homepage</button>
        </div>
      </main>
      <Footer>
        <span>Lucasrs @ DevChallenges.io</span>
      </Footer>
    </Container>
  );
};

export default PageNotFound;
