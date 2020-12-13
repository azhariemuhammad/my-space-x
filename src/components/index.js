import { useData } from 'react-isomorphic-data';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import SliderSpace from './Slider';
import './styles.css';

const ContainerComponent = () => {
  const { data, loading } = useData(
    'https://opaque-rift-antique.glitch.me/api/spaceships',
    {}
  );

  console.log({ data });
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
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/ap-BkkrRg-o"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContainerComponent;
