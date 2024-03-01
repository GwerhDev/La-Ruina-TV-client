import s from './SliderList.module.css';
import { SliderCard } from './SliderCard';

export const SliderList = ({ data, keyID }) => {
  return (
    <div className={s.sliderItems}>
      <ul className={s.sliderListaItems} id={`${keyID}-itemlist`}>
        {
          data?.map((e, i) => {
            return (
              <li value={e.id} key={i}>
                <SliderCard id={e.id} imageSlider={e.imageSlider} title={e.title} keyID={keyID} />
              </li>
            )
          })
        }
      </ul>
    </div>
  );
};