import { Glide } from 'react-glide';

import DragonImg from '../../assets/dragon-img.webp';
import F9Img from '../../assets/f9-feature.webp';

const SliderSpace = ({ spaceships }) => {
  return (
    <Glide height={500} width="100%">
      {spaceships &&
        spaceships.map((s, idx) => {
          return (
            <div key={idx}>
              <h3>{s.title}</h3>
              <img src={s.imgUrl} width="100%" height="200px"></img>
              <div className="desc mt-4">
                <p>{s.description}</p>
              </div>
            </div>
          );
        })}
    </Glide>
  );
};

export default SliderSpace;
