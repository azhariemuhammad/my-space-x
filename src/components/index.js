import './styles.css';

const Container = () => {
  return (
    <>
      <nav className="navbar">
        <a href="#" className="logo">
          <h1>My SpaceX</h1>
        </a>
        <div className="nav-wrapper">
          <ul className="nav-links">
            <li className="nav-item">Falcon 9</li>
            <li className="nav-item">Falcon Heavy</li>
            <li className="nav-item">Dragon</li>
          </ul>
        </div>
      </nav>
      <div className="content">
        <div className="inner-content">
          <div className="inner-content-left">
            <div className="box-desc">
              <h1>STARSHIP SN8 TAKES FLIGHT</h1>
              <div className="desc">
                <p>
                  SpaceX’s Starship spacecraft and Super Heavy rocket
                  (collectively referred to as Starship) represent a fully
                  reusable transportation system designed to carry both crew and
                  cargo to Earth orbit, the Moon, Mars and beyond. Starship will
                  be the world’s most powerful launch vehicle ever developed,
                  with the ability to carry in excess of 100 metric tonnes to
                  Earth orbit.
                </p>
              </div>
            </div>
          </div>
          <div className="inner-content-right">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Container;
