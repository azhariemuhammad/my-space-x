import React, { Suspense } from 'react';
import { useData } from 'react-isomorphic-data';
import Container from 'react-bootstrap/Container';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import SliderSpace from './Slider';
import './styles.css';

const YoutubeIframe = React.lazy(() =>
  import(
    /* webpackChunkName: "YoutubeIframe-Component" */ './YoutubeIframe/YoutubeIframe'
  )
);

const ContainerComponent = () => {
  const { data, loading } = useData(
    'https://opaque-rift-antique.glitch.me/api/spaceships',
    {}
  );

  return (
    <>
      <nav className="navbar">
        <a href="#" className="logo">
          <h1>My SpaceX</h1>
        </a>
      </nav>

      <Container fluid className="p-4">
        <Row>
          <Col sm={12} lg={6}>
            {!loading && data && data.length && (
              <SliderSpace spaceships={data} />
            )}
          </Col>
          <Col sm={12} lg={6}>
            <div className="iframe-wrapper">
              <Suspense fallback={<div>Loading...</div>}>
                <YoutubeIframe vidUrl="https://www.youtube.com/embed/ap-BkkrRg-o" />
              </Suspense>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContainerComponent;
