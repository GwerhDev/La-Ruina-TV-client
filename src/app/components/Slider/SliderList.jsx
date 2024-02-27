import { SliderCard } from './SliderCard';

export const SliderList = ({ data, style, keyID }) => {
  return (
    <div className={style.sliderItems}>
      <ul className={style.sliderListaItems} id={`${keyID}-itemlist`}>
        {
          data?.map((e, i) => {
            return (
              <li value={e.id} key={i}>
                <SliderCard id={e.id} imageSlider={e.imageSlider} title={e.title} style={style} keyID={keyID} />
              </li>
            )
          })
        }
      </ul>
    </div>
  );
};